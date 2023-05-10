package org.rally.backend.userprofilearm.controller;

import org.rally.backend.forumarm.models.ForumPosts;
import org.rally.backend.forumarm.repository.ForumPostRepository;
import org.rally.backend.forumarm.repository.RepliesRepository;
import org.rally.backend.userprofilearm.exception.MinimumCharacterException;
import org.rally.backend.userprofilearm.model.*;
import org.rally.backend.userprofilearm.model.dto.DirectMessageDTO;
import org.rally.backend.userprofilearm.model.dto.UserInfoDTO;
import org.rally.backend.userprofilearm.model.response.ResponseMessage;
import org.rally.backend.userprofilearm.repository.*;
import org.rally.backend.userprofilearm.utility.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/user")
public class UserProfileController {

    UserRepository userRepository;
    UserInformationRepository userInformationRepository;
    RoleRepository roleRepository;
    DirectMessageRepository directMessageRepository;
    ProfilePictureRepository profilePictureRepository;
    ForumPostRepository forumPostRepository;
    RepliesRepository repliesRepository;
    HiddenPostRepository hiddenPostRepository;


    @Autowired
    public UserProfileController(UserRepository userRepository,
                                 RoleRepository roleRepository,
                                 UserInformationRepository userInformationRepository,
                                 DirectMessageRepository directMessageRepository,
                                 ProfilePictureRepository profilePictureRepository,
                                 ForumPostRepository forumPostRepository,
                                 RepliesRepository repliesRepository,
                                 HiddenPostRepository hiddenPostRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userInformationRepository = userInformationRepository;
        this.directMessageRepository = directMessageRepository;
        this.profilePictureRepository = profilePictureRepository;
        this.forumPostRepository = forumPostRepository;
        this.repliesRepository = repliesRepository;
        this.hiddenPostRepository = hiddenPostRepository;
    }

    /** GET REQUEST **/
    /** GET REQUEST **/
    /** GET REQUEST **/

    @GetMapping("/search")
    public List<UserEntity> displayAllUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("/searchid/{id}")
    public Optional<UserEntity> displayUser(@PathVariable int id) { return userRepository.findById(id); }

    @GetMapping("/userinfo/{id}")
    public Optional<UserInformation> displayUserInformation(@PathVariable int id) {
        return userInformationRepository.findById((id));
    }

    @GetMapping("/searchUserName/{userName}")
    public  UserEntity searchByUserName(@PathVariable String userName) {
        return userRepository.findByUserName(userName);
    }

    @GetMapping("/getViewUserBundleInformation/{userName}")
    public UserBundle getViewUserInformation(@PathVariable String userName) {

        /** call post history and favorites here when ready **/
        UserEntity targetUser = userRepository.findByUserName(userName);
        Optional<UserInformation> targetInformation = userInformationRepository.findByUserId(targetUser.getId());

        return new UserBundle(targetUser, targetInformation);

    }

    @GetMapping("/getMainUserBundleInformation/{userName}")
    public UserBundle getMainUserBundle(@PathVariable String userName) {

        UserEntity targetUser = userRepository.findByUserName(userName);
        Optional<UserInformation> targetInformation = userInformationRepository.findByUserId(targetUser.getId());

        MainUserDmHistory targetDirectMessages = activeUserDirectMessageHistory(targetUser.getId());
        List<UserEntity> usersInDm = targetDirectMessages.getUserEntities();
        List<DirectMessage> allDmHistory = targetDirectMessages.getDirectMessageList();

        UserBundle userBundle =  new UserBundle(targetUser, targetInformation, targetDirectMessages);

        return userBundle;
    }

    @GetMapping("/getUserInformationByUserId/{id}")
    public Optional<UserInformation> searchUserInfoRepositoryByUserId(@PathVariable int id) {

        List<UserInformation> userInformationList = userInformationRepository.findAll();
        Optional<UserInformation> userInformation = Optional.of(new UserInformation());
        for (UserInformation info : userInformationList) {
            if (info.getUserId() == id) {
                userInformation = userInformationRepository.findById(info.getId());
            }
        }

        return userInformation;
    }

