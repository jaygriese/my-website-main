package org.rally.backend.userprofilearm.exception;

public class AuthenticationFailure {

    /** Sends a message in an object with details on why there was a failure with the post/get **/
    private String failed;

    public AuthenticationFailure(String failed) {
        this.failed = failed;
    }

    public String getFailed() {
        return failed;
    }

    public void setFailed(String failed) {
        this.failed = failed;
    }
}