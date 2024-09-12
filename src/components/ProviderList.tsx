import Collapsible from 'react-collapsible';
import ProviderItem from './ProviderItem';

const ProviderList = ({provider} :{provider: string}) => {
    return (
        <Collapsible trigger={provider}>
            <ProviderItem provider={provider}></ProviderItem>
        </Collapsible>
      );
}

export default ProviderList