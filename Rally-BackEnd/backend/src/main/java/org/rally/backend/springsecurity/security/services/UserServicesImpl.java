package org.rally.backend.springsecurity.security.services;

import org.rally.backend.springsecurity.models.ConfirmationToken;
import org.rally.backend.springsecurity.repository.ConfirmationTokenRepository;
import org.rally.backend.userprofilearm.model.UserEntity;
import org.rally.backend.userprofilearm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServicesImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    EmailService emailService;


    @Override
    public String saveUser(UserEntity user) {

        ConfirmationToken confirmationToken = new ConfirmationToken();


        confirmationToken.setConfirmationToken(UUID.randomUUID().toString());
        confirmationToken.setUserId(user.getId());
        confirmationToken.setExpiryDate();

        confirmationTokenRepository.save(confirmationToken);
        System.out.println(confirmationToken.getExpiryDate());

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getUserEmail());
        mailMessage.setSubject("Complete Registration to Rally!");
        mailMessage.setText("Hello, " + user.getUserName() + "! To confirm your account, please follow the link! \n\n" + "http://localhost:4200/confirm-account/" + confirmationToken.getConfirmationToken() + "\n\n" + "Link will expire at " + confirmationToken.getExpiryDate());
        emailService.sendEmail(mailMessage);

        return "Verify your account with the link sent to your email!";
    }

    @Override
    public String confirmEmail(String confirmationToken) {

        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        /** Write Method to mark token as expired and invalid **/
//        if (token.getExpiryDate() > Calendar.getInstance()) {}

        if (token != null) {
            Optional<UserEntity> user = userRepository.findById(token.getUserId());
            user.get().setAccountVerified(true);
            userRepository.save(user.get());
            return "Email verified successfully!";
        }

        return "Error: Couldn't verify email.";
    }
}
