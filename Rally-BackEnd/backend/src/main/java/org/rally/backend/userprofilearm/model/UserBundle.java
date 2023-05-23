package org.rally.backend.userprofilearm.model;

import org.rally.backend.forumarm.models.ForumPosts;

import java.util.List;
import java.util.Optional;

public class UserBundle {

    UserEntity viewUser;
    Optional<UserInformation> viewUserInformation;
    UserDmHistory viewUserDmHistory;
    UserPostHistory viewUserPostHistory;
    /** updatedPostHistoryViewUser is temporary until all postable objects are active.
     * Will become a list of all events to display on searched users page that reflects
     * the updated hidden posts information. **/
    List<CurrentUserPostHistory> updatedPostHistoryViewUser;

    public UserBundle() {
    }

    public UserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation, UserDmHistory viewUserDmHistory, UserPostHistory viewUserPostHistory) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
        this.viewUserDmHistory = viewUserDmHistory;
        this.viewUserPostHistory = viewUserPostHistory;
    }

    public UserBundle(UserEntity viewUser, Optional<UserInformation> viewUserInformation, UserDmHistory viewUserDmHistory, List<CurrentUserPostHistory> updatedPostHistoryViewUser) {
        this.viewUser = viewUser;
        this.viewUserInformation = viewUserInformation;
        this.viewUserDmHistory = viewUserDmHistory;
        this.updatedPostHistoryViewUser = updatedPostHistoryViewUser;
    }

    public List<CurrentUserPostHistory> getUpdatedPostHistoryViewUser() {
        return updatedPostHistoryViewUser;
    }

    public void setUpdatedPostHistoryViewUser(List<CurrentUserPostHistory> updatedPostHistoryViewUser) {
        this.updatedPostHistoryViewUser = updatedPostHistoryViewUser;
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
