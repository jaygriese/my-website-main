package org.rally.backend.resourcearm.model.repository;

import org.rally.backend.resourcearm.model.response.Resource;
import org.springframework.data.repository.CrudRepository;


public interface ResourceRepository extends CrudRepository<Resource, Integer> {
}
