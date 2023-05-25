package org.rally.backend.springsecurity.controller;

import jakarta.validation.Valid;
import org.rally.backend.springsecurity.payload.request.LoginRequest;
import org.rally.backend.userprofilearm.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;


    @PostMapping("/signin")
    public ResponseEntity<?> authenticationUser(@Valid @RequestBody LoginRequest loginRequest) {

//        Authentication authentication; /** Working on Jwtutils to finish this method **/

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
