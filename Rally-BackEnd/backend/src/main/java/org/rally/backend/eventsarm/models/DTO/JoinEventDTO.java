package org.rally.backend.eventsarm.models.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.rally.backend.eventsarm.models.Event;

public class JoinEventDTO {

    private int id;

    private String userName;

    private Event event;

    @NotBlank(message = "Who is joining the event?")
    private String attending;

    @NotBlank(message = "Who can we contact?")
    @Email(message = "Whoops! We need a valid email address.")
    private String contactEmail;

    @NotNull(message = "How many are coming?")
    private int numAttending;

    private String comment;


    public int getId() {
        return id;
    }

//    public void setId(int id) {
//        this.id = id;
//    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public String getAttending() {
        return attending;
    }

    public void setAttending(String attending) {
        this.attending = attending;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public int getNumAttending() {
        return numAttending;
    }

    public void setNumAttending(int numAttending) {
        this.numAttending = numAttending;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
