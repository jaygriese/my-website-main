package org.rally.backend.userprofilearm.model;

import java.util.List;

public class UserDmHistory {

    List<UserEntity> userEntities;
    List<DirectMessage> directMessageList;

    public UserDmHistory(List<UserEntity> userEntities, List<DirectMessage> directMessageList) {
        this.userEntities = userEntities;
        this.directMessageList = directMessageList;
    }

    public List<UserEntity> getUserEntities() {
        return userEntities;
    }

    public void setUserEntities(List<UserEntity> userEntities) {
        this.userEntities = userEntities;
    }

    public List<DirectMessage> getDirectMessageList() {
        return directMessageList;
    }

    public void setDirectMessageList(List<DirectMessage> directMessageList) {
        this.directMessageList = directMessageList;
    }
}
