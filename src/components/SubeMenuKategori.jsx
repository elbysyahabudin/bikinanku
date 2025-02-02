import React, { useState } from 'react';

const SubMenuKategori = ({ isVisible, onLeave  }) => {

//   const leavingSubmenu = useRef(null);
  return (
    <div className={`absolute z-10 w-full h-full overflow-auto ${isVisible ? 'block' : 'hidden'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
      <div onMouseLeave={onLeave} className="bg-white mx-auto p-5 border border-gray-400 w-4/5 h-52 relative animate-slideDown">
        {/* Your submenu content here */}
      </div>
    </div>
  );
};

export default SubMenuKategori;