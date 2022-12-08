import React from 'react';

import { CollectionItemContainer, Image, Footer, Name, Price } from './collection-item.styles.jsx';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <CollectionItemContainer>
        <Image 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
    </CollectionItemContainer>
);

export default CollectionItem;

