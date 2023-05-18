package org.rally.backend.servicesarm.controller;


import org.rally.backend.servicesarm.model.response.Category;
import org.rally.backend.servicesarm.model.response.Service;
import org.rally.backend.servicesarm.model.response.Type;
import org.rally.backend.servicesarm.repository.ServiceCategoryRepository;
import org.rally.backend.servicesarm.repository.ServiceRepository;
import org.rally.backend.servicesarm.repository.ServiceTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping(value = "/services")
public class SearchController {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ServiceCategoryRepository serviceCategoryRepository;

    @Autowired
    private ServiceTypeRepository serviceTypeRepository;

//    List<Service> services = (List<Service>) serviceRepository.findAll();


//    @GetMapping("/services")
//    public List<Service> findAllServices () {
//        List<Service> findAll = (List <Service>) serviceRepository.findAll();
//        return new ResponseEntity<>(findAll, HttpStatus.OK);
//    }

    @GetMapping("/searchservice")
    public ResponseEntity<?> findAllServices () {
        List<Service> findAllService = (List <Service>) serviceRepository.findAll();
        System.out.println(findAllService);
        return new ResponseEntity<>(findAllService, HttpStatus.OK);
    }



}
