package org.rally.backend.resourcearm.model.response;
import jakarta.persistence.*;

@Entity
public class Resource extends AbstractEntity{
    private String resourceName;
   // @ManyToOne(cascade = CascadeType.ALL)
    private String category;
    private String address;
    private String website;
    private String telephoneNumber;
    private String email;
    private String description;
    public Resource(String resourceName, String category, String address, String website, String telephoneNumber, String email, String description) {
        this.resourceName = resourceName;
        this.address = address;
        this.website = website;
        this.category = category;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.description = description;
    }
    public Resource () {};

    public String getResourceName() {
        return resourceName;
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
    public String getWebsite() {
        return website;
    }
    public String getTelephoneNumber() {
        return telephoneNumber;
    }
    public String getEmail() {
        return email;
    }
    public String getDescription() {
        return description;
    }

}
