package org.rally.backend.eventsarm.models;

public enum EventCategory {

    CONNECT("connect"),
    VOLUNTEER("volunteer"),
    LEARN("learn"),
    DONATE("donate"),
    CELEBRATE("celebrate");

    private final String displayName;

    EventCategory(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
