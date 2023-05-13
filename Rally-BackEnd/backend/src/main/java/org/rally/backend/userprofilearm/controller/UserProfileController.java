package org.rally.backend.userprofilearm.controller;

import org.rally.backend.eventsarm.models.Event;
import org.rally.backend.eventsarm.repository.EventRepository;
import org.rally.backend.forumarm.models.ForumPosts;
import org.rally.backend.forumarm.models.Replies;
import org.rally.backend.forumarm.repository.ForumPostRepository;
import org.rally.backend.forumarm.repository.RepliesRepository;
import org.rally.backend.userprofilearm.exception.MinimumCharacterException;
import org.rally.backend.userprofilearm.model.*;
import org.rally.backend.userprofilearm.model.dto.DirectMessageDTO;
import org.rally.backend.userprofilearm.model.dto.UserInfoDTO;
import org.rally.backend.userprofilearm.model.response.ResponseMessage;
import org.rally.backend.userprofilearm.model.UserPostHistory;
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
    ServiceRepository serviceRepository;
    EventRepository eventRepository;


    @Autowired
    public UserProfileController(UserRepository userRepository,
                                 RoleRepository roleRepository,
                                 UserInformationRepository userInformationRepository,
                                 DirectMessageRepository directMessageRepository,
                                 ProfilePictureRepository profilePictureRepository,
                                 ForumPostRepository forumPostRepository,
                                 RepliesRepository repliesRepository,
                                 HiddenPostRepository hiddenPostRepository,
                                 ServiceRepository serviceRepository,
                                 EventRepository eventRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userInformationRepository = userInformationRepository;
        this.directMessageRepository = directMessageRepository;
        this.profilePictureRepository = profilePictureRepository;
        this.forumPostRepository = forumPostRepository;
        this.repliesRepository = repliesRepository;
        this.hiddenPostRepository = hiddenPostRepository;
        this.serviceRepository = serviceRepository;
        this.eventRepository = eventRepository;
    }

    /** GET REQUEST **/
    /** GET REQUEST **/
    /** GET REQUEST **/

    @GetMapping("/search")
    public List<UserEntity> displayAllUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("/getViewUserBundleInformation/{userName}")
    public ResponseEntity<?> getViewUserInformation(@PathVariable String userName) {

        Optional<UserEntity> areYouThere = Optional.ofNullable(userRepository.findByUserName(userName));
        if (areYouThere.isEmpty()) {
            return new ResponseEntity<>(new ResponseMessage("404"), HttpStatus.OK);
        }

        /** call post history and favorites here when ready **/
        UserEntity targetUser = userRepository.findByUserName(userName);
        Optional<UserInformation> targetInformation = userInformationRepository.findByUserId(targetUser.getId());
        UserDmHistory targetDirectMessages = activeUserDirectMessageHistory(targetUser.getId());

        return new ResponseEntity<>(new UserBundle(targetUser, targetInformation, targetDirectMessages), HttpStatus.OK);

    }

    @GetMapping("/getMainUserBundleInformation/{userName}")
    public ResponseEntity<?> getMainUserBundle(@PathVariable String userName) {

        Optional<UserEntity> areYouThere = Optional.ofNullable(userRepository.findByUserName(userName));
        if (areYouThere.isEmpty()) {
            return new ResponseEntity<>(new ResponseMessage("404"), HttpStatus.OK);
        }

        UserEntity targetUser = userRepository.findByUserName(userName);
        Optional<UserInformation> targetInformation = userInformationRepository.findByUserId(targetUser.getId());
        UserDmHistory targetDirectMessages = activeUserDirectMessageHistory(targetUser.getId());
        UserPostHistory targetUserPostHistory = new UserPostHistory();

        List<HiddenPost> targetHiddenPost = getHiddenPostListForUserBundleMain(targetUser.getId());
        targetUserPostHistory.setViewUserHiddenPost(targetHiddenPost);
        List<ForumPosts> targetForumPost = getUserForumPost(targetUser.getId());
        targetUserPostHistory.setViewUserForumPost(targetForumPost);
        List<Replies> targetForumReplies = getUserReplies(targetUser.getId());
//        System.out.println(targetForumReplies.get(0));
        targetUserPostHistory.setViewUserForumReplies(targetForumReplies);
        /** Events need username, userid, or UserEntity inside model **/
        List<Event> targetEventPost = getUserEventPost(targetUser.getUserName());
        targetUserPostHistory.setViewUserEventPost(targetEventPost);
        /** Services, Resources, RestaurantReview need username, userid, or UserEntity inside model **/

        return new ResponseEntity<>(new UserBundle(targetUser, targetInformation, targetDirectMessages, targetUserPostHistory), HttpStatus.OK);
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
    public ResponseEntity<?> getUpdatedPostHistoryViewUser(@PathVariable int userId) {

        if (!userRepository.existsById(userId)) {
            return new ResponseEntity<>(new ResponseMessage("404"), HttpStatus.OK);
        }

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

        return new ResponseEntity<>(currentPostSettings, HttpStatus.OK);
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

        UserDmHistory targetDirectMessages = activeUserDirectMessageHistory(directMessageDTO.getSentByUserId());
        List<DirectMessage> allDirectMessageHistory = targetDirectMessages.getDirectMessageList();

        return new ResponseEntity<>(allDirectMessageHistory, HttpStatus.OK);

    }


    /** Service **/
    /** Service **/
    /** Service **/

    public UserDmHistory activeUserDirectMessageHistory(int id) {

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
                    allUsers.add(targets);
                }
            }
        }

        return new UserDmHistory(allUsers, allMessagesRelatedToUser);
    }

    public List<HiddenPost> getHiddenPostListForUserBundleMain(int userId) {
        List<HiddenPost> hiddenPostList = new ArrayList<>();
        for (HiddenPost post : hiddenPostRepository.findAll()) {
            if (post.getUserId() == userId) {
                hiddenPostList.add(post);
            }
        }
        return hiddenPostList;
    }

    public List<ForumPosts> getUserForumPost(int userId) {
        List<ForumPosts> targetForumPost = new ArrayList<>();
        for (ForumPosts forumPosts : forumPostRepository.findAll()) {
            if (forumPosts.getUserEntity().getId() == userId) {
                targetForumPost.add(forumPosts);
            }
        }
        return targetForumPost;
    }

    public List<Event> getUserEventPost(String userName) {
        List<Event> targetEventPost = new ArrayList<>();
        for (Event eventPosts: eventRepository.findAll()) {
            if (Objects.equals(eventPosts.getEventHost(), userName)) {
                targetEventPost.add(eventPosts);
            }
        }
        return targetEventPost;
    }

    public List<Replies> getUserReplies(int userId){
        List<Replies> targetForumPostReplies = new ArrayList<>();
        for (Replies forumReplies: repliesRepository.findAll()) {
            if (forumReplies.getUserEntity().getId() == userId) {
                targetForumPostReplies.add(forumReplies);
            }
        }
        return targetForumPostReplies;
    }


}
