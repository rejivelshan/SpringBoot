package com.example.medicineshop.controller;

import com.example.medicineshop.model.Medicine;
import com.example.medicineshop.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medicines")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @GetMapping
    public List<Medicine> getAllMedicines() {
        return medicineService.getAllMedicines();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id) {
        Optional<Medicine> medicine = medicineService.getMedicineById(id);
        return medicine.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addone")
    public ResponseEntity<Medicine> createMedicine(@RequestBody Medicine medicine) {
        Medicine savedMedicine = medicineService.saveMedicine(medicine);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMedicine);
    }
    @PostMapping("/addlist")
    public ResponseEntity<List<Medicine>> addMedicineList(@RequestBody List<Medicine> medicineList) {
        List<Medicine> addedList = medicineService.addMedicineList(medicineList);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMedicineById(@PathVariable Long id) {
        boolean deleted = medicineService.deleteMedicineById(id);
        return deleted ? ResponseEntity.ok().build() : ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> updateMedicineById(@PathVariable Long id, @RequestBody Medicine updatedMedicine) {
        Medicine medicine = medicineService.updateMedicineById(id, updatedMedicine);
        if (medicine != null) {
            return ResponseEntity.ok(medicine);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
