package org.rally.backend.eventsarm.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Join extends AbstractEntity {

    @ManyToOne
    private Event event;

//    @NotBlank(message = "Who is joining the event?")
    private String name;

//    @NotBlank(message = "Who can we contact?")
//    @Email(message = "Whoops! We need a valid email address.")
    private String contactEmail;

//    @NotBlank(message = "How many are coming?")
    private int numAttending;

    private String comment;

    public Join(String name, String contactEmail, int numAttending, String comment) {
        this.name = name;
        this.contactEmail = contactEmail;
        this.numAttending = numAttending;
        this.comment = comment;
    }

    public Join () {};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    @Override
    public String toString() {
        return "Join{" +
                "name='" + name + '\'' +
                ", contactEmail='" + contactEmail + '\'' +
                ", numAttending=" + numAttending +
                ", comment='" + comment + '\'' +
                '}';
    }
}
