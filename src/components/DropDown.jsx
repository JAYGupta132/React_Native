import React, { useState } from "react";

export const DropDown = () => {
  const data = [
    { name: "India", code: "IN", cities: ["Mumbai", "Indore"] },
    { name: "Pakistan", code: "PK", cities: ["Kabul", "Karachi"] },
    { name: "America", code: "US", cities: ["Miami", "Chicago"] },
  ];

  const [country, setCountry] = useState(0);
  const [city, setCity] = useState(0);
  // const [cities, setCities] = useState([]);

  const handleCountry = (e) => {
    // console.log(e.target.value)
    setCountry(e.target.value);
    // setCities(data.find((item) => item?.code === e.target.value)?.cities);
  };

  const handleShow = () => {
    console.log("Country:", country);
    console.log("City:", city);
  };
  return (
    <div>
      <h1>DropDown</h1>
      <select name="Country" id="" onChange={(e) => handleCountry(e)}>
        {/* <option value={null} >Select Country</option> */}
        {data.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <select name="Country" id="" onChange={(e) => setCity(e.target.value)}>
        {/* <option value="null" >Select City</option> */}
        {data[country].cities?.map((ct, index) => (
          <option key={index} value={index}>
            {ct}
          </option>
        ))}
      </select>

      <br />
      <br />
      <button onClick={handleShow}>selected items</button>
    </div>
  );
};
