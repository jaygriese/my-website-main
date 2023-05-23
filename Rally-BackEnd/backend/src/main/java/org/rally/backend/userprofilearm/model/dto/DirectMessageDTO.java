package org.rally.backend.userprofilearm.model.dto;

public class DirectMessageDTO {

    private Integer receivedByUserId;

    private String receivedByUserName;

    private Integer sentByUserId;

    private String sentByUserName;

    private String messageContent;


    public Integer getReceivedByUserId() {
        return receivedByUserId;
    }

    public void setReceivedByUserId(Integer receivedByUserId) {
        this.receivedByUserId = receivedByUserId;
    }

    public String getReceivedByUserName() {
        return receivedByUserName;
    }

    public void setReceivedByUserName(String receivedByUserName) {
        this.receivedByUserName = receivedByUserName;
    }

    public Integer getSentByUserId() {
        return sentByUserId;
    }

    public void setSentByUserId(Integer sentByUserId) {
        this.sentByUserId = sentByUserId;
    }

    public String getSentByUserName() {
        return sentByUserName;
    }

    public void setSentByUserName(String sentByUserName) {
        this.sentByUserName = sentByUserName;
    }

    public String getMessageContent() {
        return messageContent;
    }

    public void setMessageContent(String messageContent) {
        this.messageContent = messageContent;
    }
}
