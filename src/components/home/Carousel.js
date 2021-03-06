import './css/Carousel.css';
import './css/Carousel-700.css';
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../utils/APIWrapper';


const Carousel = props => {
    var waitTime = 4000;
    var transitionTime = '0.75';
    var TRANSITION_OFF = `left 0s`;
    var TRANSITION_ON = `left ${transitionTime}s`;
    var maxImages = 9;
    var moveIncrement = window.innerWidth / props.imagesPerWindow;

    const [imageSet, setImageSet] = useState([]);
    const [leftCoordinate, setLeftCoordinate] = useState(0);
    const [transitionValue, setTransitionValue] = useState(TRANSITION_ON);
    const [offsetHeight, setOffsetHeight] = useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function resizeCarousel() {
        moveIncrement = window.innerWidth / props.imagesPerWindow;
    }    

    function flushCSS() {
        let element = document.getElementById('imageSet');
        if (element) {
            let offsetHeight = document.getElementById('imageSet').offsetHeight;
            setOffsetHeight(offsetHeight);
        }
    }

    function randomizeSet(imageSet) {
        var randomSet = [];
        for (var i = 0; i < maxImages; i++) {
            var randomIndex = getRandomInt(imageSet.length);
            randomSet.push(imageSet[randomIndex]);
            imageSet.splice(randomIndex, 1);
        }
        return randomSet;
    }



    function startCarousel(sidelineSet, activeSet) {
        var interval = setInterval(() => {
            // Slide carousel to the left smoothly
            setLeftCoordinate(leftCoordinate => leftCoordinate - moveIncrement);

            // In 1 second's time...
            setTimeout(() => {

                // take first photo and move it to the end
                sidelineSet.push(activeSet.shift());
                activeSet.push(sidelineSet.shift());
                setImageSet(activeSet);

                // immediately move the carousel leftCoordinate back to 0
                setTransitionValue(TRANSITION_OFF);
                flushCSS();

                setLeftCoordinate(0);
                flushCSS();

                setTransitionValue(TRANSITION_ON);

            }, 1000);
        }, waitTime);
        return interval;
    }

    async function fetchProductImages() {
        var imageElements = [];
        var imageStyle = {
            width:`calc(100vw / ${props.imagesPerWindow})`, 
            height:'50rem', 
            objectFit: 'cover', 
            objectPosition: '50% 50%',
            padding: `0 ${props.xPadding}px 9px ${props.xPadding}px`
        };
        let items = await getAllProducts();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.image !== 'undefined' && item.image !== "") {
                imageElements.push(<img key={i} alt={item.name} src={item.image} style={imageStyle}/>);
            }
        }

        var sidelineSet = randomizeSet(imageElements);
        var activeSet = sidelineSet.splice(0, (props.imagesPerWindow + 1));
        setImageSet(activeSet);

        var carouselInterval = startCarousel(sidelineSet, activeSet);

        window.addEventListener("resize", resizeCarousel);

        return carouselInterval;
    }
  
    useEffect(() => {
        fetchProductImages().then((interval) => {
            return () => clearInterval(interval);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <span hidden>{offsetHeight}</span>
            <div id="carousel" className={props.carouselClass} style={{marginBottom: '2%', minHeight: '50rem'}}>
                <div id="imageSet" style={{left: leftCoordinate, transition: transitionValue}}>
                    {imageSet}
                </div>
            </div>
        </div>
        
    );
  };

export default Carousel;

