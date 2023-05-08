package org.rally.backend.userprofilearm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class HiddenPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer hidePostId;
    private Integer userId;

    public HiddenPost(Integer hidePostId, Integer userId) {
        this.hidePostId = hidePostId;
        this.userId = userId;
    }

    public HiddenPost() {
    }

    public Integer getId() {
        return id;
    }

    public Integer getHidePostId() {
        return hidePostId;
    }

    public void setHidePostId(Integer hidePostId) {
        this.hidePostId = hidePostId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
