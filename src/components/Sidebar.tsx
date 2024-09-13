import styled from 'styled-components';
import ProviderList from './ProviderList';
import { Dispatch, SetStateAction } from 'react';
import { Api } from './ProviderItem';

const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #3f5e7a;
  color: white;
  overflow-x: hidden;
  transition: 0.5s;
`;
interface Provider {
    data : string[],
}


const Sidebar = ({isopen, providers, setOnApiClick, setDetail, setSideBarOpen} :{ isopen: boolean, providers:Provider, setOnApiClick:Dispatch<SetStateAction<boolean>>, setDetail: Dispatch<SetStateAction<Api | null>>, setSideBarOpen: Dispatch<SetStateAction<boolean>>}) => {

    const listItems = providers.data.map(item =>
        <li key={item}>
          <ProviderList provider={item} setOnApiClick={setOnApiClick} setDetail={setDetail} setSideBarOpen={setSideBarOpen}></ProviderList>
        </li>
      );

  return (
    <SidebarWrapper isOpen={isopen}> 
    
    <ul>
        {listItems}
    </ul> 
    </SidebarWrapper>
  )
}

export default Sidebar