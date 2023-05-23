package org.rally.backend.userprofilearm.model.dto;

public class SearchUserDTO {

    private String userName;

    public SearchUserDTO(String userName) {
        this.userName = userName;
    }

    public String getUserName() {
        return userName;
    }
}
