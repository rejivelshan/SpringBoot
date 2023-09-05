package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.ProductDetails;
import com.example.demo.repository.ProductRepo;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ProductService {
@Autowired
ProductRepo pr;
public ProductDetails byid(Integer u) {
	return pr.getbyid(u);
}
public List<ProductDetails> bylast(String u) {
	return pr.getbylast(u);
}
public List<ProductDetails> byfirst(String u) {
	return pr.getbyfirst(u);
}
public Integer updates( String n ,String o) {
	return pr.update(n, o);
}
public Integer delete(String n){
	return pr.delete(n);
}
public ProductDetails post( ProductDetails u) {
	return pr.save(u);
}
public List<ProductDetails> postall( List<ProductDetails> u) {
	return (List<ProductDetails>)pr.saveAll(u);
}
public List<ProductDetails> get(){
	return pr.findAll();
}
public Optional<ProductDetails> getbyid(int id){
	return pr.findById(id);
}
public void delete(ProductDetails u) {
	 pr.delete(u);
}
public void deletebyid(int id) {
	pr.deleteById(id);
}
public ProductDetails put(ProductDetails u) {
	return pr.saveAndFlush(u);
}
public List<ProductDetails> order(String name){
	return pr.findAll(Sort.by(Sort.DEFAULT_DIRECTION,name));
}
public List<ProductDetails> pagecontent(int pgno,int pgsize){
	Page<ProductDetails> p=pr.findAll(PageRequest.of(pgno,pgsize) );
	return p.getContent();
}
public ProductDetails putbyid(int id,ProductDetails E){
	 Optional<ProductDetails> optional = pr.findById(id);
        
        if(pr.findById(id)!=null){
        	ProductDetails existing = optional.get();
            if(E.getProductID()!=null)
            	existing.setProductID(E.getProductID());
            if(E.getName()!=null)
            	existing.setName(E.getName());
            if(E.getDescription()!=null)
            	existing.setDescription(E.getDescription());
            if(E.getPrice()!=null)
            	existing.setPrice(E.getPrice());
            if(E.getQuantity()!=null)
            	existing.setQuantity(E.getQuantity());
            if(E.getManufacturdeDate()!=null)
            	existing.setManufacturdeDate(E.getManufacturdeDate());
            if(E.getExpireDate()!=null)
            	existing.setExpireDate(E.getExpireDate());
            return pr.saveAndFlush(existing);
        } else {
            throw new EntityNotFoundException("Employee with ID " + id + " not found"); //updateById
        }
}
}
