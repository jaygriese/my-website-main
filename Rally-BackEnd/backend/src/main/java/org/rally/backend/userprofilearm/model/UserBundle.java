package org.rally.backend.userprofilearm.model;

import org.rally.backend.userprofilearm.model.response.UserPostHistory;

import java.util.List;
import java.util.Optional;

public class UserBundle {

    UserEntity viewUser;
    Optional<UserInformation> viewUserInformation;
    UserDmHistory viewUserDmHistory;
    UserPostHistory viewUserPostHistory;

    public UserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
    }

    public UserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation, UserDmHistory viewUserDmHistory, UserPostHistory viewUserPostHistory) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
        this.viewUserDmHistory = viewUserDmHistory;
        this.viewUserPostHistory = viewUserPostHistory;
    }

    public UserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation, UserDmHistory viewUserDmHistory) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
        this.viewUserDmHistory = viewUserDmHistory;
    }

    public UserDmHistory getViewUserDmHistory() {
        return viewUserDmHistory;
    }

    public void setViewUserDmHistory(UserDmHistory viewUserDmHistory) {
        this.viewUserDmHistory = viewUserDmHistory;
    }

    public UserPostHistory getViewUserPostHistory() {
        return viewUserPostHistory;
    }

    public void setViewUserPostHistory(UserPostHistory viewUserPostHistory) {
        this.viewUserPostHistory = viewUserPostHistory;
    }

    public UserDmHistory getViewMainUserDmHistory() {
        return viewUserDmHistory;
    }

    public void setViewMainUserDmHistory(UserDmHistory viewUserDmHistory) {
        this.viewUserDmHistory = viewUserDmHistory;
    }

    public UserEntity getViewUser() {
        return viewUser;
    }

    public void setViewUser(UserEntity viewUser) {
        this.viewUser = viewUser;
    }

    public Optional<UserInformation> getViewUserInformation() {
        return viewUserInformation;
    }

    public void setViewUserInformation(Optional<UserInformation> viewUserInformation) {
        this.viewUserInformation = viewUserInformation;
    }
}
