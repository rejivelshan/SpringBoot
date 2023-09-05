package com.example.demo.model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long order_id;
	private String user_name;
	private String order_date;
	private String product_ordered;
	private Integer total_price;
	private String shipping_information;
	private String order_status;
	public OrderDetails(Long order_id, String user_name, String order_date, String product_ordered, Integer total_price,
			String shipping_information, String order_status) {
		super();
		this.order_id = order_id;
		this.user_name = user_name;
		this.order_date = order_date;
		this.product_ordered = product_ordered;
		this.total_price = total_price;
		this.shipping_information = shipping_information;
		this.order_status = order_status;
	}
	public OrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Long order_id) {
		this.order_id = order_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getOrder_date() {
		return order_date;
	}
	public void setOrder_date(String order_date) {
		this.order_date = order_date;
	}
	public String getProduct_ordered() {
		return product_ordered;
	}
	public void setProduct_ordered(String product_ordered) {
		this.product_ordered = product_ordered;
	}
	public Integer getTotal_price() {
		return total_price;
	}
	public void setTotal_price(Integer total_price) {
		this.total_price = total_price;
	}
	public String getShipping_information() {
		return shipping_information;
	}
	public void setShipping_information(String shipping_information) {
		this.shipping_information = shipping_information;
	}
	public String getOrder_status() {
		return order_status;
	}
	public void setOrder_status(String order_status) {
		this.order_status = order_status;
	}
	
	
}
