package org.rally.backend.forumarm.repository;

import org.rally.backend.forumarm.models.ForumPosts;
import org.springframework.data.repository.CrudRepository;

public interface ForumPostRepository extends CrudRepository<ForumPosts, Integer> {

}
