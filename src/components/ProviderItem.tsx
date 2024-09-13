import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {getProviderApis} from '../apiService';
export interface Api {
    contact: Contact
    description: string
    title: string
    version: string
    "x-apisguru-categories": string[]
    "x-logo": XLogo
    "x-origin": XOrigin[]
    "x-providerName": string
  }
  
  export interface Contact {
    email: string
    name: string
    url: string
  }
  
  export interface XLogo {
    backgroundColor: string
    url: string
  }
  
  export interface XOrigin {
    format: string
    url: string
    version: string
  }
  

const ProviderItem = ({provider, setOnApiClick, setDetail, setSideBarOpen}:{provider: string, setOnApiClick: Dispatch<SetStateAction<boolean>>, setDetail: Dispatch<SetStateAction<Api | null>>, setSideBarOpen: Dispatch<SetStateAction<boolean>> }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
   // const [detail, setDetail] = useState<Api | null >(null);   
    //let curDetail : Api;
      useEffect(() => {
        let ignore = false;     
        getProviderApis(provider).then(result => {
          if (!ignore) {
            setDetail(result.apis[provider].info);
            setUrl(result.apis[provider].info['x-logo'].url);
            setTitle(result.apis[provider].info.title);
          }
        });
        ;
        return () => {
          ignore = true;
        }
      }, [provider]);
      function handleClick(){
        //
        setOnApiClick(true);
        setSideBarOpen(false);
      };
  return (
    <>
        <img src={url} width="30" height="30"></img>
        <div style={{cursor: "pointer"}} onClick={handleClick}>{title}</div>
    </>
  );
};

export default ProviderItem;