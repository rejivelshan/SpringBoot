package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.ProductDetails;

import jakarta.transaction.Transactional;

public interface ProductRepo extends JpaRepository<ProductDetails, Integer>{

	@Query(value="select * from productdetails where productId=:a",nativeQuery = true)
	public ProductDetails getbyid(@Param("a") Integer productId );
     @Query(value="select * from productdetails where name like %:s",nativeQuery = true)
     public List<ProductDetails> getbylast(@Param("s") String name);
     @Query(value="select * from productdetails where name like :s%",nativeQuery = true)
     public List<ProductDetails> getbyfirst(@Param("s") String name);
     @Modifying
     @Transactional
     @Query(value="update productdetails set name=?1 where name=?2",nativeQuery = true)
     public Integer update(@Param("new") String name,@Param("old") String name1);
     @Modifying
     @Transactional
     @Query(value="delete from productdetails where name=:s",nativeQuery = true)
     public Integer delete(@Param("s") String name);
     
}
