package org.rally.backend.servicesarm.model.response;

import jakarta.persistence.Entity;
import org.rally.backend.servicesarm.model.AbstractEntity;

@Entity
public class Type extends AbstractEntity {

    private String type;

    public Type(String type) {
        this.type = type;
    }

    public Type() {

    }

    public String getType() {
        return type;
    }
}
