package org.rally.backend.eventsarm.controller;


import org.rally.backend.eventsarm.models.DTO.EventDTO;
import org.rally.backend.eventsarm.models.DTO.JoinDTO;
import org.rally.backend.eventsarm.models.Event;
import org.rally.backend.eventsarm.models.Join;
import org.rally.backend.eventsarm.repository.EventRepository;
import org.rally.backend.eventsarm.repository.JoinRepository;
import org.rally.backend.userprofilearm.model.response.AuthenticationSuccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/join")
public class JoinController {

//    @Autowired
//    private JoinRepository joinRepository;
//
//    @Autowired
//    private EventRepository eventRepository;


//    @GetMapping("/join/")
//    public ResponseEntity<?>displayAllJoin() {
//        return new ResponseEntity<>(joinRepository.findAll(), HttpStatus.OK);
//    }
//
//
//    @PostMapping("/join")
//    public ResponseEntity<?> joinEventForm(@RequestBody JoinDTO joinDTO) {
//
//        Join createNewJoin = new Join(joinDTO.getName(),
//                joinDTO.getContactEmail(),
//                joinDTO.getNumAttending(),
//                joinDTO.getComment());
//
//        joinRepository.save(createNewJoin);
//        AuthenticationSuccess authenticationSuccess = new AuthenticationSuccess("Success");
//        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);
//
//    }




}
