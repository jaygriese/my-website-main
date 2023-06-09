package org.rally.backend.springsecurity.controller;

import org.rally.backend.springsecurity.models.ConfirmationToken;
import org.rally.backend.springsecurity.payload.response.JWTResponse;
import org.rally.backend.springsecurity.repository.ConfirmationTokenRepository;
<<<<<<< HEAD
=======
import org.rally.backend.springsecurity.repository.JWTBlockListRepository;
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
import org.rally.backend.springsecurity.security.jwt.JWTGenerator;
import org.rally.backend.springsecurity.security.services.UserServicesImpl;
import org.rally.backend.userprofilearm.exception.MinimumCharacterException;
import org.rally.backend.userprofilearm.model.Role;
import org.rally.backend.userprofilearm.model.UserInformation;
<<<<<<< HEAD
=======
import org.rally.backend.userprofilearm.model.dto.RegisterDTO;
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
import org.rally.backend.userprofilearm.model.dto.UserBundleDTO;
import org.rally.backend.userprofilearm.exception.AuthenticationFailure;
import org.rally.backend.userprofilearm.model.UserEntity;
import org.rally.backend.userprofilearm.model.dto.LoginDTO;
import org.rally.backend.userprofilearm.model.response.AuthenticationSuccess;
import org.rally.backend.userprofilearm.model.response.ResponseMessage;
import org.rally.backend.userprofilearm.repository.RoleRepository;
import org.rally.backend.userprofilearm.repository.UserInformationRepository;
import org.rally.backend.userprofilearm.repository.UserRepository;
import org.rally.backend.userprofilearm.utility.UserProfileControllerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials = "true")
@RequestMapping(value = "/api")
public class AuthenticationController {

    UserRepository userRepository;
    UserInformationRepository userInformationRepository;
    RoleRepository roleRepository;
    private AuthenticationManager authenticationManager;
    private PasswordEncoder passwordEncoder;
    private JWTGenerator jwtGenerator;
    private UserServicesImpl userServicesImpl;
    private ConfirmationTokenRepository confirmationTokenRepository;
<<<<<<< HEAD
=======
    private JWTBlockListRepository jwtBlockListRepository;
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf


    @Autowired
    public AuthenticationController(UserRepository userRepository,
                                    RoleRepository roleRepository,
                                    UserInformationRepository userInformationRepository,
                                    AuthenticationManager authenticationManager,
                                    PasswordEncoder passwordEncoder,
                                    JWTGenerator jwtGenerator,
                                    UserServicesImpl userServicesImpl,
<<<<<<< HEAD
                                    ConfirmationTokenRepository confirmationTokenRepository) {
=======
                                    ConfirmationTokenRepository confirmationTokenRepository,
                                    JWTBlockListRepository jwtBlockListRepository) {
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userInformationRepository = userInformationRepository;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
        this.userServicesImpl = userServicesImpl;
        this.confirmationTokenRepository = confirmationTokenRepository;
<<<<<<< HEAD
    }

=======
        this.jwtBlockListRepository = jwtBlockListRepository;
    }

    /** Register the user and saves to the repository, but doesn't mark the user as authentic yet **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    @PostMapping("/register")
    public ResponseEntity<?> processRegistrationForm(@RequestBody UserBundleDTO userBundleDTO) {
        UserProfileControllerService.generateRoles();

<<<<<<< HEAD
=======
        /** Check if the username or email have been used yet **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        UserEntity existingUser = userRepository.findByUserName(userBundleDTO.getRegisterDTO().getUserName());
        String existingEmail = userBundleDTO.getRegisterDTO().getUserEmail();

        if (existingUser != null) {
            ResponseMessage authenticationFailure = new ResponseMessage("That username is taken, please select a different user name.");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }
        if (userRepository.existsByUserEmail(existingEmail)) {
            ResponseMessage authenticationFailure = new ResponseMessage("Error: Email is already in use");
<<<<<<< HEAD
            return ResponseEntity.badRequest().body("Error: Email is already in use");
        }

=======
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        /** Checks if passwords match before setting **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        String password = userBundleDTO.getRegisterDTO().getPassword();
        String verifyPassword = userBundleDTO.getRegisterDTO().getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            ResponseMessage authenticationFailure = new ResponseMessage("Passwords do not match");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

<<<<<<< HEAD
        UserEntity registerNewUser = new UserEntity((userBundleDTO.getRegisterDTO().getUserName()),userBundleDTO.getRegisterDTO().getUserEmail(), userBundleDTO.getRegisterDTO().getPassword());

        if (registerNewUser.getRoles().size() == 0) {
                Role roles = roleRepository.findByName("USER").get();
            registerNewUser.setRoles(Collections.singletonList(roles));
        }

        userRepository.save(registerNewUser);

        UserEntity newestUser = userRepository.findByUserName(userBundleDTO.getRegisterDTO().getUserName());

        int userId = newestUser.getId();
=======
        /** save user into UserEntity and grant role **/
        UserEntity registerNewUser = new UserEntity((userBundleDTO.getRegisterDTO().getUserName()),userBundleDTO.getRegisterDTO().getUserEmail(), userBundleDTO.getRegisterDTO().getPassword());

        if (registerNewUser.getRoles().size() == 0) {
            Role roles = roleRepository.findByName("USER").get();
            registerNewUser.setRoles(Collections.singletonList(roles));
        }

        /** saves user into repository **/
        userRepository.save(registerNewUser);

        /** Set user Information with new userId that has been saved **/
        UserEntity newestUser = userRepository.findByUserName(userBundleDTO.getRegisterDTO().getUserName());

        String userName = newestUser.getUserName();
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        String firstName = userBundleDTO.getUserInfoDTO().getFirstName();
        String lastName = userBundleDTO.getUserInfoDTO().getLastName();
        String neighborhood = userBundleDTO.getUserInfoDTO().getNeighborhood();
        String city = userBundleDTO.getUserInfoDTO().getCity();
        String state = userBundleDTO.getUserInfoDTO().getState();

