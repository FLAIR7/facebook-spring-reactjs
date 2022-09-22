package com.flair7.facebook.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.OK)
public class ApiRequestException extends RuntimeException{

    public ApiRequestException(String message){
        super(message);
    }
}
