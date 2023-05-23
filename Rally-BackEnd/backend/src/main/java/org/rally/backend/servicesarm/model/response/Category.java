package org.rally.backend.servicesarm.model.response;

import jakarta.persistence.Entity;
import org.rally.backend.servicesarm.model.AbstractEntity;


@Entity
public class Category extends AbstractEntity {


    private String category;

    public Category(String category) {
        this.category = category;
    }

    public Category() {

    }

    public String getCategory() {
        return category;
    }
}
