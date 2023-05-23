package org.rally.backend.eventsarm.models.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EventDTO {


    @NotBlank(message = "Who can your community thank for hosting this event?")
    private String eventHost;

    @NotBlank(message = "But how will your community know who to contact?")
    @Email(message = "Whoops! Try entering your email again.")
    private String contactEmail;

    private String eventTitle;

    private String datetime;

//    private String datetime;
//@Basic
//private java.time.LocalDateTime localDateTime;

    @NotBlank(message = "But how will your community know where to go?")
    private String eventAddress;

//    private EventCategory eventCategory;

    private String eventCategory;

    @NotBlank(message = "Tell your community what this event is all about!")
    private String description;

    private String imageId;

//    public Event(String eventHost, String contactEmail, String eventTitle, String datetime, String eventAddress, String eventCategory, String description) {
//        this.eventHost = eventHost;
//        this.contactEmail = contactEmail;
//        this.eventTitle = eventTitle;
//        this.datetime = datetime;
//        this.eventAddress = eventAddress;
//        this.eventCategory = eventCategory;
//        this.description = description;
//    }

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

//    public EventCategory getEventCategory() {
//        return eventCategory;
//    }
//
//    public void setEventCategory(EventCategory eventCategory) {
//        this.eventCategory = eventCategory;
//    }

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
}
