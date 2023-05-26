package org.rally.backend.eventsarm.repository;


import org.rally.backend.eventsarm.models.JoinEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinEventRepository extends CrudRepository<JoinEvent, Integer> {
}
