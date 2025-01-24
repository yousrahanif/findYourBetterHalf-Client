import React, { useContext } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const CreateBiodata = () => {
    const {user}=useContext(AuthContext)

    const handleCreateBio = (event) => {
        event.preventDefault();
        const form = event.target;

        const biodata_type = form.biodataType.value;
        const name = form.name.value;

        const profile_image = form.profileImage.value;
        const date_of_birth = form.dob.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const age = form.age.value;
        const occupation = form.occupation.value;
        const race = form.race.value;
        const fathers_name = form.fatherName.value;
        const mothers_name = form.motherName.value;
        const permanent_division = form.permanentDivision.value;
        const present_division = form.presentDivision.value;
        const expected_partner_age = form.partnerAge.value;
        const expected_partner_height = form.partnerHeight.value;
        const expected_partner_weight = form.partnerWeight.value;
        const contact_email = form.contactEmail.value;
        const mobile_number = form.mobileNumber.value;

        const newBio = {
            biodata_type,
            name,
           
            
profile_image,
date_of_birth,
            height,
            weight,
            age,
            occupation,
            race,
            fathers_name,
            mothers_name,
            permanent_division,
            present_division,
            expected_partner_age,
            expected_partner_height,
            expected_partner_weight,
            contact_email,
            mobile_number,
            member_type: "normal",
        };
        
   
        fetch('http://localhost:5000/biodata',{
            method:'POST', 
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newBio)
           })
           .then(res=>res.json())
           .then(data=>{
          
            if(data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "Campaign Added",
                    icon: "success"
                  });
                  form.reset();
    
            }
           })
    
    
    
    
    };

    return (
        <div>
            <form onSubmit={handleCreateBio} className="flex max-w-md flex-col gap-4">
                {/* <div>
                    <div className="mb-2 block">
                        <Label htmlFor="biodataType" value="Biodata Type" />
                    </div>
                    <TextInput
                        id="biodataType"
                        name="biodataType"
                        type="text"
                        placeholder="Enter biodata type"
                        required
                    />
                </div> */}

<div>
  <div className="mb-2 block">
    <Label htmlFor="biodataType" value="Biodata Type" />
  </div>
  <select
    id="biodataType"
    name="biodataType"
    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">Select biodata type</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
</div>


                 <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="profileImage" value="Profile Image" />
                    </div>
                    <TextInput
                        id="profileImage"
                        name="profileImage"
                        type="url"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="dob" value="Date of Birth" />
                    </div>
                    <TextInput
                        id="dob"
                        name="dob"
                        type="date"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="height" value="Height" />
                    </div>
                    <TextInput
                        id="height"
                        name="height"
                        type="number"
                        step="any"
                        placeholder="Enter your height"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="weight" value="Weight" />
                    </div>
                    <TextInput
                        id="weight"
                        name="weight"
                        type="number"
                        placeholder="Enter your weight (kg)"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="age" value="Age" />
                    </div>
                    <TextInput
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Enter your age"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="occupation" value="Occupation" />
                    </div>
                    <TextInput
                        id="occupation"
                        name="occupation"
                        type="text"
                        placeholder="Enter your occupation"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="race" value="Skin Color" />
                    </div>
                    <TextInput
                        id="race"
                        name="race"
                        type="text"
                        placeholder="Enter your skin color"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="fatherName" value="Father's Name" />
                    </div>
                    <TextInput
                        id="fatherName"
                        name="fatherName"
                        type="text"
                        placeholder="Enter your father's name"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="motherName" value="Mother's Name" />
                    </div>
                    <TextInput
                        id="motherName"
                        name="motherName"
                        type="text"
                        placeholder="Enter your mother's name"
                        required
                    />
                </div>

                {/* <div>
                    <div className="mb-2 block">
                        <Label htmlFor="permanentDivision" value="Permanent Division Name" />
                    </div>
                    <TextInput
                        id="permanentDivision"
                        name="permanentDivision"
                        type="text"
                        placeholder="Enter your permanent division"
                        required
                    />
                </div> */}
                <div>
  <div className="mb-2 block">
    <Label htmlFor="permanentDivision" value="Permanent Division Name" />
  </div>
  <select
    id="permanentDivision"
    name="permanentDivision"
    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">Select your division</option>
    <option value="Dhaka">Dhaka</option>
    <option value="Chattagram">Chattagram</option>
    <option value="Rangpur">Rangpur</option>
    <option value="Barisal">Barisal</option>
    <option value="Khulna">Khulna</option>
    <option value="Mymensingh">Mymensingh</option>
    <option value="Sylhet">Sylhet</option>
    <option value="Noakhali">Noakhali</option>
  </select>
</div>
<div>
  <div className="mb-2 block">

    <Label htmlFor="presentDivision" value="Present Division Name" />
  </div>
  <select
    id="presentDivision"
    name="presentDivision"
    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">Select your division</option>
    <option value="Dhaka">Dhaka</option>
    <option value="Chattagram">Chattagram</option>
    <option value="Rangpur">Rangpur</option>
    <option value="Barisal">Barisal</option>
    <option value="Khulna">Khulna</option>
    <option value="Mymensingh">Mymensingh</option>
    <option value="Sylhet">Sylhet</option>
    <option value="Noakhali">Noakhali</option>
  </select>
</div>



                

                

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="partnerAge" value="Expected Partner Age" />
                    </div>
                    <TextInput
                        id="partnerAge"
                        name="partnerAge"
                        type="number"
                        
                        placeholder="Enter expected partner's age"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="partnerHeight" value="Expected Partner Height" />
                    </div>
                    <TextInput
                        id="partnerHeight"
                        name="partnerHeight"
                        type="number"
                         step="any"
                        placeholder="Enter expected partner's height"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="partnerWeight" value="Expected Partner Weight" />
                    </div>
                    <TextInput
                        id="partnerWeight"
                        name="partnerWeight"
                        type="number"
                         step="any"
                        placeholder="Enter expected partner's weight"
                        required
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="contactEmail" value="Contact Email" />
                    </div>
                    <TextInput
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
defaultValue={user?.email}                       

readOnly disabled
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="mobileNumber" value="Mobile Number" />
                    </div>
                    <TextInput
                        id="mobileNumber"
                        name="mobileNumber"
                        type="tel"
                        placeholder="Enter your mobile number"
                        required
                    />
                </div> 
              
                <Button type="submit">Save and Publish</Button>
            </form>
        </div>
    );
};

export default CreateBiodata;
