package com.flair7.facebook.service;

import com.flair7.facebook.dto.request.RegistrationRequest;
import com.flair7.facebook.exception.ApiRequestException;
import com.flair7.facebook.model.User;
import com.flair7.facebook.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository repository;

    public AuthService(UserRepository repository) {
        this.repository = repository;
    }

    public String registration(RegistrationRequest request) {
        Optional<User> existingUser = repository.findByEmail(request.getEmail());

        if(existingUser.isEmpty()) {
            User user = new User();
            user.setEmail(request.getEmail());
            //TODO: Must Encrypty password
            user.setPassword(request.getPassword());
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setBirthday(request.getBirthday());
            user.setGender(request.getGender());
            user.setRole("USER");
            repository.save(user);
            return "User data checked.";
        }
        throw new ApiRequestException("Email Already in use.");
    }
}
