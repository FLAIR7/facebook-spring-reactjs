package com.flair7.facebook.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Objects;

public class RegistrationRequest {

    @Email(regexp = ".+@.+\\..+", message = "You'll use this when log in and if you ever need to reset your password.")
    private String email;

    @NotBlank(message = "Password cannot be empty")
    @Size(min = 6, message = "Your password needs to be at least 6 characters.")
    private String password;

    @NotBlank(message = "What's your name?")
    private String firstName;

    @NotBlank(message = "What's your name?")
    private String lastName;

    private String gender;

    private String birthday;

    public RegistrationRequest(String email,
                               String password,
                               String firstName,
                               String lastName,
                               String gender,
                               String birthday) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthday = birthday;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RegistrationRequest that = (RegistrationRequest) o;
        return email.equals(that.email) && password.equals(that.password) && firstName.equals(that.firstName) && lastName.equals(that.lastName) && gender.equals(that.gender) && birthday.equals(that.birthday);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, password, firstName, lastName, gender, birthday);
    }

    @Override
    public String toString() {
        return "RegistrationRequest{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", gender='" + gender + '\'' +
                ", birthday='" + birthday + '\'' +
                '}';
    }
}
