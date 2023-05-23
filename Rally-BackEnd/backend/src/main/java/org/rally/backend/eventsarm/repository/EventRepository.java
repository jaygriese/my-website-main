package org.rally.backend.eventsarm.repository;

import org.rally.backend.eventsarm.models.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {
}
