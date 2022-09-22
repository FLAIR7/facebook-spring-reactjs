package com.flair7.facebook.controller;

import com.flair7.facebook.dto.request.AuthRequest;
import com.flair7.facebook.dto.request.RegistrationRequest;
import com.flair7.facebook.mapper.AuthMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthMapper authMapper;

    public AuthController(AuthMapper authMapper) {
        this.authMapper = authMapper;
    }

    @PostMapping("/registration/check")
    public ResponseEntity<String> checkEmail(@Valid @RequestBody RegistrationRequest request) {
        return ResponseEntity.ok(authMapper.registration(request));
    }
}
