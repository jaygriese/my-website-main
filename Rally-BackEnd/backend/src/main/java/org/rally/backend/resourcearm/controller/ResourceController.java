package org.rally.backend.resourcearm.controller;

import org.rally.backend.resourcearm.model.DTO.ResourceDTO;
import org.rally.backend.resourcearm.model.Resource;
import org.rally.backend.resourcearm.model.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin
@RequestMapping(value = "/resources/")
public class ResourceController {
    @Autowired
    private ResourceRepository resourceRepository;

    @GetMapping("/resources/")
    public ResponseEntity<?>displayAllResources(){
        return new ResponseEntity<>(resourceRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping("/resources/{id}")
    public ResponseEntity<?>displayResourcePage(@PathVariable int id) {
        return new ResponseEntity<>(resourceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> processAddResource(@RequestBody ResourceDTO resourceDTO) {

        Resource newResource = new Resource(resourceDTO.getResourceName(),
                resourceDTO.getCategory(),
                resourceDTO.getAddress(),
                resourceDTO.getWebsite(),
                resourceDTO.getTelephoneNumber(),
                resourceDTO.getEmail(),
                resourceDTO.getDescription());

        System.out.printf("This is the resource to save: Name %s, category %s, email %s, address: %s, phone: %s, description: %s", newResource.getResourceName(), newResource.getCategory(), newResource.getEmail(), newResource.getAddress(), newResource.getTelephoneNumber(), newResource.getDescription());
        resourceRepository.save(newResource);
        return new ResponseEntity<>(newResource, HttpStatus.OK);
    }

}

