package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User_data;
import com.example.demo.service.User_Service;

@RestController
public class UserController {
  @Autowired
  User_Service us;
  @PostMapping("insert")
  public User_data post(@RequestBody User_data u) {
		return us.post(u);
	}
  @PostMapping("insertAll")
  public List<User_data> postall(@RequestBody List<User_data> u) {
		return (List<User_data>)us.postall(u);
	}
  @GetMapping("showall")
  public List<User_data> get(){
		return us.get();
	}
  @GetMapping("showid/{id}")
  public Optional<User_data> getbyid(@PathVariable int id){
		return us.getbyid(id);
	}
  @DeleteMapping("delet")
  public String delete(@RequestBody User_data u) {
		 us.delete(u);
		 return "data deleted";
	}
  @DeleteMapping("delet/{id}")
  public String deletebyid(@PathVariable int id) {
		us.deletebyid(id);
		return "id deleted";
	}
  @PutMapping("update")
  public User_data put(@RequestBody User_data u) {
		return us.put(u);
	}
  @PutMapping("update/{id}")
  public User_data putbyid(@PathVariable int id,@RequestBody User_data u) {
	  return us.putbyid(id, u);
  }
}
