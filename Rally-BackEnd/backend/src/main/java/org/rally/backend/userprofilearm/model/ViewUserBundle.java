package org.rally.backend.userprofilearm.model;

import java.util.Optional;

public class ViewUserBundle {

    UserEntity viewUser;
    Optional<UserInformation> viewUserInformation;

    public ViewUserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
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
