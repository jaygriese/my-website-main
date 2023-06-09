package org.rally.backend.resourcearm.model.repository;

import org.rally.backend.resourcearm.model.Resource;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceRepository extends CrudRepository<Resource, Integer> {
}
