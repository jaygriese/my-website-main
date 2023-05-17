package org.rally.backend.userprofilearm.model;

import jakarta.persistence.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class DirectMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Integer receivedByUserId;

    private String receivedByUserName;

    private Integer sentByUserId;

    private String sentByUserName;

    @Column(columnDefinition = "VARCHAR(5000) NOT NULL")
    private String messageContent;

    private String messageHash;

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

    public boolean isMessageMatching(String content) {
        return encoder.matches(content, messageHash);
    }

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
}
