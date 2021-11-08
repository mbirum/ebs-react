import React, { useState, useEffect } from 'react';
import './css/Carousel.css';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';


var maxImages = 6;
var imagesPerWindow = 3;
var moveIncrement = window.innerWidth / imagesPerWindow;

function flushCSS() {
    let element = document.getElementById('imageSet');
    if (element) {
        let offsetHeight = document.getElementById('imageSet').offsetHeight;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function resizeCarousel() {
    moveIncrement = window.innerWidth / imagesPerWindow;
}

const Carousel = props => {
    var waitTime = 4000;
    var transitionTime = '0.75';
    var TRANSITION_OFF = `left 0s`;
    var TRANSITION_ON = `left ${transitionTime}s`;

    const [sidelineSet, setSidelineSet] = useState([]);
    const [imageSet, setImageSet] = useState([]);
    const [leftCoordinate, setLeftCoordinate] = useState(0);
    const [transitionValue, setTransitionValue] = useState(TRANSITION_ON);

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
                // setSidelineSet(sidelineSet);
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
    }

    async function fetchProductImages() {
        var imageElements = [];
        var imageStyle = {
            width:`calc(100vw / ${imagesPerWindow})`, 
            height:'50rem', 
            objectFit: 'cover', 
            objectPosition: '50% 50%',
            padding: '0 7px 9px 7px'
        };
        const apiData = await API.graphql({ query: listProducts, authMode: 'API_KEY' });
        var items = apiData.data.listProducts.items;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.image != 'undefined' && item.image != "") {
                imageElements.push(<img src={item.image} key={i} style={imageStyle}/>);
            }
        }

        var sidelineSet = randomizeSet(imageElements);
        setSidelineSet(sidelineSet);
        var activeSet = sidelineSet.splice(0, (imagesPerWindow + 1));
        console.log(activeSet.length);
        setImageSet(activeSet);

        startCarousel(sidelineSet, activeSet);

        window.addEventListener("resize", resizeCarousel);
    }
  
    useEffect(() => {
        fetchProductImages();
    }, []);

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

