import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import {getProviderApis} from '../apiService';
export interface Provider {
  [key:string] : Api,
}
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
  

const ProviderItem = ({provider, setOnApiClick, setDetail, setSideBarOpen, setCurrentProvider}:{provider: string, setOnApiClick: Dispatch<SetStateAction<boolean>>,setDetail: Dispatch<SetStateAction<Provider[] | null>>, 
  setSideBarOpen: Dispatch<SetStateAction<boolean>>, setCurrentProvider: Dispatch<SetStateAction<string>> }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
   // const [detail, setDetail] = useState<Api | null >(null);   
    //let curDetail : Api;
    let info :Api;
    let providers : Provider[]= [];
      useEffect(() => {
        let ignore = false;     
        getProviderApis(provider).then(result => {
          if (!ignore) {
            info = result.apis[provider].info;
            providers=[...providers,{provider:info}];
            setDetail(providers);  
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
        setCurrentProvider(provider);
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