import React, { useEffect  } from 'react';

import AdSense from 'react-adsense';

export const AdComp = () => {
    return (    
<AdSense.Google
  client="ca-pub-3179825736250948"
  slot="5242655036"
  style={{ display: 'block' }}
  format='auto'
  responsive='true'
  layoutKey='-gw-1+2a-9x+5c'
/>
)
};

