package org.rally.backend.springsecurity.repository;

import org.rally.backend.springsecurity.models.BadJWT;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JWTBlackListRepository extends JpaRepository<BadJWT, Integer> {

    <Optional>BadJWT findByBadToken(String token);
}
