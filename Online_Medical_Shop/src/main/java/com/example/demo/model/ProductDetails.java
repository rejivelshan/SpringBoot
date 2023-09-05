package com.example.demo.model;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="productdetails")
public class ProductDetails {
@Id
private Integer productID;
private String name;
private String description;
private Integer price;
private Integer quantity;
private String manufacturdeDate;
private String expireDate;
public ProductDetails(Integer productID, String name, String description, Integer price, Integer quantity,
		String manufacturdeDate, String expireDate) {
	super();
	this.productID = productID;
	this.name = name;
	this.description = description;
	this.price = price;
	this.quantity = quantity;
	this.manufacturdeDate = manufacturdeDate;
	this.expireDate = expireDate;
}
public ProductDetails() {
	super();
	// TODO Auto-generated constructor stub
}
public Integer getProductID() {
	return productID;
}
public void setProductID(Integer productID) {
	this.productID = productID;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public Integer getPrice() {
	return price;
}
public void setPrice(Integer price) {
	this.price = price;
}
public Integer getQuantity() {
	return quantity;
}
public void setQuantity(Integer quantity) {
	this.quantity = quantity;
}
public String getManufacturdeDate() {
	return manufacturdeDate;
}
public void setManufacturdeDate(String manufacturdeDate) {
	this.manufacturdeDate = manufacturdeDate;
}
public String getExpireDate() {
	return expireDate;
}
public void setExpireDate(String expireDate) {
	this.expireDate = expireDate;
}

}
