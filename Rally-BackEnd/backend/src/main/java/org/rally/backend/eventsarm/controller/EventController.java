package org.rally.backend.eventsarm.controller;

import org.rally.backend.eventsarm.models.DTO.EventDTO;
import org.rally.backend.eventsarm.models.Event;
import org.rally.backend.eventsarm.repository.EventRepository;
import org.rally.backend.userprofilearm.model.response.AuthenticationSuccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:4200/")
@CrossOrigin
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;



    @GetMapping("/events/")
    public ResponseEntity<?>displayAllEvents() {
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping("/event/{id}")
    public ResponseEntity<?>displayEventPage(@PathVariable int id) {
        return new ResponseEntity<>(eventRepository.findById(id), HttpStatus.OK);
    }

//    @PostMapping("/event")
//    public void deleteEvent(@RequestBody int id) {
//        eventRepository.deleteById(id);
//
//    }

    @PostMapping("/edit/delete")
    public void deleteEvent(@RequestBody int id) {
        eventRepository.deleteById(id);
    }


    @PostMapping("/create")
    public ResponseEntity<?> createEventForm(@RequestBody EventDTO eventDTO) {

        Event createNewEvent = new Event(eventDTO.getUserName(),
                eventDTO.getEventHost(),
                eventDTO.getContactEmail(),
                eventDTO.getEventTitle(),
                eventDTO.getDatetime(),
                eventDTO.getEventAddress(),
                eventDTO.getEventCategory(),
                eventDTO.getDescription(),
                eventDTO.getImageId());

        eventRepository.save(createNewEvent);
        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);

    }


    @PostMapping("/edit/event")
    public ResponseEntity<?> editEventForm(@RequestBody EventDTO eventDTO) {

        Optional<Event> result = eventRepository.findById(eventDTO.getId());
        Event updatedEvent = result.get();
        updatedEvent.setEventHost(eventDTO.getEventHost());
        updatedEvent.setContactEmail(eventDTO.getContactEmail());
        updatedEvent.setEventTitle(eventDTO.getEventTitle());
        updatedEvent.setDatetime(eventDTO.getDatetime());
        updatedEvent.setEventAddress(eventDTO.getEventAddress());
        updatedEvent.setEventCategory(eventDTO.getEventCategory());
        updatedEvent.setDescription(eventDTO.getDescription());
        updatedEvent.setImageId(eventDTO.getImageId());
        eventRepository.save(updatedEvent);

        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);

    }

    //ResponseEntity represents the whole HTTP response from front end
    //@RequestBody pulls from client side and puts data into Java object (event)
    //new event saved into event repository
    //authenticate user
    //return new event from authenticated user


}
