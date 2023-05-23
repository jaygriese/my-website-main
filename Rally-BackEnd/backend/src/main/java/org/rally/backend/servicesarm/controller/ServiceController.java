package org.rally.backend.servicesarm.controller;

import org.rally.backend.servicesarm.model.dto.ServiceDTO;
import org.rally.backend.servicesarm.model.response.Service;
import org.rally.backend.userprofilearm.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/service")
public class ServiceController {

    @Autowired
    ServiceRepository serviceRepository;

    @PostMapping("/offer")
    public ResponseEntity<?> processOfferService (@RequestBody ServiceDTO serviceDTO) {


        Service newService = new Service(serviceDTO.getUserName(), serviceDTO.getDescription(), serviceDTO.getCategory(), serviceDTO.getDayTime(serviceDTO.getDays()), serviceDTO.getDayTime(serviceDTO.getTime()), serviceDTO.getEmail(), serviceDTO.getService(), serviceDTO.getType());

        serviceRepository.save(newService);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
