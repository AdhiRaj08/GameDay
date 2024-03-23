import React, { useState } from 'react';
import icon1 from '../images/poster.webp';



function Purchase() {
  const [selectedCountry, setSelectedCountry] = useState('Country'); 
  const [selectedEdition, setSelectedEdition] = useState('Edition'); 

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleEditionChange = (event) => {
    setSelectedEdition(event.target.value); 
  };
  const [isOpenCountry, setIsOpenCountry] = useState(false); 
  const [isOpenEdition, setIsOpenEdition] = useState(false); 

  const toggleDropdownCountry = () => {
    setIsOpenCountry(!isOpenCountry);
  };

  const toggleDropdownEdition = () => {
    setIsOpenEdition(!isOpenEdition);
  };

  const handleMouseEnterCountry = () => {
    setIsOpenCountry(true);
  };

  const handleMouseLeaveCountry = () => {
    setIsOpenCountry(false);
  };

  const handleMouseEnterEdition = () => {
    setIsOpenEdition(true);
  };

  const handleMouseLeaveEdition = () => {
    setIsOpenEdition(false);
  };
  
  return (
    <div >
    <div id = "box" style={{paddingLeft:'60px', paddingBottom:'100px', position: 'relative'}} data-aos = "fade-up">
      <img src={icon1} style = {{ width: '250px', height: '250px',paddingTop: '70px' }} alt="" />
      <div className="country" onClick={toggleDropdownCountry} onMouseEnter={handleMouseEnterCountry} onMouseLeave={handleMouseLeaveCountry}>
        <span>{selectedCountry}</span>
        {isOpenCountry && (
          <div className="dropdown">
          <select size="4" required onChange={handleCountryChange}>
            <option value="INDIA">INDIA</option>
            <option value="RUSSIA">RUSSIA</option>
            <option value="USA">USA</option>
            <option value="CHINA">CHINA</option>
            <option value="JAPAN">JAPAN</option>
            <option value="BRAZIL">BRAZIL</option>
            <option value="SINGAPORE">SINGAPORE</option>
          </select>
          </div>
        )}
      </div>

      <div className="edition" onClick={toggleDropdownEdition} onMouseEnter={handleMouseEnterEdition} onMouseLeave={handleMouseLeaveEdition}>
        <span>{selectedEdition}</span>
        {isOpenEdition && (
          <div className="dropdown">
          <select size="4" required onChange={handleEditionChange}>
            <option value="ver0.2-02">ver0.2-02</option>
            <option value="XLR03-054">XLR03-054</option>
            <option value="XLR03-45">XLR03-45</option>
            <option value="XLw-02">XLw-02</option>
            <option value="ver0.2-02">ver0.2-02</option>
            <option value="ver0.2-02-92">ver0.2-02-92</option>
            <option value="ver0.45-02">ver0.45-02</option>
          </select>
          </div>
        )}
        </div>
        <input type="submit" value="PURCHASE" />
        
    </div>
    </div>
  );
}

export default Purchase;