<<<<<<< HEAD
        if (firstName.toCharArray().length < 3 || lastName.toCharArray().length < 3 || state.toCharArray().length < 1 || neighborhood.toCharArray().length < 3 || city.toCharArray().length < 3) {
            throw new MinimumCharacterException();
        }

        UserInformation newUserInformation = new UserInformation(userId, firstName, lastName, neighborhood, city, state);

        userInformationRepository.save(newUserInformation);
=======
        /** If any of the fields don't meet the character requirements, throws an error and remove the user from user Repository **/
        if (firstName.toCharArray().length < 3 || lastName.toCharArray().length < 3 || state.toCharArray().length < 1 || neighborhood.toCharArray().length < 3 || city.toCharArray().length < 3) {
            userRepository.delete(registerNewUser);
            throw new MinimumCharacterException();
        }

        UserInformation newUserInformation = new UserInformation(userName, firstName, lastName, neighborhood, city, state);

        /** Save the User info to repo **/
        userInformationRepository.save(newUserInformation);
        /** running userServicesImpl.saveUser() sends email verification and will reflect on register HTML **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        ResponseMessage confirm = new ResponseMessage(userServicesImpl.saveUser(registerNewUser));

        return new ResponseEntity<>(confirm, HttpStatus.OK);

    }

<<<<<<< HEAD
=======
    /** When the user clicks the link to validate their email, this method verifies the email and marks the user as authentic **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    @PostMapping("/confirm-account")
    public ResponseEntity<?> confirmUserAccount(@RequestBody String token) {

        if (confirmationTokenRepository.findByConfirmationToken(token) == null) {
            ResponseMessage responseMessage = new ResponseMessage("Token not present");
            return new ResponseEntity<>(responseMessage, HttpStatus.OK);
        }

        AuthenticationSuccess response = new AuthenticationSuccess(userServicesImpl.confirmEmail(token));
        if (response.getSuccess().equals("Email verified successfully!")) {
            ConfirmationToken success = confirmationTokenRepository.findByConfirmationToken(token);
            confirmationTokenRepository.delete(success);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            ResponseMessage responseMessage = new ResponseMessage(token);
            ConfirmationToken failedToken = confirmationTokenRepository.findByConfirmationToken(token);
            confirmationTokenRepository.delete(failedToken);
            return new ResponseEntity<>(responseMessage, HttpStatus.OK);
        }
    }

<<<<<<< HEAD
=======
    /** User login **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    @PostMapping("/login")
    public ResponseEntity<?> processLoginForm(@RequestBody LoginDTO loginDTO) {

        UserEntity theUser = userRepository.findByUserName(loginDTO.getUserName());

<<<<<<< HEAD
=======
        /** Checks if the user is present **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        if (theUser == null) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Username doesn't exist");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

        String password = loginDTO.getPassword();

<<<<<<< HEAD
=======
        /** Checks if the user entered the correct password **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        if (!theUser.isMatchingPassword(password)) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Incorrect password");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

<<<<<<< HEAD
=======
        /** Checks if the user has a verified account **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        if (!theUser.isAccountVerified()) {
            AuthenticationFailure authenticationFailure = new AuthenticationFailure("Account is not verified, please check your email to verify your account.");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }

<<<<<<< HEAD
=======
        /** Grants the user a JWT token for their session **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getUserName(),
                        loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);

<<<<<<< HEAD
        /** Is UserDetailsImpl needed to send a legit JWT response? **/

=======
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        List<String> roles = theUser.getRoles().stream()
                .map(Role::getName)
                .collect(Collectors.toList());

<<<<<<< HEAD
=======
        /** Sends a JWT response with userInformation (Most info here isn't needed since we are only storing the JWT itself on the front) **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        JWTResponse response = new JWTResponse(token,
                theUser.isAccountVerified(),
                theUser.getId(),
                theUser.getUserName(),
                theUser.getUserEmail(),
                roles);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

<<<<<<< HEAD
=======
    /** When the user logs out, marks the JWT token as invalid **/
    @GetMapping("/logout")
    public ResponseEntity<?> logoutConfirmed(@RequestHeader (name="authorization") String token) {
        jwtGenerator.invalidateToken(token.substring(7, token.length()));
        ResponseMessage response = new ResponseMessage("User logged out");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /** During user Registration, this will check the first form with userName and Email and verify if those fields are available **/
    @PostMapping("/nameEmailCheck")
    public ResponseEntity<?> firstCheck(@RequestBody RegisterDTO registerDTO) {
        UserEntity existingUser = userRepository.findByUserName(registerDTO.getUserName());
        String existingEmail = registerDTO.getUserEmail();

        if (existingUser != null) {
            ResponseMessage authenticationFailure = new ResponseMessage("That username is taken, please select a different user name.");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }
        if (userRepository.existsByUserEmail(existingEmail)) {
            ResponseMessage authenticationFailure = new ResponseMessage("Error: Email is already in use");
            return new ResponseEntity<>(authenticationFailure, HttpStatus.OK);
        }
        ResponseMessage responseMessage = new ResponseMessage("True");
        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }

>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf

}