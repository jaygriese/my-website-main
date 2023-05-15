package org.rally.backend.resourcearm.model.response;
import jakarta.persistence.*;

@Entity
@Table(name="resource")
public class Resource extends AbstractEntity {


    private final String resourceName;
    private final String category;
    private final String address;
    private final String website;
    private final String telephoneNumber;
    private final String emailAddress;
    private final String description;



    public Resource(String resourceName, String category, String address, String website, String telephoneNumber, String emailAddress, String description) {
        super();
        this.resourceName = resourceName;
        this.category = category;
        this.address = address;
        this.website = website;
        this.telephoneNumber = telephoneNumber;
        this.emailAddress = emailAddress;
        this.description = description;
    }

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
