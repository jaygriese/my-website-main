package org.rally.backend.springsecurity.payload.response;

import java.util.List;

public class JWTResponse {

    private String token;
    private String type = "Bearer ";
    private int id;
    private String userName;
    private String email;
    private List<String> roles;
    private Boolean accountVerified;

    public JWTResponse(String token, Boolean accountVerified, int id, String userName, String email, List<String> roles) {
        this.token = token;
        this.accountVerified = accountVerified;
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.roles = roles;
    }

    public JWTResponse(String token, Boolean accountVerified, List<String> roles) {
        this.token = token;
        this.accountVerified = accountVerified;
        this.roles = roles;
    }

    public Boolean getAccountVerified() {
        return accountVerified;
    }

    public void setAccountVerified(Boolean accountVerified) {
        this.accountVerified = accountVerified;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

//    public String getTokenType() {
//        return type;
//    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
