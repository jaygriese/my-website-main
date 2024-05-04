package org.rally.backend.userprofilearm.model.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RegisterDTO {

    @NotNull
    @NotBlank
    @Size(min = 3, max = 20, message = "Invalid username. Must be between 3 and 20 characters.")
    private String userName;

    @NotNull
    @NotBlank
    @Email(message = "Email is not valid", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    private String userEmail;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 30, message = "Invalid password. Must be between 5 and 30 characters.")
    private String password;

    private String verifyPassword;

    public String getVerifyPassword() {
        return verifyPassword;
    }


    public String getUserName() {
        return userName;
    }


    public String getPassword() {
        return password;
    }

}