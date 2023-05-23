package org.rally.backend.servicesarm.repository;

import org.rally.backend.servicesarm.model.response.Service;
import org.springframework.data.repository.CrudRepository;

public interface ServiceRepository extends CrudRepository<Service, Integer> {
}
