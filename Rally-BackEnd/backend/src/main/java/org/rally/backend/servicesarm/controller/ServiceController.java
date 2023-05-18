package org.rally.backend.servicesarm.controller;

import org.rally.backend.servicesarm.model.dto.ServiceDTO;
import org.rally.backend.servicesarm.model.response.Category;
import org.rally.backend.servicesarm.model.response.Service;
import org.rally.backend.servicesarm.model.response.Type;
import org.rally.backend.servicesarm.repository.ServiceTypeRepository;
import org.rally.backend.servicesarm.repository.ServiceCategoryRepository;
import org.rally.backend.servicesarm.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping(value = "/services")
public class ServiceController {

    @Autowired
    ServiceRepository serviceRepository;

    @Autowired
    ServiceCategoryRepository serviceCategoryRepository;

    @Autowired
    ServiceTypeRepository serviceTypeRepository;

    @PostMapping("/offer")
    public ResponseEntity<?> processOfferService (@RequestBody ServiceDTO serviceDTO) {

//        define objects for category and type inputs from front end
        Category newCategory = new Category(serviceDTO.getCategory());
        Type newType = new Type(serviceDTO.getType());

//        use serviceDTO to define a new service object
        Service newService = new Service(serviceDTO.getUserName(), serviceDTO.getDescription(), serviceDTO.getDayTime(serviceDTO.getDays()), serviceDTO.getDayTime(serviceDTO.getTime()), serviceDTO.getEmail(), serviceDTO.getService());

//        loop through the cat repository to see if there are existing categories
        List<Category> findAll = (List <Category>) serviceCategoryRepository.findAll();
        for (Category category: findAll) {
            System.out.println(serviceDTO.getCategory());
            System.out.println(category.getCategory());
            System.out.println(category.getCategory().equals(serviceDTO.getCategory()));
            if (category.getCategory().equals(serviceDTO.getCategory())) {
                newService.setCategory(category);
                break;
            }
        }
//        add new category to new service if repo is null
        if (newService.getCategory() == null) {
            newService.setCategory(newCategory);
        }

        List<Type> findAllType = (List <Type>) serviceTypeRepository.findAll();
        for (Type type: findAllType) {
            System.out.println(serviceDTO.getType());
            System.out.println(type.getType());
            System.out.println(type.getType().equals(serviceDTO.getType()));
            if (type.getType().equals(serviceDTO.getType())) {
                newService.setType(type);
                break;
            }
        }
//        add new category to new service if repo is null
        if (newService.getType() == null) {
            newService.setType(newType);
        }



        serviceRepository.save(newService);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
