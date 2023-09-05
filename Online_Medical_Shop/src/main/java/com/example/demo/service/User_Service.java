package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User_data;
import com.example.demo.repository.UserRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class User_Service {
  
	@Autowired
	UserRepo ur;
	public User_data post( User_data u) {
		return ur.save(u);
	}
	public List<User_data> postall( List<User_data> u) {
		return (List<User_data>)ur.saveAll(u);
	}
	public List<User_data> get(){
		return ur.findAll();
	}
	public Optional<User_data> getbyid(int id){
		return ur.findById(id);
	}
	public void delete(User_data u) {
		 ur.delete(u);
	}
	public void deletebyid(int id) {
		ur.deleteById(id);
	}
	public User_data put(User_data u) {
		return ur.saveAndFlush(u);
	}
	public User_data putbyid(int id,User_data E){
		 Optional<User_data> optional = ur.findById(id);
	        
	        if(ur.findById(id)!=null){
	        	User_data existing = optional.get();
	            if(E.getName()!=null)
	            	existing.setName(E.getName());
	            if(E.getEmail()!=null)
	            	existing.setEmail(E.getEmail());
	            if(E.getPassword()!=null)
	            	existing.setPassword(E.getPassword());
	            if(E.getId()!=null)
	            	existing.setId(E.getId());
	            if(E.getPhoneNo()!=null)
	            	existing.setPhoneNo(E.getPhoneNo());
	            return ur.saveAndFlush(existing);
	        } else {
	            throw new EntityNotFoundException("Employee with ID " + id + " not found"); //updateById
	        }
	}
}
