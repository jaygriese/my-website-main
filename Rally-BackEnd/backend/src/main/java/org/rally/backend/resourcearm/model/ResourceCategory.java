package org.rally.backend.resourcearm.model;

public enum ResourceCategory {

    ATHLETICS("Athletics"),
    ARTS("Arts"),
    BUSINESS("Business"),
    CIVIC("Civic"),
    EDUCATION("Education"),
    ENTERTAINMENT("Entertainment"),
    FITNESS("Fitness"),
    HOSPITALITY("Hospitality"),
    MEDICAL("Medical"),
    PARK("Park"),
    RELIGIOUS("Religious"),
    RETAIL("Retail");

    private final String displayName;

    ResourceCategory(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}