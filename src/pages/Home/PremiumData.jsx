
import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PremiumCards from "./PremiumCards";
import { Dropdown } from "flowbite-react";

const PremiumData = () => {
    const [premium, setPremium] = useState([]);
    const [filteredPremium, setFilteredPremium] = useState([]); // Stores filtered data
    const [sortOrder, setSortOrder] = useState("Ascending");
    const [biodataTypeFilter, setBiodataTypeFilter] = useState("All");

    useEffect(() => {
        fetch("https://matrimony-server-eight.vercel.app/biodata")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (Array.isArray(data.result)) {
                    const premiumData = data.result.filter(
                        (item) => item.member_type === "premium" || item.member_type === "Premium"
                    );
                    setPremium(premiumData);
                    setFilteredPremium(premiumData); // Initialize filtered data
                } else {
                    console.error("Expected 'result' to be an array but received:", data.result);
                }
            })
            .catch((err) => console.error("Error fetching biodata:", err));
    }, []);

    const sortPremiumData = (order) => {
        const sortedData = [...filteredPremium].sort((a, b) =>
            order === "Ascending" ? a.age - b.age : b.age - a.age
        );
        setFilteredPremium(sortedData);
        setSortOrder(order);
    };

    const filterPremiumData = (type) => {
        let filteredData = premium;

        if (type !== "All") {
            filteredData = premium.filter((item) => item.biodata_type.toLowerCase() === type.toLowerCase());
        }

        setFilteredPremium(filteredData);
        setBiodataTypeFilter(type);
    };

    return (
        <section className="mt-14">
            <SectionTitle heading={"Prime Guest"} />

            <div className="flex flex-col items-center ">
                {/* Sorting Options */}
                <div className="flex justify-center items-center gap-4 mb-4">
                    {/* Sort by Age */}
                    <Dropdown label="Sort by Age" dismissOnClick={false} style={{ backgroundColor: "#ef4444" }}>
                        <Dropdown.Item onClick={() => sortPremiumData("Ascending")}>Ascending</Dropdown.Item>
                        <Dropdown.Item onClick={() => sortPremiumData("Descending")}>Descending</Dropdown.Item>
                    </Dropdown>

                    {/* Filter by Biodata Type */}
                    <Dropdown label="Sort by Gender" dismissOnClick={false} style={{ backgroundColor: "#ef4444" }}>
                        <Dropdown.Item onClick={() => filterPremiumData("All")}>All</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterPremiumData("Male")}>Male</Dropdown.Item>
                        <Dropdown.Item onClick={() => filterPremiumData("Female")}>Female</Dropdown.Item>
                    </Dropdown>
                </div>

                {/* Display Premium Cards */}
                <div className="flex items-center justify-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPremium.slice(0, 6).map((item) => (
                            <PremiumCards key={item._id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumData;
