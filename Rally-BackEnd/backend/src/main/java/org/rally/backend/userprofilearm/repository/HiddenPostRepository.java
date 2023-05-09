package org.rally.backend.userprofilearm.repository;

import org.rally.backend.userprofilearm.model.HiddenPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HiddenPostRepository extends JpaRepository<HiddenPost, Integer> {
    HiddenPost findByUserId(Integer integer);
    HiddenPost findByHidePostId(Integer integer);
}
