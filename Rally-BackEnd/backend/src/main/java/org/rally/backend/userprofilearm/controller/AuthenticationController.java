package org.rally.backend.userprofilearm.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.rally.backend.userprofilearm.model.UserInformation;
import org.rally.backend.userprofilearm.model.dto.UserBundleDTO;
import org.rally.backend.userprofilearm.exception.AuthenticationFailure;
import org.rally.backend.userprofilearm.model.UserEntity;
import org.rally.backend.userprofilearm.model.dto.LoginDTO;
import org.rally.backend.userprofilearm.repository.RoleRepository;
import org.rally.backend.userprofilearm.repository.UserInformationRepository;
import org.rally.backend.userprofilearm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/api")
public class AuthenticationController {

    UserRepository userRepository;
    UserInformationRepository userInformationRepository;
    RoleRepository roleRepository;

    @Autowired
    public AuthenticationController(UserRepository userRepository, RoleRepository roleRepository, UserInformationRepository userInformationRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userInformationRepository = userInformationRepository;
    }

    @GetMapping("/userIdCount")
    public Integer currentUserIdCount() {
        List<UserEntity> userList = (userRepository.findAll());
        return userList.size();
    }



    @PostMapping("/register")
    public ResponseEntity<?> processRegistrationForm(@RequestBody UserBundleDTO userBundleDTO) {

        UserEntity existingUser = userRepository.findByUserName(userBundleDTO.getRegisterDTO().getUserName());

        if (existingUser != null) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("That username is taken");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        String password = userBundleDTO.getRegisterDTO().getPassword();
        String verifyPassword = userBundleDTO.getRegisterDTO().getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Passwords do not match");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        UserEntity registerNewUser = new UserEntity((userBundleDTO.getRegisterDTO().getUserName()), userBundleDTO.getRegisterDTO().getPassword());

        int userId = userBundleDTO.getUserInfoDTO().getUserId();
        String firstName = userBundleDTO.getUserInfoDTO().getFirstName();
        String lastName = userBundleDTO.getUserInfoDTO().getLastName();
        String neighborhood = userBundleDTO.getUserInfoDTO().getNeigborhood();
        String city = userBundleDTO.getUserInfoDTO().getCity();
        String state = userBundleDTO.getUserInfoDTO().getState();

        UserInformation newUserInformation = new UserInformation(userId, firstName, lastName, neighborhood, city, state);

        /** Roles are not enabled for now, leave these rows commented out **/
//        Role roles = roleRepository.findByName("USER").get();
//        registerNewUser.setRoles(Collections.singletonList(roles));

        userRepository.save(registerNewUser);
        userInformationRepository.save(newUserInformation);

        return new ResponseEntity<>(registerNewUser, HttpStatus.OK);

    }


    @PostMapping("/login")
    public ResponseEntity<?> processLoginForm(@RequestBody LoginDTO loginDTO,
                                              Errors errors, HttpServletRequest request,
                                              Model model) {

        UserEntity theUser = userRepository.findByUserName(loginDTO.getUserName());

        if (theUser == null) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Username doesn't exist");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        String password = loginDTO.getPassword();

        if (!theUser.isMatchingPassword(password)) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Incorrect password");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        return new ResponseEntity<>(theUser, HttpStatus.OK);
    }


}