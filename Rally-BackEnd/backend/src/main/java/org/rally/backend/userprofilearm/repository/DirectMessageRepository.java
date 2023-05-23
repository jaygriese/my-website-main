package org.rally.backend.userprofilearm.repository;

import org.rally.backend.userprofilearm.model.DirectMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DirectMessageRepository extends JpaRepository<DirectMessage, Integer> {
}
