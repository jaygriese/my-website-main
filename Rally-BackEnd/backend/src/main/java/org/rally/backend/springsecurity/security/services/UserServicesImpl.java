package org.rally.backend.springsecurity.security.services;

import org.rally.backend.springsecurity.models.ConfirmationToken;
import org.rally.backend.springsecurity.repository.ConfirmationTokenRepository;
import org.rally.backend.userprofilearm.model.UserEntity;
import org.rally.backend.userprofilearm.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
import java.util.Calendar;
import java.util.Date;
=======
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServicesImpl implements UserService{

<<<<<<< HEAD
=======
    /** This class is handling the Email verification process **/
    /** This class is handling the Email verification process **/
    /** This class is handling the Email verification process **/

>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    @Autowired
    private UserRepository userRepository;

    @Autowired
    ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    EmailService emailService;


<<<<<<< HEAD
=======
    /** Sends an email to the user to verify the account **/
    /** Might not be overriding the correct method, but cleanup for later **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    @Override
    public String saveUser(UserEntity user) {

        ConfirmationToken confirmationToken = new ConfirmationToken();

<<<<<<< HEAD

=======
        /** Generate token details **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        confirmationToken.setConfirmationToken(UUID.randomUUID().toString());
        confirmationToken.setUserId(user.getId());
        confirmationToken.setExpiryDate();

        confirmationTokenRepository.save(confirmationToken);
<<<<<<< HEAD
        System.out.println(confirmationToken.getExpiryDate());

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getUserEmail());
        mailMessage.setSubject("Complete Registration to Rally!");
        mailMessage.setText("To confirm your account, please follow the link! \n\n" + "http://localhost:4200/confirm-account/" + confirmationToken.getConfirmationToken() + "\n\n" + "Link will expire at " + confirmationToken.getExpiryDate());
=======

        /** Send email **/
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getUserEmail());
        mailMessage.setSubject("Complete Registration to Rally!");
        mailMessage.setText("Hello, " + user.getUserName() + "! To confirm your account, please follow the link! \n\n" + "http://localhost:4200/confirm-account/" + confirmationToken.getConfirmationToken() + "\n\n" + "Link will expire at " + confirmationToken.getExpiryDate());
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
        emailService.sendEmail(mailMessage);

        return "Verify your account with the link sent to your email!";
    }

<<<<<<< HEAD
=======
    /** Returns a message based on if the email was verified successfully or not **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    @Override
    public String confirmEmail(String confirmationToken) {

        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

<<<<<<< HEAD
        /** Write Method to mark token as expired and invalid **/
=======
        /** TODO - Write Method to mark token as expired and invalid **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
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
