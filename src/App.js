import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';

import Slider from './components/Slider';
import ButtonSlider from './components/ButtonSlider';


function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isImage1, setIsImage1] = useState(true);

  useEffect(() => {
    // You can set up a timer or any other condition to switch between images
    const imageSwitchTimer = setInterval(() => {
      setIsImage1((prev) => !prev); // Toggle between image1 and image2
    }, 5000); // Switch every 5 seconds

    // Clear the timer when the component unmounts
    return () => clearInterval(imageSwitchTimer);
  }, []);
  return (
    
    <div className="App">
      
 
      <div className='navbar'>
        
      
      <div className="icon">
        
      
        <h2>
          <span className="logo-first-word">quinn emanuel</span>
          <span className="logo-second-word">trial lawyers</span>
          <span className="logo-third-word">quinn emanuel urquhart & sullivan,llp</span>
        </h2>
      </div>

      <div className="menu">
        <ul>
        <li className="relative">
  <a
    href="#"
    className={`transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
  >
    Attorneys
  </a>
  <div
    className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-2"
    style={{
      marginLeft: '50px',
      opacity: isDropdownOpen ? 1 : 0,
      transitionProperty: 'opacity',
      transitionDuration: '0.5s',
      transitionTimingFunction: 'ease',
    }}
  >
    {/* List of practice areas */}
    <ul>


      {/* Add more practice areas as needed */}
    </ul>
  </div>
</li>
<li className="relative">
  <a
    href="#"
    className={`transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
  >
    Practice Areas
  </a>
  <div
    className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-2"
    style={{
      marginLeft: '-750px',
      width: '1500px', // Adjust the width as needed
      height: '600px',
      opacity: isDropdownOpen ? 1 : 0,
      transitionProperty: 'opacity, width',
      transitionDuration: '1.0s',
      transitionTimingFunction: 'ease-in-out',
    }}
  >
    {/* List of practice areas */}
    <ul className="flex flex-wrap p-0 m-0">
      {[...Array(100).keys()].map((index) => (
        <li key={index} className="w-1/10 mb-1">
         <a href="#" className="text-xs text-blue-400 hover:bg-gray-200 hover:underline block px-4 py-2">
  Area {index + 1}
</a>

        </li>
      ))}
    </ul>
  </div>
</li>

<li className="relative">
            <a
              href="#"
              className={`transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
            >
              News
            </a>
            <div
              className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-2"
              style={{
                opacity: isDropdownOpen ? 1 : 0,
                transitionProperty: 'opacity',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'ease',
              }}
            >
              {/* List of practice areas */}
              <ul className="flex flex-col p-0 m-0">
  <li className="mb-1">
    <a href="#" className="text-xs text-blue-400 hover:bg-white hover:underline text-center block px-4 py-2">
      Awards
    </a>
  </li>
  <li className="mb-1">
    <a href="#" className="text-xs text-blue-400 hover:bg-white hover:underline text-center block px-4 py-2">
      Firm News
    </a>
  </li>
  <li className="mb-1">
    <a href="#" className="text-xs text-blue-400 hover:bg-white hover:underline text-center block px-4 py-2">
      Events
    </a>
  </li>
  <li className="mb-1">
    <a href="#" className="text-xs text-blue-400 hover:bg-white hover:underline block px-4 py-2">
      Firm Memoranda
    </a>
  </li>
  <li className="mb-1">
    <a href="#" className="text-xs text-blue-400 hover:bg-white hover:underline block px-4 py-2">
      Business Litigation Reports
    </a>
  </li>
  {/* Add more practice areas as needed */}
</ul>

            </div>
          </li>
          <li className="relative">
  <a
    href="#"
    className={`transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
  >
    The Firm
  </a>
  <div
     className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-2"
     style={{
       opacity: isDropdownOpen ? 1 : 0,
       transitionProperty: 'opacity',
       transitionDuration: '0.5s',
       transitionTimingFunction: 'ease',
     }}
  >
    {/* List of practice areas */}
    {Array.from({ length: 5 }, (_, index) => (
      <a
        key={index}
        href="#"
        className="text-xs text-blue-400 hover:bg-white hover:underline block px-4 py-2"
      >
        Area {index + 1}
      </a>
    ))}
  </div>
</li>

<li className="relative">
  <a
    href="#"
    className={`transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
  >
    Careers
  </a>
  <div
     className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-2"
     style={{
      marginLeft: '-600px',
      width: '1000px',
      height: '1000px',
      
      overflow: 'hidden',
      opacity: isDropdownOpen ? 1 : 0,
      transition: 'opacity 0.5s ease, width 0.5s ease, height 0.5s ease, overflow 0.5s ease, margin-left 0.5s ease',
     }}
  >
     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', gap: '80px' }}>
    {/* Section 1 */}
    <div>
      <h3 className=" text-black text-base font-bold " >OUR CULTURE</h3>
      <ul style={{display:'grid',gridTemplateColumns:'repeat(1,5fr)',gap:"-50px" }} >
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Why Work Here</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">What Distinguishes Our Firm</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Our Philosophy</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Charitable Giving</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Artists-In-Residents Program</a></li>
      </ul>
    </div>

    {/* Section 2 */}
    <div>
      <h3 className="text-black text-base font-bold">SUMMER PROGRAM</h3>
      <ul style={{display:'grid',gridTemplateColumns:'repeat(1,4fr)',gap:"-50px" }}>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Summer Program in a Nutshell</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Summer Associate Testimonials</a></li>
      </ul>
    </div>

    {/* Section 3 */}
    <div>
      <h3 className="text-black text-base font-bold">APPLICATION PROCESS</h3>
      <ul style={{display:'grid',gridTemplateColumns:'repeat(1,4fr)',gap:"-50px" }}>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Recruiting Events</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">FAQ</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">Recruiting Contacts</a></li>
      </ul>
    </div>

    {/* Section 4 */}
    <div>
      <h3 className="text-black text-base font-bold mb-2">CAREERS</h3>
      <ul style={{display:'grid',gridTemplateColumns:'repeat(1,4fr)',gap:"-50px" }}>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">US Compensation & Benefits</a></li>
        <li><a href="#" className="text-xs block px-4 py-2 text-blue-400 hover:bg-white hover:underline">International Career Oppurtunities</a></li>
      </ul>
    </div>
    </div>

  </div>
</li>
<li className="relative">
  <a
    href="#"
     className={`transition-opacity duration-300 ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
  >
    Locations
  </a>
  
  <div
  
    className={`dropdown-content hidden absolute bg-white shadow-md mt-2 py-2 ${isDropdownOpen ? 'grid' : 'hidden'}`}
    style={{
      left: -1450, // Adjust the positioning as needed
      
      minWidth: '2000px', // Adjust the width as needed
      height: '600px',
   
      opacity: isDropdownOpen ? 1 : 0,
      transitionProperty: 'opacity, width',
      transitionDuration: '1.0s',
      transitionTimingFunction: 'ease-in-out',
    }}
  >
    <h1 className='text-lg font-bold ' style={{}}>Locations:</h1>
    <div style={{ marginTop: 4, display: 'grid', gridTemplateColumns: 'repeat(3, 12fr)', gap: '20px' }}>
    {/* List of locations */}
    {[
      'Abu Dhabi', 'Houston', 'San Francisco', 'Atlanta', 'London', 'Seattle',
      'Austin', 'Los Angeles', 'Beijing', 'Mannheim', 'Silicon Valley', 'Berlin',
      'Miami', 'Stuttgart', 'Boston', 'Munich', 'Sydney', 'Brussels',
      'Neuilly-La Defense', 'Tokyo', 'Chicago', 'New York', 'Washington, D.C.',
      'Dallas', 'Paris', 'Wilmington', 'Doha', 'Perth', 'Zurich',
      'Hamburg', 'Riyadh', 'Hong Kong', 'Salt Lake City'
    ].map((location, index) => (
      <a
        key={index}
        href="#"
        className="text-xs text-blue-400 hover:bg-white hover:underline px-4 py-2"
      >
        {location}
      </a>
    ))}
    </div>
  </div>
</li>

          <li className="search-container relative" onMouseLeave={() => setIsSearchOpen(false)}>
          <button
    type="button"
    className="search-icon absolute"
    onMouseEnter={() => {
      setIsSearchOpen(true);
      setIsDropdownOpen(false); // Close the Attorneys dropdown
    }}
  >
              <span className="sr-only">Search components</span>
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white hover:fill-gray-900"
              >
                <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h-1.5a8.25 8.25 0 0 0-8.25-8.25v-1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v-1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
              </svg>
            </button>

            <input
              className={`appearance-none border border-transparent rounded w-64 py-2 px-4 leading-tight focus:outline-none focus:shadow-outline ${isSearchOpen ? 'block' : 'hidden'}`}
              type="search"
              placeholder="Search"
              style={{ marginLeft: '-250px', transition: 'opacity 0.5s ease' }}
            />
          </li>

          <li className="relative">
  <button
    style={{ marginLeft: '50px',
  marginTop: '-20px',}}
  
  >
    ENG
  </button>
  {isDropdownOpen && (
    <div className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-2">
      {/* List of items for ENG */}
      {/* Add content as needed */}
    </div>
  )}
</li>


        </ul>
        
      </div>
     {/* Hero Section*/}
  
           
    
    </div>
    <Slider />
    <ButtonSlider />
    </div>
    
    
   

  );
}

export default App;
