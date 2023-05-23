package org.rally.backend.userprofilearm.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class DirectMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Integer receivedByUserId;

    private String receivedByUserName;

    private Integer sentByUserId;

    private String sentByUserName;

    private String messageContent;

    public DirectMessage() {
    }

    public DirectMessage(Integer receivedByUserId, String receivedByUserName, Integer sentByUserId, String sentByUserName, String messageContent) {
        this.receivedByUserId = receivedByUserId;
        this.receivedByUserName = receivedByUserName;
        this.sentByUserId = sentByUserId;
        this.sentByUserName = sentByUserName;
        this.messageContent = messageContent;
    }

    public int getId() {
        return id;
    }

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
