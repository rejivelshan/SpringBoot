// import React, { useState } from 'react';
// import axios from 'axios';
// import './MedicineForm.css';
// function MedicineForm() {
//   const [formData, setFormData] = useState({
//     medicineName: '',
//     medicineCost: '',
//     medicineQuantity: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request with Axios
//       const response = await axios.post('http://localhost:8282/api/v1/user/product', formData);
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="medicineName">Medicine Name:</label>
//         <input
//           type="text"
//           id="medicineName"
//           name="medicineName"
//           value={formData.medicineName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="medicineCost">Medicine Cost:</label>
//         <input
//           type="text"
//           id="medicineCost"
//           name="medicineCost"
//           value={formData.medicineCost}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="medicineQuantity">Medicine Quantity:</label>
//         <input
//           type="text"
//           id="medicineQuantity"
//           name="medicineQuantity"
//           value={formData.medicineQuantity}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <button type="submit">Buy</button>
//       </div>
//     </form>
//   );
// }

// export default MedicineForm;
import React, { useState } from 'react';
import axios from 'axios';

function MedicineForm() {
  const [formData, setFormData] = useState({
    medicineName: '',
    medicineCost: '',
    medicineQuantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with Axios
      const response = await axios.post('http://localhost:8282/api/v1/user/product', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineName">
            Medicine Name:
          </label>
          <input
            type="text"
            id="medicineName"
            name="medicineName"
            value={formData.medicineName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineCost">
            Medicine Cost:
          </label>
          <input
            type="text"
            id="medicineCost"
            name="medicineCost"
            value={formData.medicineCost}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medicineQuantity">
            Medicine Quantity:
          </label>
          <input
            type="text"
            id="medicineQuantity"
            name="medicineQuantity"
            value={formData.medicineQuantity}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Buy
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicineForm;
