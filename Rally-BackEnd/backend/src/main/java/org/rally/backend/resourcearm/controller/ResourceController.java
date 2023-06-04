package org.rally.backend.resourcearm.controller;

import org.rally.backend.resourcearm.model.DTO.ResourceDTO;
import org.rally.backend.resourcearm.model.Resource;
import org.rally.backend.resourcearm.model.repository.ResourceRepository;
import org.rally.backend.userprofilearm.model.response.AuthenticationSuccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("/resources")
public class ResourceController {
    @Autowired
    private ResourceRepository resourceRepository;

    @GetMapping("/resources/")
    public ResponseEntity<?>displayAllResources(){
        return new ResponseEntity<>(resourceRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping("/resource/{id}")
    public ResponseEntity<?>displayResourcePage(@PathVariable int id) {
        return new ResponseEntity<>(resourceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/resource")
    public void deleteEvent(@RequestBody int id) {
        resourceRepository.deleteById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<?> processAddResource(@RequestBody ResourceDTO resourceDTO) {

        Resource newResource = new Resource(
                resourceDTO.getResourceName(),
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

    @PostMapping("/update/resource")
    public ResponseEntity<?> editResourceForm(@RequestBody ResourceDTO resourceDTO) {
        Optional<Resource> result = resourceRepository.findById(resourceDTO.getId());
        Resource updatedResource = result.get();
        updatedResource.setResourceName(resourceDTO.getResourceName());
        updatedResource.setCategory(resourceDTO.getCategory());
        updatedResource.setAddress(resourceDTO.getAddress());
        updatedResource.setWebsite(resourceDTO.getWebsite());
        updatedResource.setTelephoneNumber(resourceDTO.getTelephoneNumber());
        updatedResource.setEmail(resourceDTO.getEmail());
        updatedResource.setDescription(resourceDTO.getDescription());
        resourceRepository.save(updatedResource);

        AuthenticationSuccess authenticationSuccess  = new AuthenticationSuccess("Success");
        return new ResponseEntity<>(authenticationSuccess, HttpStatus.OK);
    }

}

