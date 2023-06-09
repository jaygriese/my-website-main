package org.rally.backend.springsecurity.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
<<<<<<< HEAD
import org.rally.backend.springsecurity.security.SecurityConstants;
import org.rally.backend.userprofilearm.model.UserEntity;
import org.rally.backend.userprofilearm.repository.UserRepository;
=======
import org.rally.backend.springsecurity.models.BadJWT;
import org.rally.backend.springsecurity.repository.JWTBlockListRepository;
import org.rally.backend.springsecurity.security.SecurityConstants;
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;

import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
<<<<<<< HEAD
=======
import java.util.Optional;
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf

@Component
public class JWTGenerator {

<<<<<<< HEAD
    @Autowired
    private UserRepository userRepository;
=======
    /** JWT Generator class **/

    @Autowired
    private JWTBlockListRepository jwtBlockListRepository;
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf

    public String generateToken(Authentication authentication) {
        String userName = authentication.getName();
        return Jwts.builder()
                .setSubject(userName)
                .claim("roles", authentication.getAuthorities().toString())
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + SecurityConstants.JWT_EXPIRATION))
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SecurityConstants.JWT_SECRET));
    }

<<<<<<< HEAD
=======
    /** Returns userName from the JWT token **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    public String getUserNameFromJWT(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key()).build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

<<<<<<< HEAD
=======
    /** Check if the token is valid, returns true if valid, else, throws error **/
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key()).build().parse(token);
            return true;
        } catch (ExpiredJwtException | MalformedJwtException | SignatureException | UnsupportedJwtException ex) {
            throw new AuthenticationCredentialsNotFoundException(ex.getMessage());
        }
    }
<<<<<<< HEAD
=======

    /** Sets a JWT token in a block list, so it can't be used again **/
    /** TODO - Need to write a method to delete expired tokens from blocklist **/
    public void invalidateToken(String token) {
        BadJWT setBadToken = new BadJWT();
        setBadToken.setBadToken(token);

        Optional<BadJWT> ifPresent = Optional.ofNullable(jwtBlockListRepository.findByBadToken(token));
        if (ifPresent.isEmpty()) {
            jwtBlockListRepository.save(setBadToken);
        } else {
            System.out.println("Quack");
        }

    }
>>>>>>> 11c5082d21732adbc149cb42e8b014e548bc72bf
}
