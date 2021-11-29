import './css/RelatedProducts.css';
import './css/RelatedProducts-700.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../../utils/APIWrapper';


const RelatedProducts = props => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [displayClass, setDisplayClass] = useState('force-hidden-display');

    async function fetchRelatedProducts(id, categories) {
        let products = await getProductsByCategory(categories);
        let newRelatedProducts = [];
        for (var i = 0; i < products.length; i++) {
            let product = products[i];
            if (id && product.id !== id) {
                newRelatedProducts.push(
                    <td key={i} className='related-product-column'>
                        <Link to={'/shop/'+product.slug}>
                            <img alt={product.name} src={product.image} className="ebs-image-shadow related-product-image" />
                        </Link>
                    </td>
                )
            }
        }
        setRelatedProducts(newRelatedProducts);
        if (newRelatedProducts.length > 0) {
            setDisplayClass('');
        }
    }

    useEffect(() => {
        if (props.categoryString) {
            fetchRelatedProducts(props.productId, props.categoryString.split(','));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.categoryString]);

    return (
        <div className={"related-products-wrapper " + displayClass}>
            <h2 className="related-products-header">Related Products</h2>
            <table className="related-product-table">
                <tbody>
                    <tr>
                        {relatedProducts}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RelatedProducts;