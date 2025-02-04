import React, { useState } from 'react';

const SubMenuKategori = ({ isVisible, onLeave  }) => {

//   const leavingSubmenu = useRef(null);
  return (
    <div className={`bg-gray-950/40 absolute z-10 w-full h-full overflow-auto pt-1 ${isVisible ? 'block' : 'hidden'}`} > {/* h-full make  scrollable */}
      <div onMouseLeave={onLeave} className="bg-white mx-auto p-5 border-gray-400 w-4/5 h-100 relative animate-slideDown rounded-3xl">
        <h1>Ini dalaha katagoi</h1>
      </div>
    </div>
  );
};

export default SubMenuKategori;