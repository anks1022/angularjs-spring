package com.example.demo.converter;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;

/** Convert the user entity and dtos
 */
public class UserConverter {
	public static User dtoToEntity(UserDto userDto) {
		User user = new User(userDto.getFirstName(), userDto.getLastName(), userDto.getEmail()
		, userDto.getDate(), userDto.getUrl());
		return user;
	}

	public static UserDto entityToDto(User user) {
		UserDto userDto = new UserDto(user.getFirstName(), user.getLastName(), user.getEmail(),
				user.getDate(),user.getUrl());
		return userDto;
	}
}
