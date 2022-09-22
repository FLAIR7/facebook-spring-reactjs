package com.flair7.facebook.mapper;

import com.flair7.facebook.dto.request.AuthRequest;
import com.flair7.facebook.dto.request.RegistrationRequest;
import com.flair7.facebook.service.AuthService;
import org.springframework.stereotype.Component;

@Component
public class AuthMapper {

    private final AuthService service;

    public AuthMapper(AuthService service) {
        this.service = service;
    }

    public String registration(RegistrationRequest request) {
        return service.registration(request);
    }
}
