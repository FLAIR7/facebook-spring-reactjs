package com.flair7.facebook.repository;

import com.flair7.facebook.model.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@DisplayName("UNIT TEST: [User Repository]")
class UserRepositoryTest {
    private final UserRepository repository;

    @Autowired
    public UserRepositoryTest(UserRepository repository){
        this.repository = repository;
    }

    @Test
    void save_PersistUser_WhenSuccessful(){
        User user = new User("carlos@gmail.com",
                "carlos123", "carlos",
                "santos", "male",
                "12/05/2021");
        User userSaved = repository.save(user);

        Assertions.assertThat(userSaved).isNotNull();
        Assertions.assertThat(userSaved.getId()).isNotNull();
        Assertions.assertThat(userSaved.getEmail()).isEqualTo(user.getEmail());
    }

    @Test
    void findByEmail_ReturnsUser_WhenSuccessful(){
        User user = new User("carlos@gmail.com",
                "carlos123", "carlos",
                "santos", "male",
                "12/05/2021");
        User userSaved = repository.save(user);

        Optional<User> optionalUser = repository.findByEmail(userSaved.getEmail());

        Assertions.assertThat(optionalUser).isPresent();
        Assertions.assertThat(optionalUser.get().getId()).isNotNull();
    }
}