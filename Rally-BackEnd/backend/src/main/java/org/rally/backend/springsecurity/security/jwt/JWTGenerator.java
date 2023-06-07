package org.rally.backend.springsecurity.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.rally.backend.springsecurity.models.BadJWT;
import org.rally.backend.springsecurity.repository.JWTBlockListRepository;
import org.rally.backend.springsecurity.security.SecurityConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;

import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Optional;

@Component
public class JWTGenerator {

    @Autowired
    private JWTBlockListRepository jwtBlockListRepository;

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

    public String getUserNameFromJWT(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key()).build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key()).build().parse(token);
            return true;
        } catch (ExpiredJwtException | MalformedJwtException | SignatureException | UnsupportedJwtException ex) {
            throw new AuthenticationCredentialsNotFoundException(ex.getMessage());
        }
    }

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
}
