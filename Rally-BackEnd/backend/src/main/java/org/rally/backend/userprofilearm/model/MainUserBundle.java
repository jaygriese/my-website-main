package org.rally.backend.userprofilearm.model;

import java.util.List;
import java.util.Optional;

public class MainUserBundle {

    UserEntity mainUser;
    Optional<UserInformation> viewUserInformation;


    public MainUserBundle(UserEntity mainUser, Optional<UserInformation> viewUserInformation) {
        this.mainUser = mainUser;
        this.viewUserInformation = viewUserInformation;
    }

    public UserEntity getMainUser() {
        return mainUser;
    }

    public void setMainUser(UserEntity mainUser) {
        this.mainUser = mainUser;
    }

    public Optional<UserInformation> getViewUserInformation() {
        return viewUserInformation;
    }

    public void setViewUserInformation(Optional<UserInformation> viewUserInformation) {
        this.viewUserInformation = viewUserInformation;
    }

}
