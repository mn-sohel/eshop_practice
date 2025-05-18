import React, { useState, useRef } from 'react'
import { FaAngleDown, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TopRightBar = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const countryDrowdownRef = useRef(null)

    const countries = [
        { name: "United State", value: "us", language: "en", flag: "https://flagcdn.com/16x12/us.png" },
        { name: "Spain", value: "es", language: "es", flag: "https://flagcdn.com/16x12/es.png" },
        { name: "France", value: "fr", language: "fr", flag: "https://flagcdn.com/16x12/fr.png" },
        { name: "Germany", value: "de", language: "de", flag: "https://flagcdn.com/16x12/de.png" },
        { name: "Italy", value: "it", language: "it", flag: "https://flagcdn.com/16x12/it.png" },
        { name: "Portugal", value: "pt", language: "pt", flag: "https://flagcdn.com/16x12/pt.png" },
        { name: "Netherlands", value: "nl", language: "nl", flag: "https://flagcdn.com/16x12/nl.png" },
        { name: "Sweden", value: "se", language: "sv", flag: "https://flagcdn.com/16x12/se.png" },
        { name: "Norway", value: "no", language: "no", flag: "https://flagcdn.com/16x12/no.png" },
        { name: "Denmark", value: "dk", language: "da", flag: "https://flagcdn.com/16x12/dk.png" },
        { name: "Bangladesh", value: "bd", language: "bn", flag: "https://flagcdn.com/16x12/bd.png" },
        { name: "India", value: "in", language: "hi", flag: "https://flagcdn.com/16x12/in.png" },
        { name: "Pakistan", value: "pk", language: "ur", flag: "https://flagcdn.com/16x12/pk.png" },
        { name: "Nepal", value: "np", language: "ne", flag: "https://flagcdn.com/16x12/np.png" },
        { name: "Bhutan", value: "bt", language: "dz", flag: "https://flagcdn.com/16x12/bt.png" },
        { name: "Sri Lanka", value: "lk", language: "si", flag: "https://flagcdn.com/16x12/lk.png" },
        { name: "Maldives", value: "mv", language: "dv", flag: "https://flagcdn.com/16x12/mv.png" },
    ];

const handleSelect = (country) => {
    setSelectedCountry(country)
    setIsOpen(false)
}

  return (
    <div className='flex justify-end items-center gap-[49px]'>
        <div>
            <select 
            name="currency"
            >
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
           
            </select>
        </div>
        <div className='relative after:content-[""] after:absolute after:w-[1px] after:h-[32px] after:bg-[#BFBFBF] after:left-[-25px] after:top-[50%] after:-translate-y-1/2 before:content-[""] before:absolute before:w-[1px] before:h-[32px] before:bg-[#BFBFBF] before:left-[173px] before:top-[50%] before:-translate-y-1/2'>
        {/* <img src="https://flagcdn.com/16x12/us.png" /> */}
        <select 
        name="country"
        className='w-[112px] hidden' 
        value={selectedCountry?.value || ''}
        onChange={(e)=>{
            // console.log(e.target.value)
            const country = countries.find((c)=>(c.value === e.target.value))
            setSelectedCountry(country)
        }}
        >
            {countries.map((country,index) => (
            <option key={index} value={country.value}>{country.name}</option>
            ))}
        </select>
        {/* custom dropdown */}
        <div 
        className='w-[175px] p-2 cursor-pointer flex items-center'
        onClick={()=> setIsOpen(!isOpen)}
        >
            {selectedCountry ?
            <>
                <img src={selectedCountry?.flag} alt={selectedCountry.name} className='w-5 h-4 mr-2'/>
                <span className='mr-6'>{selectedCountry?.name}</span>
                <FaAngleDown />    
            </>
            :
            <span className='gap-3 flex items-center'>Select a country <FaAngleDown /></span>
        }
        </div>
        {/* option list */}
        {isOpen && (
            <ul className='w-[150px] absolute border border-gray-300 bg-white shadow-lg z-10'>
                {countries.map((country)=>(
                    <li
                    key={country.value} 
                    className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'
                    onClick={()=>handleSelect(country)}
                    >
                        <img src={country?.flag} alt={country.name} className='w-5 h-4 mr-2'/>
                        {country.name}
                    </li>  
                ))}
            </ul>
        )}
        </div>
        <div className='flex items-center gap-4'>
            <>
            <Link to={"#"}>
                <FaFacebookF />
            </Link>
            <Link to={"#"}>
                <FaTwitter />
            </Link>
            <Link to={"#"}>
                <IoLogoInstagram />
            </Link>
            </>
        </div>
    </div>
  )
}

export default TopRightBar