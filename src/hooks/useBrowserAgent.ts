import { useEffect, useState } from 'react';

interface browserAgent {
  isSafari: boolean;
}

const useBrowserAgent = (): browserAgent => {
  const [isSafari, setSafari] = useState<boolean>(false);

  useEffect(() => {
    const isSafari = navigator.vendor ==  "Apple Computer, Inc."
    setSafari(isSafari);
  }, []);

  return { isSafari };
}

export default useBrowserAgent;
