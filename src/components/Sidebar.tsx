import styled from 'styled-components';
import ProviderList from './ProviderList';

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


const Sidebar = ({isopen, providers} :{ isopen: boolean, providers:Provider}) => {

    const listItems = providers.data.map(item =>
        <li key={item}>
          <ProviderList provider={item}></ProviderList>
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