import Collapsible from 'react-collapsible';
import ProviderItem, { Api } from './ProviderItem';
import { Dispatch, SetStateAction } from 'react';

const ProviderList = ({provider, setOnApiClick, setDetail, setSideBarOpen}:{provider: string, setOnApiClick: Dispatch<SetStateAction<boolean>>, setDetail: Dispatch<SetStateAction<Api | null>>,setSideBarOpen: Dispatch<SetStateAction<boolean>>}) => {
    return (
        <Collapsible trigger={provider}>
            <ProviderItem provider={provider} setOnApiClick={setOnApiClick} setDetail={setDetail} setSideBarOpen={setSideBarOpen}></ProviderItem>
        </Collapsible>
      );
}

export default ProviderList