package org.rally.backend.userprofilearm.controller;

import org.rally.backend.userprofilearm.exception.MinimumCharacterException;
import org.rally.backend.userprofilearm.model.*;
import org.rally.backend.userprofilearm.model.dto.DirectMessageDTO;
import org.rally.backend.userprofilearm.model.dto.UserInfoDTO;
import org.rally.backend.userprofilearm.repository.DirectMessageRepository;
import org.rally.backend.userprofilearm.repository.RoleRepository;
import org.rally.backend.userprofilearm.repository.UserInformationRepository;
import org.rally.backend.userprofilearm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/user")
public class UserProfileController {

    UserRepository userRepository;
    UserInformationRepository userInformationRepository;
    RoleRepository roleRepository;
    DirectMessageRepository directMessageRepository;


    @Autowired
    public UserProfileController(UserRepository userRepository,
                                 RoleRepository roleRepository,
                                 UserInformationRepository userInformationRepository,
                                 DirectMessageRepository directMessageRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userInformationRepository = userInformationRepository;
        this.directMessageRepository = directMessageRepository;
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
    public ViewUserBundle getViewUserInformation(@PathVariable String userName) {

        /** call post history and favorites here when ready **/
        UserEntity targetUser = userRepository.findByUserName(userName);
        Optional<UserInformation> targetInformation = userInformationRepository.findByUserId(targetUser.getId());

        return new ViewUserBundle(targetUser, targetInformation);

    }

    @GetMapping("/getMainUserBundleInformation/{userName}")
    public MainUserBundle getMainUserBundle(@PathVariable String userName) {

        UserEntity targetUser = userRepository.findByUserName(userName);
        Optional<UserInformation> targetInformation = userInformationRepository.findByUserId(targetUser.getId());

        MainUserDmHistory targetDirectMessages = activeUserDirectMessageHistory(targetUser.getId());
        List<UserEntity> usersInDm = targetDirectMessages.getUserEntities();
        List<DirectMessage> allDmHistory = targetDirectMessages.getDirectMessageList();

        MainUserBundle userBundle =  new MainUserBundle(targetUser, targetInformation);

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


    /** POST REQUEST **/
    /** POST REQUEST **/
    /** POST REQUEST **/

    @PostMapping("/update-user-information")
    public ResponseEntity<?> updateUserInformation(@RequestBody UserInfoDTO userInfoDTO) {

        List<UserInformation> userInformationList = userInformationRepository.findAll();

        UserInformation userInformation = new UserInformation(userInfoDTO.getUserId(),
                                                              userInfoDTO.getFirstName(),
                                                              userInfoDTO.getLastName(),
                                                              userInfoDTO.getNeigborhood(),
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

        return new ResponseEntity<>(messageSent, HttpStatus.OK);

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
