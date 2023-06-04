package org.rally.backend.resourcearm.model.DTO;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResourceDTO {
    private int id;
    @NotBlank(message = "What is the name of the resource?")
    private String resourceName;

    @NotBlank(message = "How would you categorize the resource?")
    private String category;

    @NotBlank(message = "Where is the resource located?")
    private String address;

    @NotBlank(message = "What is the resource's website?")
    private String website;

    @NotBlank(message = "Who can we contact?")
    private String telephoneNumber;

    @NotBlank(message = "Who can we contact?")
    private String email;

    @NotBlank(message = "Tell us more about this resource!")
    private String description;



    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}

