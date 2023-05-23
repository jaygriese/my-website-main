package org.rally.backend.servicesarm.model.dto;

import lombok.Data;
import org.rally.backend.servicesarm.model.response.Category;

import java.util.ArrayList;

@Data
public class ServiceDTO {

    private String userName;
    private String service;
    private String description;
    private String category;
    private ArrayList<String> days;
    private ArrayList<String> time;
    private String email;
    private String type;

    public String getUserName() {
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


//    public Category getCategory() {
//        return category;
//    }

    public ArrayList<String> getDays() {
        return days;
    }

    public ArrayList<String> getTime() {
        return time;
    }

    public String getEmail() {
        return email;
    }

    public String getType() {
        return type;
    }

    String daytimeString;
    public String getDayTime(ArrayList<String> list) {
        daytimeString = list.get(0);
        for (int i=1; i < list.size(); i++) {
            daytimeString += ", " + list.get(i);
        }
        return daytimeString;
    }

    @Override
    public String toString() {
        return "ServiceDTO{" +
                "category='" + category + '\'' +
                '}';
    }
}
