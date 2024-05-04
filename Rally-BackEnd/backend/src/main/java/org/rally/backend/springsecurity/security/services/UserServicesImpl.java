package org.rally.backend.springsecurity.security.services;

import org.rally.backend.springsecurity.models.ConfirmationToken;
import org.rally.backend.springsecurity.repository.ConfirmationTokenRepository;
import org.rally.backend.userprofilearm.model.UserEntity;
import org.rally.backend.userprofilearm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserServicesImpl implements UserService{

    /** This class is handling the Email verification process **/
    /** This class is handling the Email verification process **/
    /** This class is handling the Email verification process **/

    @Autowired
    private UserRepository userRepository;

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    EmailService emailService;


    /** Sends an email to the user to verify the account **/
    /** Might not be overriding the correct method, but cleanup for later **/
    @Override
    public String saveUser(UserEntity user) {

        ConfirmationToken confirmationToken = new ConfirmationToken();

        /** Generate token details **/
        confirmationToken.setConfirmationToken(UUID.randomUUID().toString());
        confirmationToken.setUserId(user.getId());
        confirmationToken.setExpiryDate();

        confirmationTokenRepository.save(confirmationToken);

        /** Send email **/
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getUserEmail());
        mailMessage.setSubject("Complete Registration to Rally!");
        mailMessage.setText("Hello, " + user.getUserName() + "! To confirm your account, please follow the link! \n\n" + "http://localhost:4200/confirm-account/" + confirmationToken.getConfirmationToken() + "\n\n" + "Link will expire at " + confirmationToken.getExpiryDate());
        emailService.sendEmail(mailMessage);

        return "Verify your account with the link sent to your email!";
    }

    /** Returns a message based on if the email was verified successfully or not **/
    @Override
    public String confirmEmail(String confirmationToken) {

        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        /** TODO - Write Method to mark token as expired and invalid **/
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
