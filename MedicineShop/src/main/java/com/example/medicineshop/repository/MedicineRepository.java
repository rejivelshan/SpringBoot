package com.example.medicineshop.repository;

import com.example.medicineshop.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {
   
}
