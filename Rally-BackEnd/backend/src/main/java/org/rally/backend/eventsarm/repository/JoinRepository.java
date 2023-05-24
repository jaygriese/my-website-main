package org.rally.backend.eventsarm.repository;


import org.rally.backend.eventsarm.models.Join;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinRepository extends CrudRepository<Join, Integer> {
}
