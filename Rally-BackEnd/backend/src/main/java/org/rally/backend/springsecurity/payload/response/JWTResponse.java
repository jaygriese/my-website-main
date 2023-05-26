package org.rally.backend.springsecurity.payload.response;

import java.util.List;

public class JWTResponse {

    private String token;
    private String type = "Bearer ";
    private int id;
    private String userName;
    private List<String> roles;

    public JWTResponse(String token, int id, String userName,  List<String> roles) {
        this.token = token;
        this.id = id;
        this.userName = userName;
        this.roles = roles;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

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
