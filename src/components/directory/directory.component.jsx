import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenu } from './directory.styles.jsx';

const Directory = ({ categories }) => {   
    return (
        <DirectoryMenu>
            {
            categories.map((category) => (
                <MenuItem key={category.id} category={category} />
            ))
            }
        </DirectoryMenu>
    )
}

export default Directory;