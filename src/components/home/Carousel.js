import React, { useState, useEffect } from 'react';
import './css/Carousel.css';

function flushCSS() {
    let element = document.getElementById('imageSet');
    if (element) {
        let offsetHeight = document.getElementById('imageSet').offsetHeight;
    }
}

const Carousel = props => {
    
    var imagesPerWindow = 3;
    var moveIncrement = window.innerWidth / imagesPerWindow;
    var waitTime = 4000;
    var transitionTime = '0.75';
    var TRANSITION_OFF = `left 0s`;
    var TRANSITION_ON = `left ${transitionTime}s`;
    var extraImageHeight = 35;

    var imageUrls = [
        'img1-blue.jpg',
        'img2-black.jpg',
        'img3-trippy.jpg',
        'img4-lavender.jpg',
        'img5-pattern.jpg',
        'img6-nft.jpg'
    ];

    var imageElements = [];
    var imageStyle = {
        width:window.innerWidth / imagesPerWindow, 
        height:'50rem', 
        objectFit: 'cover', 
        objectPosition: '50% 50%',
        padding: '0 7px 9px 7px'
    };
    for (var i = 0; i < imageUrls.length; i++) {
        imageElements.push(<img src={imageUrls[i]} key={i} style={imageStyle}/>);
    };

    const [imageSet, setImageSet] = useState(imageElements);
    const [leftCoordinate, setLeftCoordinate] = useState(0);
    const [transitionValue, setTransitionValue] = useState(TRANSITION_ON);
  
    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setLeftCoordinate(leftCoordinate => leftCoordinate - moveIncrement);

            setTimeout(() => {
                imageSet.push(imageSet[0]);
                imageSet.splice(0, 1);

                setTransitionValue(TRANSITION_OFF);
                flushCSS();

                setLeftCoordinate(0);
                flushCSS();

                setTransitionValue(TRANSITION_ON);
            }, 1000);
        }, waitTime);

        return () => clearInterval(interval);

    }, [imageSet, leftCoordinate, transitionValue]);

    return (
        <div>
            <div id="carousel" style={{marginBottom: '2%', minHeight: '50rem'}}>
                <div id="imageSet" style={{left: leftCoordinate, transition: transitionValue}}>
                    {imageSet}
                </div>
            </div>
        </div>
        
    );
  };

export default Carousel;

