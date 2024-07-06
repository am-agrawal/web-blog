import React, { useEffect, useState } from 'react';
import { LayoutV2 } from '../components';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../lib/fontawesome';
import '../styles/globals.scss';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <LayoutV2>
      <Component {...pageProps} />
    </LayoutV2>
  );
}

export default MyApp;
