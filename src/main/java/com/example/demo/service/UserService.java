package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.UserDto;

/** User crud  trait
 */
public interface UserService {

    void saveUser(UserDto userDto);
    List<UserDto> getAllUsers();
}
