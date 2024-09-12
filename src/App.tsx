// src/App.tsx

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import {getProviders} from './apiService';
//import ProviderList from './components/ProviderList';
//import ApiList from './components/ApiList';
//import ApiDetails from './components/ApiDetails';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [providers, setProviders] = useState({
    data : []
  });
   
  useEffect(() => {
    let ignore = false;
    setProviders({data: []});
    getProviders().then(result => {
      if (!ignore) {
          setProviders(result);
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  return (
    <div className="wrapper">
      <button
        className="button"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        Toggle Providers
      </button>

      <Sidebar isopen={isSidebarOpen} providers={providers}>
      </Sidebar>

    </div>
  );
};

export default App;
