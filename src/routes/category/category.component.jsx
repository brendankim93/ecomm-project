import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {isLoading ? (
                <Spinner />
              ) : (
                <div className='category-container'>
                  {products &&
                      products.map((product) => <ProductCard key={product.id} product={product} />)
                  }
                </div>
              )}
        </Fragment>
    )
}

export default Category;