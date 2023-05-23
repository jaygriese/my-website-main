package org.rally.backend.resourcearm.controller;

import org.rally.backend.resourcearm.model.DTO.ResourceDTO;
import org.rally.backend.resourcearm.model.response.Resource;
import org.rally.backend.resourcearm.model.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin
@RequestMapping(value = "/resources")
public class ResourceController {
    @Autowired
    ResourceRepository resourceRepository;

    @PostMapping("/add")
    public ResponseEntity<?> processAddResource(@RequestBody ResourceDTO resourceDTO) {

        Resource newResource = new Resource(resourceDTO.getResourceName(), resourceDTO.getCategory(), resourceDTO.getAddress(), resourceDTO.getWebsite(), resourceDTO.getTelephoneNumber(), resourceDTO.getEmailAddress(), resourceDTO.getDescription());
        resourceRepository.save(newResource);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

