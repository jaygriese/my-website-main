package org.rally.backend.resourcearm.model.DTO;

import lombok.Data;

@Data
public class ResourceDTO {

    private String resourceName;
    private String category;
    private String address;
    private String website;
    private String telephoneNumber;
    private String emailAddress;
    private String description;


    public String getResourceName() {
        return resourceName;
    }
    public String getCategory() {
        return category;
    }
    public String getAddress() {
        return address;
    }
    public String getWebsite() {
        return website;
    }
    public String getTelephoneNumber() {
        return telephoneNumber;
    }
    public String getEmailAddress() {
        return emailAddress;
    }
    public String getDescription() {
        return description;
    }

}

