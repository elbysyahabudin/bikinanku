import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBell, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import bikinankuLogo from './assets/bikinanku-logo.png';
import './App.css';
import SubMenuKategori from './components/SubeMenuKategori';

function App() {
  const [isSubmenuKategoriVisible, setSubmenuKategoriVisible] = useState(false);
  const [bgColor, setBgColor] = useState('');

  const handleMouseOverProduk = () => {
    setSubmenuKategoriVisible(true);
    setBgColor('bg-blue-600');
    console.log("Entering");
  };
  const handleMouseLeaveAll = (event) => {
    setSubmenuKategoriVisible(false);
    setBgColor('');
  }
  const handleMouseLeave = (event) => {

    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if(mouseY <= rect.top ){
      console.log("Leaving Top" );
      setSubmenuKategoriVisible(false);
      setBgColor('');
    }
    else if (mouseX <= rect.left){
      console.log("Leaving left" );
      setSubmenuKategoriVisible(false);
      setBgColor('');
    }
    else if( mouseX >= rect.right) {
      console.log("Leaving right" );
      setSubmenuKategoriVisible(false);
      setBgColor('');
    }
   
  };
  
  
  return (
    <>
      <div className='bg-gray-900 h-20 flex justify-between items-center'>
        <img src={bikinankuLogo} className='h-15' />
        <div className="flex items-center h-full justify-center gap-5"> {/* Kategori and search Wrapper */}

          <div onMouseLeave={handleMouseLeave} className='h-full w-20 flex justify-center items-center'>
            <div onMouseEnter={handleMouseOverProduk} onMouseLeave={handleMouseLeave} className={`text-white text-center ${bgColor} p-2 rounded-lg cursor-pointer`}>Kategori</div>  
          </div> {/* Kategori Wrapper */}

          <div className="relative">  {/* Search Wrapper */}
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

      <SubMenuKategori isVisible={isSubmenuKategoriVisible} onLeave={handleMouseLeaveAll} />
      <div className="content">
        Ini adalah content
      </div>
    </>
  );
}

export default App;
