package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User_data;

public interface UserRepo extends JpaRepository<User_data, Integer> {

}
