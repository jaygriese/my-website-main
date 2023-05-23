package org.rally.backend.servicesarm.model.response;

import jakarta.persistence.*;
import org.rally.backend.servicesarm.model.AbstractEntity;
import org.rally.backend.userprofilearm.model.UserEntity;

import java.awt.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Optional;

@Entity
public class Service extends AbstractEntity {

    private String userName;
    private String service;
    private String description;
    @ManyToOne(cascade = CascadeType.ALL)
    private Category category;
    private String email;
    private String day;
    private String time;
    @ManyToOne(cascade = CascadeType.ALL)
    private Type type;

    public Service(String userName, String description, String day, String time, String email, String service) {
        this.userName = userName;
        this.service = service;
        this.description = description;
        this.day = day;
        this.time = time;
        this.email = email;
    }

    public Service () {};

    public String getName() {
        return userName;
    }

    public String getService() {
        return service;
    }

    public String getDescription() {
        return description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getDay() {
        return day;
    }

    public String getEmail() {
        return email;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getTime() {
        return time;
    }

}
