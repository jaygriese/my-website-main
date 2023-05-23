package org.rally.backend.userprofilearm.model.dto;

import jakarta.validation.constraints.NotNull;

public class UserInfoDTO {

    @NotNull
    private int userId;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String neigborhood;

    @NotNull
    private String city;

    @NotNull
    private String state;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNeigborhood() {
        return neigborhood;
    }

    public void setNeigborhood(String neigborhood) {
        this.neigborhood = neigborhood;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
