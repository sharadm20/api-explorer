// src/App.tsx

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import {getProviders} from './apiService';
import ApiDetails from './components/ApiDetails';
import { Api } from './components/ProviderItem';
//import ProviderList from './components/ProviderList';
//import ApiList from './components/ApiList';
//import ApiDetails from './components/ApiDetails';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [onApiClick, setOnApiClick] = useState(false);
  const [providers, setProviders] = useState({
    data : []
  });
  const [detail, setDetail] = useState<Api | null >(null); 
   
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
       {
        onApiClick ? (<ApiDetails detail={detail} setOnApiClick={setOnApiClick}>

        </ApiDetails>)
        : (<button
        className="button"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        Explore APIs
      </button> )
      }
      

      <Sidebar isopen={isSidebarOpen} providers={providers} setOnApiClick={setOnApiClick} setDetail={setDetail} setSideBarOpen={setSidebarOpen}>
      </Sidebar>
     

    </div>
  );
};

export default App;
