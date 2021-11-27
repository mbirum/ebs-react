import './css/ProductImage.css';
import './css/ProductImage-700.css';
import React, { useEffect, useState } from 'react';


const ProductImage = props => {
    const maxAdditionalImages = 5;
    const [additionalImages, setAdditionalImages] = useState([]);
    const [focusedImageRef, setFocusedImageRef] = useState('');

    function onAdditionalImageClick(e) {
        var focusedAdditionalImages = document.getElementsByClassName('additional-image-focused');
        for (var i = 0; i < focusedAdditionalImages.length; i++) {
            focusedAdditionalImages[i].classList.remove('additional-image-focused');
        }
        e.target.classList.add('additional-image-focused');
        var ref = e.target.getAttribute('src');
        setFocusedImageRef(ref);
    }

    useEffect(() => {
        let newAdditionalImages = [];
        if (props.additionalImages) {
            let additionalImagesRefs = props.additionalImages.split(',');
            if (props.image) {
                additionalImagesRefs.unshift(props.image);
            }
            for (var i = 0; i < additionalImagesRefs.length; i++) {
                if (newAdditionalImages.length < maxAdditionalImages) {
                    let focusedClassName = (i === 0) ? 'additional-image-focused' : '';
                    newAdditionalImages.push(
                        <img 
                            key={i}
                            src={additionalImagesRefs[i]}
                            className={"product-additional-image " + focusedClassName}
                            onClick={onAdditionalImageClick}
                            alt={props.alt + "additional image"}
                        />
                    );
                }
            }
            setAdditionalImages(newAdditionalImages);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.additionalImages]);

    useEffect(() => {
        setFocusedImageRef(props.image);
    }, [props.image]);

    return (
        <>
            <table className="product-image-table">
                <tbody>
                    <tr className="product-main-image">
                        <td>
                            <img alt={props.alt} className="product-page-image" src={focusedImageRef} />
                        </td>
                    </tr>
                    <tr className="product-additional-images">
                        <td>
                            {additionalImages}
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
        </>
    );
}

export default ProductImage;