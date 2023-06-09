package org.rally.backend.springsecurity.models;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

@Entity
public class ConfirmationToken {

<<<<<<< HEAD
=======
    /** Email Confirmation token **/

>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tokenId;

    private String confirmationToken;

    private int userId;

    private Date expiryDate;

    public ConfirmationToken() {
    }

    public ConfirmationToken(String confirmationToken,int userId, Date expiryDate) {
        this.confirmationToken = confirmationToken;
        this.userId = userId;
        this.expiryDate = expiryDate;
    }

    /** Not sure how this works yet, but figure out after I return. Expiry not working atm **/
    private Date calculateExpiryDate() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, 20);
        return new Date(cal.getTime().getTime());
    }


    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate() {
        this.expiryDate = calculateExpiryDate();
    }
}
