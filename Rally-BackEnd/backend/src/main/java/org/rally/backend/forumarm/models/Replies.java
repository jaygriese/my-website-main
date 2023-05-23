package org.rally.backend.forumarm.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import org.rally.backend.userprofilearm.model.UserEntity;

@Entity
public class Replies extends AbstractEntity{

    private String description;
    @OneToOne
    private UserEntity userEntity;
    @ManyToOne
    private ForumPosts forumPosts;
    public Replies(String description){
        this.description = description;
    }

    public Replies(){}

    public ForumPosts getForumPosts() {
        return forumPosts;
    }

    public void setForumPosts(ForumPosts forumPosts) {
        this.forumPosts = forumPosts;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }
}
