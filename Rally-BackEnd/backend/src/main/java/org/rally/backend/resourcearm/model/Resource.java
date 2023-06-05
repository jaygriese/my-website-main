package org.rally.backend.resourcearm.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import org.rally.backend.resourcearm.model.AbstractEntity;

@Entity
public class Resource extends AbstractEntity {
    @NotBlank(message = "What is the name of the resource?")
    private String resourceName;
    @NotBlank(message = "How would you categorize the resource?")
    private String category;
    @NotBlank(message = "Where is the resource located?")
    private String neighborhood;
    @NotBlank(message = "Where is the resource located?")
    private String address;
    @NotBlank(message = "Where is the resource located?")
    private String city;
    @NotBlank(message = "Where is the resource located?")
    private String state;
    @NotBlank(message = "Where is the resource located?")
    private String zip;
    @NotBlank(message = "What is the resource's website?")
    private String website;
    @NotBlank(message = "Who can we contact?")
    private String telephoneNumber;
    @NotBlank(message = "Who can we contact?")
    private String email;
    @NotBlank(message = "Tell us more about this resource!")
    private String description;

    public Resource(String resourceName, String category, String neighborhood, String address, String city, String state, String zip, String website, String telephoneNumber, String email, String description) {
        this.resourceName = resourceName;
        this.category = category;
        this.neighborhood = neighborhood;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.website = website;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.description = description;
    }

    public Resource() {
    };

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

    public String getNeighborhood() {
        return neighborhood;
    }
    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
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

    @Override
    public String toString() {
        return "Resource{" +
                "resourceName'" + resourceName + '\'' +
                "category'" + category + '\'' +
                "neighborhood" + neighborhood +'\''+
                "address'" + address + '\'' +
                "city" + city +'\''+
                "state" + state +'\''+
                "zip" + zip +'\''+
                "website'" + website + '\'' +
                "telephoneNumber'" + telephoneNumber + '\'' +
                "email'" + email + '\'' +
                "description'" + description + '\'' +
                '}';
    }
}
