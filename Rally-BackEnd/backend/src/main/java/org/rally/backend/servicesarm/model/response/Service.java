package org.rally.backend.servicesarm.model.response;

import jakarta.persistence.*;
import org.rally.backend.userprofilearm.model.UserEntity;

import java.awt.*;
import java.lang.reflect.Array;
import java.util.ArrayList;

@Entity
@Table(name="service")
public class Service {

    private String userName;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id = 1;
//    private int nextId = 1;
    private String service;
    private String description;
    private String category;
//    private ArrayList<String> days;
    private String email;
    private String day;
    private String time;
    private String type;

    public Service(String userName, String description, String category, String day, String time, String email, String service, String type) {
        this.userName = userName;
        this.service = service;
        this.description = description;
        this.category = category;
        this.day = day;
        this.time = time;
        this.email = email;
        this.type = type;
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

    public String getCategory() {
        return category;
    }

//    public ArrayList<String> getDays() {
//        return days;
//    }


    public String getDay() {
        return day;
    }

    public String getEmail() {
        return email;
    }
}
