import Collapsible from 'react-collapsible';
import ProviderItem, { Provider } from './ProviderItem';
import { Dispatch, SetStateAction } from 'react';

const ProviderList = ({provider, setOnApiClick, setDetail, setSideBarOpen, setCurrentProvider}:{provider: string, setOnApiClick: Dispatch<SetStateAction<boolean>>, setDetail: Dispatch<SetStateAction<Provider[]| null>>,setSideBarOpen: Dispatch<SetStateAction<boolean>>
    , setCurrentProvider: Dispatch<SetStateAction<string>>
}) => {
    return (
        <Collapsible trigger={provider}>
            <ProviderItem provider={provider} setOnApiClick={setOnApiClick} setDetail={setDetail} setSideBarOpen={setSideBarOpen} setCurrentProvider={setCurrentProvider}></ProviderItem>
        </Collapsible>
      );
}

export default ProviderList