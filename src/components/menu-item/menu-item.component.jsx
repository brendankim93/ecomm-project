import React from 'react';
import { useNavigate } from 'react-router';

import { MenuItemContainer, BackgroundImage, Body } from './menu-item.styles.jsx';

export const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}

const MenuItem = ({ category }) => {
    const navigate = useNavigate();

    const { title, imageUrl, route, size } = category;

    const onNavigateHandler = () => navigate(route);
    return (
        <MenuItemContainer size ={size} onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
                <Body>
                    <h2>{title.toUpperCase()}</h2>
                    <p>SHOP NOW</p>
                </Body>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);