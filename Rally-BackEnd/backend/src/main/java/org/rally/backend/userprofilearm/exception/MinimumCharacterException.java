package org.rally.backend.userprofilearm.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.LENGTH_REQUIRED, reason = "Not Enough Characters")
public class MinimumCharacterException extends RuntimeException{
    public MinimumCharacterException () {
        super();
    }
}
