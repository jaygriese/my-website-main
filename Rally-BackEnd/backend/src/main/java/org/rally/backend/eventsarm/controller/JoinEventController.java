package org.rally.backend.eventsarm.controller;


import org.rally.backend.eventsarm.models.DTO.JoinEventDTO;
import org.rally.backend.eventsarm.models.JoinEvent;
import org.rally.backend.eventsarm.repository.EventRepository;
import org.rally.backend.eventsarm.repository.JoinEventRepository;
import org.rally.backend.userprofilearm.model.response.AuthenticationSuccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/join")
public class JoinEventController {

    @Autowired
    private JoinEventRepository joinEventRepository;

//    @Autowired
//    private EventRepository eventRepository;


    @GetMapping("/join/")
    public ResponseEntity<?>displayAllJoin() {
        return new ResponseEntity<>(joinEventRepository.findAll(), HttpStatus.OK);
    }


    @PostMapping("/event")
    public ResponseEntity<?> joinEventForm(@RequestBody JoinEventDTO joinEventDTO) {

        JoinEvent createNewJoin = new JoinEvent(joinEventDTO.getUserName(),
                joinEventDTO.getEvent(),
                joinEventDTO.getAttending(),
                joinEventDTO.getContactEmail(),
                joinEventDTO.getNumAttending(),
                joinEventDTO.getComment());

        joinEventRepository.save(createNewJoin);
        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);

    }




}
