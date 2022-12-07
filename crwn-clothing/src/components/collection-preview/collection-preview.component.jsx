import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, Title, Preview } from './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        <Preview>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </Preview>
    </CollectionPreviewContainer>
);

export default CollectionPreview;