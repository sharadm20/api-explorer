import {useEffect, useState} from 'react'
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

const ProviderItem = ({provider}:{provider: string}) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState<Api | null >(null);   
      useEffect(() => {
        let ignore = false;      
        getProviderApis(provider).then(result => {
          if (!ignore) {
            setDetail(result.apis[provider]);
            setUrl(result.apis[provider].info['x-logo'].url);
            setTitle(result.apis[provider].info['title']);
          }
        });
        return () => {
          ignore = true;
        }
      }, [provider]);
  return (
    <>
        <img src={url} width="30" height="30"></img>
        <p>{title}</p>
    </>
  );
};

export default ProviderItem;