    @GetMapping("/getActiveUserDirectMessageHistory/{id}")
    public List<UserEntity> getUserListWithDmHistory(@PathVariable int id) {
        MainUserDmHistory targetDirectMessages = activeUserDirectMessageHistory(id);
        List<UserEntity> targetUsersWithDmHistory = targetDirectMessages.getUserEntities();

        return targetUsersWithDmHistory;
    }

    @GetMapping("/getActiveUserDmList/{id}")
    public List<DirectMessage> getDirectMessagesForUser(@PathVariable int id) {
        MainUserDmHistory targetDirectMessages = activeUserDirectMessageHistory(id);
        List<DirectMessage> allDirectMessageHistory = targetDirectMessages.getDirectMessageList();

        return allDirectMessageHistory;
    }

    @GetMapping("/getHiddenPostList/{userId}")
    public List<HiddenPost> getHiddenPostListByUserId(@PathVariable int userId) {
        List<HiddenPost> hiddenPostList = new ArrayList<>();
        for (HiddenPost post : hiddenPostRepository.findAll()) {
            if (post.getUserId() == userId) {
                hiddenPostList.add(post);
            }
        }
        return hiddenPostList;
    }

    @GetMapping("/getUpdatedPostHistoryViewUser/{userId}")
    public List<ForumPosts> getUpdatedPostHistoryViewUser(@PathVariable int userId) {

        List<ForumPosts> currentPostSettings = new ArrayList<>();
        List<HiddenPost> hiddenPostList = new ArrayList<>();
        List<ForumPosts> userPost = new ArrayList<>();

        for (HiddenPost post : hiddenPostRepository.findAll()) {
            if (post.getUserId() == userId) {
                hiddenPostList.add(post);
            }
        }

        for (ForumPosts post : forumPostRepository.findAll()) {
            if (post.getUserEntity().getId() == userId) {
                userPost.add(post);
                currentPostSettings.add(post);
            }
        }

        for (ForumPosts post : userPost) {
            for (HiddenPost hidden : hiddenPostList) {
                if (post.getId() == hidden.getHidePostId()) {
                    currentPostSettings.remove(post);
                }
            }
        }

        return currentPostSettings;
    }

    @GetMapping(path = {"/userProfileImage/{userId}"})
    public ResponseEntity<?> getImageDetails(@PathVariable("userId") String userId) throws IOException {

        final Optional<ProfilePicture> dbImage = profilePictureRepository.findByUserId(userId);
        if (dbImage.isEmpty()) {
            ResponseMessage responseMessage = new ResponseMessage("User does not have a profile picture.");
            return new ResponseEntity<>(responseMessage, HttpStatus.OK);
        }

        return new ResponseEntity<>(ProfilePicture.builder()
                .id(dbImage.get().getId())
                .userId(dbImage.get().getUserId())
                .type(dbImage.get().getType())
                .image(ImageUtility.decompressImage(dbImage.get().getImage())).build(), HttpStatus.OK);
    }


    /** POST REQUEST **/
    /** POST REQUEST **/
    /** POST REQUEST **/

