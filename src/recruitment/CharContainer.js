import React, { useEffect, useState } from 'react';

import CharGrid from './CharGrid.js';
import CharHeader from './CharHeader.js';


//TODO - Add logic to track selected support char here 
function CharContainer() {
    const [selectedSupportChar, setSelectedSupportChar] = useState(
        (localStorage.getItem('selectedSupportChar') ?? 'linhardt')
      );

      useEffect(() => {
        localStorage.setItem('selectedSupportChar', selectedSupportChar)
        localStorage.setItem('selectedSupportCharIcon', `/character_images/feth-` + selectedSupportChar + `-portrait.jpg`  )
      }, [selectedSupportChar])

  return (
    <div className="char_header">
        <CharHeader />
        <CharGrid />
    </div>
    );
}

export default CharContainer;
