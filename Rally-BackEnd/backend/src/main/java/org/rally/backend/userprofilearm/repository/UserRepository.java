package org.rally.backend.userprofilearm.repository;

import org.rally.backend.userprofilearm.model.UserEntity;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByUserName(String userName);

    @Override
    Optional<UserEntity> findById(Integer integer);

}