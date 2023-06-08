//package org.rally.backend.resourcearm.controller;
//
//import org.rally.backend.resourcearm.model.repository.ResourceRepository;
//import org.rally.backend.resourcearm.model.response.Resource;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@Controller
//@RequestMapping("search")
//public class SearchController {
//    @Autowired
//    private ResourceRepository resourceRepository;
//    @RequestMapping("")
//    public String search(Model model) {
//        model.addAttribute("columns", columnChoices);
//        return "search";
//    }
//    @PostMapping("results")
//    public String displaySearchResults(Model model, @RequestParam String searchType, @RequestParam String searchTerm){
//        Iterable<Resource> resources;
//        if (searchTerm.equalsIgnoreCase("all") || searchTerm.equals("")){
//            resources = resourceRepository.findAll();
//        } else resources = ResourceData.findByColumnAndValue(searchType, searchTerm, resourceRepository.findAll());
//        model.addAttribute("columns", columnChoices);
//        model.addAttribute("title", "Resources with " + columnChoices.get(searchType) + ": " + searchTerm);
//        model.addAttribute("resources", resources);
//        return "search";
//    }
//}
