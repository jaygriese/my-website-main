package org.rally.backend.springsecurity.security.services;

import org.rally.backend.userprofilearm.model.UserEntity;

public interface UserService {
    String saveUser(UserEntity user);
    String confirmEmail(String confirmationToken);
}
