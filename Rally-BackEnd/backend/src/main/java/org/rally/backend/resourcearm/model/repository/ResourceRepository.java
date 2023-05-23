package org.rally.backend.resourcearm.model.repository;

import jakarta.transaction.Transactional;
import org.rally.backend.resourcearm.model.response.Resource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface ResourceRepository extends CrudRepository<Resource, Integer> {
}
