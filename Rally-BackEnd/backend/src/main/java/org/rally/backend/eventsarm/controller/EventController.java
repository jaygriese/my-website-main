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

//    @PostMapping("/event/{id}")
//    public ResponseEntity<?>deleteEvent(@PathVariable int id) {
//        return new ResponseEntity<>(eventRepository.deleteById(id), HttpStatus.OK);
//    }


    @PostMapping("/create")
    public ResponseEntity<?> createEventForm(@RequestBody EventDTO eventDTO) {

        Event createNewEvent = new Event(eventDTO.getEventHost(),
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

//    @PostMapping("/edit/event/{id}")
//    public ResponseEntity<?> editEventForm(@RequestBody Event event) {
//
//        List<Event> updatedEventList = (List<Event>) eventRepository.findAll();
//
//        Event updatedEvent = new Event();
//
//        for (Event update : updatedEventList) {
//            if(update.getId() == event.getId()) {
//                eventRepository.deleteById(update.getId());
//
//            }
//        }
//
//        eventRepository.save(updatedEvent);
//
//        return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
//
//    }

    @PostMapping("/edit/event/{id}")
    public ResponseEntity<?> editEventForm(@RequestBody EventDTO eventDTO) {

        List<Event> updatedEventList = (List<Event>) eventRepository.findAll();

        Event updatedEvent = new Event(eventDTO.getEventHost(),
                eventDTO.getContactEmail(),
                eventDTO.getEventTitle(),
                eventDTO.getDatetime(),
                eventDTO.getEventAddress(),
                eventDTO.getEventCategory(),
                eventDTO.getDescription(),
                eventDTO.getImageId());

        for (Event event : updatedEventList) {
            if(event.getId() == eventDTO.getId()) {
                eventRepository.deleteById(event.getId());

            }
        }

        eventRepository.save(updatedEvent);

        return new ResponseEntity<>(HttpStatus.OK);

    }

    //ResponseEntity represents the whole HTTP response from front end
    //@RequestBody pulls from client side and puts data into Java object (event)
    //new event saved into event repository
    //authenticate user
    //return new event from authenticated user


}
