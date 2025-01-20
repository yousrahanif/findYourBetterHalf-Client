import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';
import Swal from 'sweetalert2';

const EditBiodata = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [biodata, setBiodata] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/biodata/${id}`)
      .then((response) => response.json())
      .then((data) => setBiodata(data));
  }, [id]);

  const handleUpdateBio = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedBio = {
      biodata_type: form.biodataType?.value || '',
      name: form.name?.value || '',
      profile_image: form.profileImage?.value || '',
      date_of_birth: form.dob?.value || '',
      height: form.height?.value || '',
      weight: form.weight?.value || '',
      age: form.age?.value || '',
      occupation: form.occupation?.value || '',
      race: form.race?.value || '',
      fathers_name: form.fatherName?.value || '',
      mothers_name: form.motherName?.value || '',
      permanent_division: form.permanentDivision?.value || '',
      present_division: form.presentDivision?.value || '',
      expected_partner_age: form.partnerAge?.value || '',
      expected_partner_height: form.partnerHeight?.value || '',
      expected_partner_weight: form.partnerWeight?.value || '',
      mobile_number: form.mobileNumber?.value || '',
    };

    fetch(`http://localhost:5000/biodata/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedBio),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount>0) {
          Swal.fire({
            title: 'Success!',
            text: 'Biodata updated successfully',
            icon: 'success',
          });
          navigate('/dashboard/viewbiodata');
        } else {
          Swal.fire({
            title: 'Error!',
            text: data.message || 'Failed to update biodata',
            icon: 'error',
          });
        }
      });
  };

  return (
    <form onSubmit={handleUpdateBio} className="flex max-w-md flex-col gap-4">
      <div>
        <Label htmlFor="biodataType" value="Biodata Type" />
        <TextInput
          id="biodataType"
          name="biodataType"
          type="text"
          defaultValue={biodata.biodata_type}
          required
        />
      </div>

      <div>
        <Label htmlFor="name" value="Name" />
        <TextInput
          id="name"
          name="name"
          type="text"
          defaultValue={biodata.name}
          required
        />
      </div>

      <div>
        <Label htmlFor="profileImage" value="Profile Image URL" />
        <TextInput
          id="profileImage"
          name="profileImage"
          type="url"
          defaultValue={biodata.profile_image}
        />
      </div>

      <div>
        <Label htmlFor="dob" value="Date of Birth" />
        <TextInput
          id="dob"
          name="dob"
          type="date"
          defaultValue={biodata.date_of_birth}
          required
        />
      </div>

      <div>
        <Label htmlFor="height" value="Height" />
        <TextInput
          id="height"
          name="height"
          type="text"
          defaultValue={biodata.height}
        />
      </div>

      <div>
        <Label htmlFor="weight" value="Weight" />
        <TextInput
          id="weight"
          name="weight"
          type="text"
          defaultValue={biodata.weight}
        />
      </div>

      <div>
        <Label htmlFor="age" value="Age" />
        <TextInput id="age" name="age" type="number" defaultValue={biodata.age} />
      </div>

      <div>
        <Label htmlFor="occupation" value="Occupation" />
        <TextInput
          id="occupation"
          name="occupation"
          type="text"
          defaultValue={biodata.occupation}
        />
      </div>

      <div>
        <Label htmlFor="race" value="Race" />
        <TextInput id="race" name="race" type="text" defaultValue={biodata.race} />
      </div>

      <div>
        <Label htmlFor="fatherName" value="Father's Name" />
        <TextInput
          id="fatherName"
          name="fatherName"
          type="text"
          defaultValue={biodata.fathers_name}
        />
      </div>

      <div>
        <Label htmlFor="motherName" value="Mother's Name" />
        <TextInput
          id="motherName"
          name="motherName"
          type="text"
          defaultValue={biodata.mothers_name}
        />
      </div>

      <div>
        <Label htmlFor="permanentDivision" value="Permanent Division" />
        <TextInput
          id="permanentDivision"
          name="permanentDivision"
          type="text"
          defaultValue={biodata.permanent_division}
        />
      </div>

      <div>
        <Label htmlFor="presentDivision" value="Present Division" />
        <TextInput
          id="presentDivision"
          name="presentDivision"
          type="text"
          defaultValue={biodata.present_division}
        />
      </div>

      <div>
        <Label htmlFor="partnerAge" value="Expected Partner Age" />
        <TextInput
          id="partnerAge"
          name="partnerAge"
          type="number"
          defaultValue={biodata.expected_partner_age}
        />
      </div>

      <div>
        <Label htmlFor="partnerHeight" value="Expected Partner Height" />
        <TextInput
          id="partnerHeight"
          name="partnerHeight"
          type="text"
          defaultValue={biodata.expected_partner_height}
        />
      </div>

      <div>
        <Label htmlFor="partnerWeight" value="Expected Partner Weight" />
        <TextInput
          id="partnerWeight"
          name="partnerWeight"
          type="text"
          defaultValue={biodata.expected_partner_weight}
        />
      </div>

      <div>
        <Label htmlFor="mobileNumber" value="Mobile Number" />
        <TextInput
          id="mobileNumber"
          name="mobileNumber"
          type="text"
          defaultValue={biodata.mobile_number}
          required
        />
      </div>

      <div>
        <Label htmlFor="contactEmail" value="Contact Email" />
        <TextInput
          id="contactEmail"
          name="contactEmail"
          type="email"
          defaultValue={biodata.contact_email}
          readOnly
          disabled
        />
      </div>

     <Button type="submit">Update</Button>
     






      
    </form>
  );
};