    @PostMapping("/upload/image")
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile file)
            throws IOException {

        if (profilePictureRepository.findByUserId(file.getOriginalFilename()).isPresent()) {
            Optional<ProfilePicture> remove = profilePictureRepository.findByUserId(file.getOriginalFilename());
            profilePictureRepository.deleteById(remove.get().getId());
        }

        profilePictureRepository.save(ProfilePicture.builder()
                .userId(file.getOriginalFilename())
                .type(file.getContentType())
                .image(ImageUtility.compressImage(file.getBytes())).build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseMessage("Image uploaded successfully: " + file.getOriginalFilename()));
    }

    @PostMapping("/hidePostList")
    public ResponseEntity<?> hiddenPosts(@RequestBody int postId) {
        Optional<ForumPosts> forumPosts = forumPostRepository.findById(postId);

        for (HiddenPost post : hiddenPostRepository.findAll()) {
            if (post.getHidePostId() == forumPosts.get().getId()) {
                ResponseMessage responseMessage = new ResponseMessage("Post Already Hidden");
                return new ResponseEntity<>(responseMessage, HttpStatus.OK);
            }
        }

        HiddenPost hiddenPost = new HiddenPost(forumPosts.get().getId(), forumPosts.get().getUserEntity().getId());
        hiddenPostRepository.save(hiddenPost);
        return new ResponseEntity<>(hiddenPostRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/unhidePost")
    public ResponseEntity<?> unhidePostFromProfile(@RequestBody int postId) {
        Optional<ForumPosts> forumPosts = forumPostRepository.findById(postId);
        if (forumPosts.isPresent()) {
            HiddenPost hiddenPost = hiddenPostRepository.findByHidePostId(forumPosts.get().getId());
            hiddenPostRepository.delete(hiddenPost);
            ResponseMessage responseMessage = new ResponseMessage("Post is no longer hidden.");
            return new ResponseEntity<>(responseMessage, HttpStatus.OK);
        } else {
            ResponseMessage responseMessage = new ResponseMessage("No Post with that ID found.");
            return new ResponseEntity<>(responseMessage, HttpStatus.OK);
        }
    }

    @PostMapping("/update-user-information")
    public ResponseEntity<?> updateUserInformation(@RequestBody UserInfoDTO userInfoDTO) {

        List<UserInformation> userInformationList = userInformationRepository.findAll();

        UserInformation userInformation = new UserInformation(userInfoDTO.getUserId(),
                                                              userInfoDTO.getFirstName(),
                                                              userInfoDTO.getLastName(),
                                                              userInfoDTO.getNeighborhood(),
                                                              userInfoDTO.getCity(),
                                                              userInfoDTO.getState());

        for (UserInformation info : userInformationList) {
            if (info.getUserId() == userInfoDTO.getUserId()) {
                userInformationRepository.deleteById(info.getId());
            }
        }

        userInformationRepository.save(userInformation);

        return new ResponseEntity<>(userInformation, HttpStatus.OK);

    }

    @PostMapping("/sendDirectMessage")
    public ResponseEntity<?> updateUserInformation(@RequestBody DirectMessageDTO directMessageDTO) {

        DirectMessage messageSent = new DirectMessage(directMessageDTO.getReceivedByUserId(),
                                                      directMessageDTO.getReceivedByUserName(),
                                                      directMessageDTO.getSentByUserId(),
                                                      directMessageDTO.getSentByUserName(),
                                                      directMessageDTO.getMessageContent());

        if(messageSent.getMessageContent().toCharArray().length < 3) {
            throw new MinimumCharacterException();
        }

        directMessageRepository.save(messageSent);

        MainUserDmHistory targetDirectMessages = activeUserDirectMessageHistory(directMessageDTO.getSentByUserId());
        List<DirectMessage> allDirectMessageHistory = targetDirectMessages.getDirectMessageList();

        return new ResponseEntity<>(allDirectMessageHistory, HttpStatus.OK);

    }


    /** Service **/
    /** Service **/
    /** Service **/

    public MainUserDmHistory activeUserDirectMessageHistory(int id) {

        /** Isolating all messages from and to user **/
        UserEntity targets;
        List<UserEntity> allUsers = new ArrayList<>();
        List<DirectMessage> allMessagesRelatedToUser = new ArrayList<>();

        for (DirectMessage dm : directMessageRepository.findAll()) {

            if (dm.getReceivedByUserId().equals(id) || dm.getSentByUserId().equals(id)) {
                allMessagesRelatedToUser.add(dm);

                if (!allUsers.contains(userRepository.findByUserName(dm.getReceivedByUserName()))){
                    targets = userRepository.findByUserName(dm.getReceivedByUserName());
                    allUsers.add(targets);
                } else if (!allUsers.contains(userRepository.findByUserName(dm.getSentByUserName()))) {
                    targets = userRepository.findByUserName(dm.getSentByUserName());
                    System.out.println(targets);
                    allUsers.add(targets);
                }
            }
        }

        return new MainUserDmHistory(allUsers, allMessagesRelatedToUser);
    }


}
