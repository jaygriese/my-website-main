package org.rally.backend.forumarm.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import org.apache.catalina.User;
import org.rally.backend.userprofilearm.model.UserEntity;

import java.util.ArrayList;
import java.util.List;

@Entity
public class ForumPostLike extends AbstractEntity{

    private int likes = 0;

    @ManyToMany
    private List<UserEntity> users = new ArrayList<>();
    @OneToOne
    private ForumPosts forumPosts;
    public ForumPostLike (){}

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public List<UserEntity> getUsers() {
        return users;
    }

    public void addUser(UserEntity user){
        this.users.add(user);
    }

    public void addLike(){
        this.likes = this.likes + 1;

    }
    public void subtractLike(){
        this.likes = this.likes - 1;
    }
    public void removeUser(UserEntity user){
        this.users.remove(user);
    }
}
