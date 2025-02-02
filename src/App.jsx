import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBell, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import bikinankuLogo from './assets/bikinanku-logo.png';
import './App.css';
import SubMenuKategori from './components/SubeMenuKategori';

function App() {
  const [isSubmenuKategoriVisible, setSubmenuKategoriVisible] = useState(false);
  const menuKategori = useRef(null);

  const handleMouseOverProduk = () => {
    setSubmenuKategoriVisible(true);
  };

  const handleMouseLeave = (e) => {
    if (menuKategori.current) 
    {  // Check if menuKategori has been assigned a DOM element
      const rect = menuKategori.current.getBoundingClientRect();
      
      if (e.clientX <= rect.left) 
      {
        setSubmenuKategoriVisible(false);
      }
      else if (e.clientX >= rect.right)
      {
        setSubmenuKategoriVisible(false);
      }
      else if (e.clientY <= rect.top) 
      {
        console.log("top");
        setSubmenuKategoriVisible(false);
      }
      else   
      {
        console.log("botom");
        setSubmenuKategoriVisible(true);
      }
    }
  };
  
  
  

  return (
    <>
      <div className='bg-gray-900 h-20 flex justify-between items-center p-2.5'>
        <img src={bikinankuLogo} className='h-15' />
        <div className="flex items-center gap-5">
          <div
            ref={menuKategori}
            className='text-white cursor-pointer'
            onMouseEnter={handleMouseOverProduk}
            // onMouseOut={handleMouseOutProduk}
            onMouseLeave={handleMouseLeave}
          >
            Kategori
          </div>

          <div className="relative">
            <input
              type='text'
              placeholder='Cari..'
              className='relative bg-gray-500 p-2 rounded-2xl whitespace-break-spaces text-white w-200 pl-10'
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className='flex gap-5 align-middle'>
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="text-white text-2xl cursor-pointer" />
          <FontAwesomeIcon icon={faCartShopping} className="text-white text-2xl cursor-pointer" />
          <span className="text-white text-xl">|</span>
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl cursor-pointer" />
        </div>
      </div>

      <SubMenuKategori isVisible={isSubmenuKategoriVisible} onLeave={handleMouseLeave} />
      <div className="content">
        Ini adalah content
      </div>
    </>
  );
}

export default App;
