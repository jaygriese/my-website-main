package org.rally.backend.eventsarm.models;


import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Event extends AbstractEntity {

    @NotBlank(message = "Who can we thank for hosting?")
    private String eventHost;

    @NotBlank(message = "Who can we contact?")
    @Email(message = "Whoops! We need a valid email address.")
    private String contactEmail;

    @NotBlank(message = "What should we call this event?")
    private String eventTitle;

    @NotBlank(message = "When should we show up?")
    private String datetime;

    @NotBlank(message = "Where should we go?")
    private String eventAddress;

    @NotBlank(message = "Tell us the event category.")
    private String eventCategory;

    @NotBlank(message = "Tell us what this event is all about!")
    private String description;

    private String imageId;

    public Event(String eventHost, String contactEmail, String eventTitle, String datetime, String eventAddress, String eventCategory, String description, String imageId) {
        this.eventHost = eventHost;
        this.contactEmail = contactEmail;
        this.eventTitle = eventTitle;
        this.datetime = datetime;
        this.eventAddress = eventAddress;
        this.eventCategory = eventCategory;
        this.description = description;
        this.imageId = imageId;
    }

    public Event() {};

    public String getEventHost() {
        return eventHost;
    }

    public void setEventHost(String eventHost) {
        this.eventHost = eventHost;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getEventTitle() {
        return eventTitle;
    }

    public void setEventTitle(String eventTitle) {
        this.eventTitle = eventTitle;
    }

    public String getEventAddress() {
        return eventAddress;
    }

    public void setEventAddress(String eventAddress) {
        this.eventAddress = eventAddress;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public String getEventCategory() {
        return eventCategory;
    }

    public void setEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
    }

    public String getImageId() {
        return imageId;
    }

    public void setImageId(String imageId) {
        this.imageId = imageId;
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventHost='" + eventHost + '\'' +
                ", contactEmail='" + contactEmail + '\'' +
                ", eventTitle='" + eventTitle + '\'' +
                ", datetime='" + datetime + '\'' +
                ", eventAddress='" + eventAddress + '\'' +
                ", eventCategory='" + eventCategory + '\'' +
                ", description='" + description + '\'' +
                ", imageId='" + imageId + '\'' +
                '}';
    }
}
