package org.rally.backend.servicesarm.repository;

import org.rally.backend.servicesarm.model.response.Category;
import org.springframework.data.repository.CrudRepository;


public interface ServiceCategoryRepository extends CrudRepository<Category, Integer> {

}
