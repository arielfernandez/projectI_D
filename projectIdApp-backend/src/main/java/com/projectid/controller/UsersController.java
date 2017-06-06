package com.projectid.controller;

import com.projectid.User;
import com.projectid.UserRepository;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "http://localhost:9000", maxAge = 3600)
@RestController
public class UsersController {

	@Autowired
	private UserRepository userRepository;
	private Logger log = LoggerFactory.getLogger(UsersController.class);

	@RequestMapping(value = "/getUsers", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getUsers() {
		List <User> users = (List<User>) userRepository.findAll();

		if(users.isEmpty()){
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<User>>(users, HttpStatus.OK);
		}
	}

	@RequestMapping(value = "/saveUser", method = RequestMethod.POST)
	public ResponseEntity<User> saveUser(@RequestBody User user){
		userRepository.save(user);
		return new ResponseEntity<User>(user, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/deleteUser/{userId}", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteUser(@PathVariable Long userId){
		User user = userRepository.findOne(userId);
		userRepository.delete(userId);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@RequestMapping(value = "/getUser/{userId}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser (@PathVariable Long userId){
		return new ResponseEntity<User>(userRepository.findOne(userId), HttpStatus.OK);
	}

	/*@RequestMapping(value = "/updateUser", method = RequestMethod.POST)
	public void updateUser (@Param("id") Long id, @Param("name") String name, @Param("surname") String surname,
							@Param("address") String address, @Param("country") String country, @Param("phone") String phone,
							@Param("mobile") String mobile, @Param("email") String email){


	}*/

}
