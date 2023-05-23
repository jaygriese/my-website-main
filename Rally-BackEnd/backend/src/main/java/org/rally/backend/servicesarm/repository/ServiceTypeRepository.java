package org.rally.backend.servicesarm.repository;

import org.rally.backend.servicesarm.model.response.Type;
import org.springframework.data.repository.CrudRepository;

public interface ServiceTypeRepository extends CrudRepository<Type, Integer> {
}
