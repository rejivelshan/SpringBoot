import React from "react";
import NavBar from "./Navbar";
import MedicineForm from "./MedicineForm";
import DeleteUser from "./DeleteUser";

function Product() {
    return (
        <div>
        <NavBar/>
         <MedicineForm/>
         <DeleteUser/>
        </div>
    );
}

export default Product;