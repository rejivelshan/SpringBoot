package com.example.demo.model;

import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="UserDatabase")
public class User_data {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
private String Name;
private String email;
private String password;
private Long PhoneNo;

   @OneToMany(cascade=CascadeType.ALL)
   @JoinColumn(name="fk-id")
   private List<OrderDetails> od;

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getName() {
	return Name;
}

public void setName(String name) {
	Name = name;
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

public Long getPhoneNo() {
	return PhoneNo;
}

public void setPhoneNo(Long phoneNo) {
	PhoneNo = phoneNo;
}

public List<OrderDetails> getOd() {
	return od;
}

public void setOd(List<OrderDetails> od) {
	this.od = od;
}

public User_data(Integer id, String name, String email, String password, Long phoneNo, List<OrderDetails> od) {
	super();
	this.id = id;
	Name = name;
	this.email = email;
	this.password = password;
	PhoneNo = phoneNo;
	this.od = od;
}

public User_data() {
	super();
	// TODO Auto-generated constructor stub
}


}
