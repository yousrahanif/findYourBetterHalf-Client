import { Helmet } from "react-helmet-async";
import { Sidebar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { GiWorld } from "react-icons/gi";
import { BiMaleFemale } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";
import AllBiodataCards from "./AllBiodataCards";


const AllBiodata = () => {
     const [biodata, setBiodata]=useState([])

     const [ageFilter, setAgeFilter] = useState('');
     const [genderFilter, setGenderFilter] = useState('');
     const [divisionFilter, setDivisionFilter] = useState('');
     const ageRanges = {
        '18-30': [18, 30],
        '31-50': [31, 50],
        '51-70': [51, 70]
    };   
     useEffect(()=>{
            fetch("http://localhost:5000/biodata")
            .then(res=>res.json())
            .then(data=>{
                setBiodata(data)
            })
        },[])


        const filteredBiodata = biodata.filter(item => {
            const isAgeMatch = !ageFilter || (item.age >= ageRanges[ageFilter][0] && item.age <= ageRanges[ageFilter][1]);
            const isGenderMatch = !genderFilter || item.biodata_type === genderFilter;
            const isDivisionMatch = !divisionFilter || item.permanent_division === divisionFilter;
    
            return isAgeMatch && isGenderMatch && isDivisionMatch;
        });
    return (
        <div className="w-11/12 mx-auto">
            <Helmet>

                <title>LoveForever || All Bios</title>
            </Helmet>
             
           <div className="grid grid-cols-12 gap-2">

            <div className="col-span-5">
            <Sidebar aria-label="Default sidebar example ">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={SlCalender}>
          <Dropdown label="Filter By Age" inline>
  <Dropdown.Item onClick={() => setAgeFilter('18-30')}>Between 18-30</Dropdown.Item>
  <Dropdown.Item onClick={() => setAgeFilter('31-50')}>Between 31-50</Dropdown.Item>
  <Dropdown.Item onClick={() => setAgeFilter('51-70')}>Between 51-70</Dropdown.Item>
</Dropdown>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiMaleFemale}>
          <Dropdown label="Gender" inline>
      <Dropdown.Item onClick={() => setGenderFilter('Male')}>Male</Dropdown.Item>
   
      <Dropdown.Item onClick={() => setGenderFilter('Female')}>Female</Dropdown.Item>
    </Dropdown>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={GiWorld}>
          <Dropdown label="Division" inline>
      <Dropdown.Item onClick={() => setDivisionFilter('Dhaka')}>Dhaka</Dropdown.Item>
      <Dropdown.Item onClick={() => setDivisionFilter('Chattagram')}>Chattagram</Dropdown.Item>
      <Dropdown.Item onClick={() => setDivisionFilter('Rangpur')}>Rangpur</Dropdown.Item>
      <Dropdown.Item onClick={() => setDivisionFilter('Barisal')}>Barisal</Dropdown.Item>
      <Dropdown.Item onClick={() => setDivisionFilter('Khulna')}>Khulna</Dropdown.Item>
      <Dropdown.Item onClick={() => setDivisionFilter('Mymensingh')}>Mymensingh</Dropdown.Item>
      <Dropdown.Item onClick={() => setDivisionFilter('Sylhet')}>Sylhet</Dropdown.Item>
      <Dropdown.Item onClick={() => setDivisionFilter('Noakhali')}>Noakhali</Dropdown.Item>

     
    </Dropdown>
          </Sidebar.Item>
          
        
       
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
            </div>
            <div className="col-span-7">
            <div className="flex items-center justify-center min-h-screen">

<div className=" grid grid-cols-1 md:grid-cols-2   gap-2">

{filteredBiodata.map(item => (
                                <AllBiodataCards key={item._id} item={item} />
                            ))}
   </div>
   </div>
            </div>
           </div>
        </div>
    );
};

export default AllBiodata;