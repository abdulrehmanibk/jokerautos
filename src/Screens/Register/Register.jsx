import React, { useEffect, useState } from 'react'
import './Register.css'
import axios from 'axios';
import { countrycodes } from './CountryCodes';

const Register = () => {
  const [userData, setUserData] = useState({
    username:'',
    useremail:'',
    userphone:'',
    usermessage:'',
  })
  const [selectedCountry, setSelectedCountry] = useState(countrycodes[0].name); 
  const [selectedPhoneCode, setSelectedPhoneCode] = useState(countrycodes[0].phone_code); 

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    const country = countrycodes.find((item) => item.name === countryName);
    setSelectedCountry(country.name);
    setSelectedPhoneCode(country.phone_code);
  };

  const handlePhoneCodeChange = (event) => {
    const phoneCode = event.target.value;
    const country = countrycodes.find((item) => item.phone_code === phoneCode);
    setSelectedCountry(country.name);
    setSelectedPhoneCode(country.phone_code);
  };
  const handleInputChange = (e) => {

    let value = e.target.value;
    let name = e.target.name;

    setUserData({
      ...userData,
      [name]:value,
    })
    
  };

  const url = 'https://fgcampus1-server.vercel.app/send-whatsapp';
  // const url = 'http://localhost:4000/send-whatsapp';

  const submitWhatsappMessage = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(url,userData);

      if (response.status === 200) {
        alert("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };
  const fetchIp = async () => {
    try {
      // Fetch the IP address
      const response = await fetch('https://api.ipify.org');
      const ipAddress = await response.text();
  
      try {
        // Fetch details for the fetched IP address
        const geoResponse = await fetch(`https://get.geojs.io/v1/ip/geo/${ipAddress}.json`);
        const geoData = await geoResponse.json();

        try {
          const C_code = countrycodes.find((item) => item.iso2 === geoData.country_code);
          setSelectedPhoneCode(C_code.phone_code);
          setSelectedCountry(C_code.name);
        } catch (error) {
          
        }
      } catch (error) {
        console.log('Failed to fetch IP info:', error);
      }
    } catch (error) {
      console.log('Failed to fetch IP address:', error);
    }
  };


  useEffect(() => {
    fetchIp();
  },[])


  return (
    <>
    <div className="register_container">
        <div className="register_form">
            <h3>Start Your Free Trial</h3>
            <p>Sign up today and explore all features at no cost!</p>
            <input type="text" placeholder="Your Name" name='username' value={userData.username} onChange={handleInputChange}/>
            <input type="email" placeholder="Your Email" name='useremail' value={userData.useremail} onChange={handleInputChange}/>
            <div className="register_phone">

            <select name="phone_code" onChange={handlePhoneCodeChange} value={selectedPhoneCode}>
                
                {countrycodes.map((item, index) => (
                  <option key={index} value={item.phone_code}>
                    {item.emoji} +{item.phone_code}
                  </option>
                ))}
            </select>            
            <select name="country_name" onChange={handleCountryChange} value={selectedCountry}>
                
                {countrycodes.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.emoji} {item.name}
                  </option>
                ))}
            </select>
            </div>
            <input type="text" placeholder={`${selectedPhoneCode}XXXXXXXXX`} name='userphone' value={`${userData.userphone}`} onChange={handleInputChange}/>
          <textarea placeholder="Your Message" rows={'5'} name='usermessage' value={userData.usermessage} onChange={handleInputChange}></textarea>

          <button className="button2" onClick={submitWhatsappMessage}> Get Free Trial </button>
          </div>
    </div>
    </>
  )
};


export default Register