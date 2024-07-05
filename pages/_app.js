import React, { useEffect, useState } from 'react';
import { LayoutV2 } from '../components';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutV2>
      <Component {...pageProps} />
    </LayoutV2>
  );
}

export default MyApp;
