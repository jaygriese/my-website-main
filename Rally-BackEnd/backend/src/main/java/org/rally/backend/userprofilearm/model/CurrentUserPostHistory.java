package org.rally.backend.userprofilearm.model;

public class CurrentUserPostHistory {
    private Integer id;
    private String type;
    private String title;
    private Boolean hidden;
    private String description;

    public CurrentUserPostHistory() {
    }

    public CurrentUserPostHistory(Integer id, String type, String title, Boolean hidden, String description) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.hidden = hidden;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getHidden() {
        return hidden;
    }

    public void setHidden(Boolean hidden) {
        this.hidden = hidden;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