export default EditBiodata;




// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Label, TextInput, Button } from 'flowbite-react';
// import Swal from 'sweetalert2';

// const EditBiodata = () => {
//   const { id } = useParams(); 
//   const navigate = useNavigate();
//   const [biodata, setBiodata] = useState({});

//   const divisions = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal", "Sylhet", "Rangpur", "Mymensingh"]; // Division names

//   useEffect(() => {
//     fetch(`http://localhost:5000/biodata/${id}`)
//       .then((response) => response.json())
//       .then((data) => setBiodata(data));
//   }, [id]);

//   const handleUpdateBio = (event) => {
//     event.preventDefault();
//     const form = event.target;

//     const updatedBio = {
//       biodata_type: form.biodataType?.value || '',
//       name: form.name?.value || '',
//       profile_image: form.profileImage?.value || '',
//       date_of_birth: form.dob?.value || '',
//       height: form.height?.value || '',
//       weight: form.weight?.value || '',
//       age: form.age?.value || '',
//       occupation: form.occupation?.value || '',
//       race: form.race?.value || '',
//       fathers_name: form.fatherName?.value || '',
//       mothers_name: form.motherName?.value || '',
//       permanent_division: form.permanentDivision?.value || '',
//       present_division: form.presentDivision?.value || '',
//       expected_partner_age: form.partnerAge?.value || '',
//       expected_partner_height: form.partnerHeight?.value || '',
//       expected_partner_weight: form.partnerWeight?.value || '',
//       mobile_number: form.mobileNumber?.value || '',
//     };

//     fetch(`http://localhost:5000/biodata/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedBio),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           Swal.fire({
//             title: 'Success!',
//             text: 'Biodata updated successfully',
//             icon: 'success',
//           });
//           navigate('/dashboard/viewbiodata');
//         } else {
//           Swal.fire({
//             title: 'Error!',
//             text: data.message || 'Failed to update biodata',
//             icon: 'error',
//           });
//         }
//       });
//   };

//   return (
//     <form onSubmit={handleUpdateBio} className="flex max-w-md flex-col gap-4">
//       <div>
//         <Label htmlFor="biodataType" value="Biodata Type" />
//         <select
//           id="biodataType"
//           name="biodataType"
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//           defaultValue={biodata.biodata_type}
//           required
//         >
//           <option value="">Select Biodata Type</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//       </div>

//       <div>
//         <Label htmlFor="name" value="Name" />
//         <TextInput
//           id="name"
//           name="name"
//           type="text"
//           defaultValue={biodata.name}
//           required
//         />
//       </div>

//       <div>
//         <Label htmlFor="permanentDivision" value="Permanent Division" />
//         <select
//           id="permanentDivision"
//           name="permanentDivision"
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//           defaultValue={biodata.permanent_division}
//         >
//           <option value="">Select Permanent Division</option>
//           {divisions.map((division) => (
//             <option key={division} value={division}>
//               {division}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <Label htmlFor="presentDivision" value="Present Division" />
//         <select
//           id="presentDivision"
//           name="presentDivision"
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//           defaultValue={biodata.present_division}
//         >
//           <option value="">Select Present Division</option>
//           {divisions.map((division) => (
//             <option key={division} value={division}>
//               {division}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <Label htmlFor="profileImage" value="Profile Image URL" />
//         <TextInput
//           id="profileImage"
//           name="profileImage"
//           type="url"
//           defaultValue={biodata.profile_image}
//         />
//       </div>

//       <div>
//         <Label htmlFor="dob" value="Date of Birth" />
//         <TextInput
//           id="dob"
//           name="dob"
//           type="date"
//           defaultValue={biodata.date_of_birth}
//           required
//         />
//       </div>

//       <Button type="submit">Update</Button>
//     </form>
//   );
// };

// export default EditBiodata;

