import React from 'react';
import { useNavigate } from 'react-router';

import { MenuItemContainer, BackgroundImage, Content, Title, Subtitle } from './menu-item.styles.jsx';

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}

const MenuItem = ({ title, imageUrl, route }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <MenuItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
                <Content>
                    <Title>{title.toUpperCase()}</Title>
                    <Subtitle>SHOP NOW</Subtitle>
                </Content>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);