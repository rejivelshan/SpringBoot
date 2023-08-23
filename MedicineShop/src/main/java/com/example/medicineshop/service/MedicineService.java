package com.example.medicineshop.service;

import com.example.medicineshop.model.Medicine;
import com.example.medicineshop.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    public List<Medicine> getAllMedicines() {
        return ((ListCrudRepository<Medicine, Long>) medicineRepository).findAll();
    }

    public Optional<Medicine> getMedicineById(Long id) {
        return ((CrudRepository<Medicine, Long>) medicineRepository).findById(id);
    }
    
    public Medicine saveMedicine(Medicine medicine) {
        return ((CrudRepository<Medicine, Long>) medicineRepository).save(medicine);
    }
    public List<Medicine> addMedicineList(List<Medicine> medicineList) {
        return medicineRepository.saveAll(medicineList);
    }

    public boolean deleteMedicineById(Long id) {
        if (((CrudRepository<Medicine, Long>) medicineRepository).existsById(id)) {
            ((CrudRepository<Medicine, Long>) medicineRepository).deleteById(id);
            return true;
        } else {
            return false;
        }
    }

 
    public Medicine updateMedicineById(Long id, Medicine updatedMedicine) {
        if (((CrudRepository<Medicine, Long>) medicineRepository).existsById(id)) {
            ((Medicine) updatedMedicine).setId(id);
            return ((CrudRepository<Medicine, Long>) medicineRepository).save(updatedMedicine);
        } else {
            return null;
        }
    }

    
}
