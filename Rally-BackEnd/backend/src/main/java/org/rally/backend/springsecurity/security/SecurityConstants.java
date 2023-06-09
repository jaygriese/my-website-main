package org.rally.backend.springsecurity.security;

public class SecurityConstants {

    /** Security constants for decoding and verifiying JWT tokens **/
    /** Need to export these and hide them from public viewing so none can decode jwt other than us **/
    public static final long JWT_EXPIRATION = 21600000; // 6 hours = 21600000milliseconds
    public static final String JWT_SECRET = "LoremIpsumDolorSitAmetConsecteturAdipiscingElit";
}
