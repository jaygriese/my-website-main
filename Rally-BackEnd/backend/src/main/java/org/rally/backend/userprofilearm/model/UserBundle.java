package org.rally.backend.userprofilearm.model;

import java.util.Optional;

public class UserBundle {

    UserEntity viewUser;
    Optional<UserInformation> viewUserInformation;

    MainUserDmHistory viewMainUserDmHistory;

    public UserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
    }

    public UserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation, MainUserDmHistory viewMainUserDmHistory) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
        this.viewMainUserDmHistory = viewMainUserDmHistory;
    }

    public MainUserDmHistory getViewMainUserDmHistory() {
        return viewMainUserDmHistory;
    }

    public void setViewMainUserDmHistory(MainUserDmHistory viewMainUserDmHistory) {
        this.viewMainUserDmHistory = viewMainUserDmHistory;
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
