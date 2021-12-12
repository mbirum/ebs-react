
export default class SmoothScroller {
    
    scrollBasicUnit(unit, direction, index, max, scrollToValue, timeout) {
        let currentScrollTop = document.documentElement.scrollTop;
        if ((direction === 'forward' && currentScrollTop >= scrollToValue) ||
            (direction === 'backward' && currentScrollTop <= scrollToValue) ||
            (index >= max)) {
                return;
        }
        else {
            // let newUnit = this.getSpeedArray()[this.getSpeedArrayIndex(index, max)];
            let nextScrollValue = (direction === 'forward') ? currentScrollTop + unit : currentScrollTop - unit;
            window.scrollTo(0, nextScrollValue);
            setTimeout(() => {
                this.scrollBasicUnit(unit, direction, index + unit, max, scrollToValue, timeout);
            }, timeout);
        }
    }

    testParabola() {
        let speedArray = this.getSpeedArray();
        console.log(speedArray);
    }
    
    getParbolicValue(x, a = 1) {
        return Math.sqrt(4 * a * x);
    }

    getSpeedArray() {

        // maybe just check difference and if its far enough away do a bigger (but still static) scroll unit

        // return [25, 25, 25, 25, 25, 20, 16, 13, 11, 11, 9, 9, 8, 8, 5, 5, 5, 5, 5, 5, 1, 1, 1];
        let speedArray = [];
        let a = 10;
        for (let x = 2; x <= 35; x++) {
            let previous = this.getParbolicValue(x-1);
            let difference = this.getParbolicValue(x) - previous;
            let value = Math.floor(difference * 250) - 30;
            if (value < 1) {
                value = 1;
            }
            speedArray.push(value);
        }
        return speedArray;
    }

    getSpeedArrayIndex(index, range) {
        let bucketThreshold = range / this.getSpeedArray().length;
        let arrayIndex = Math.floor(index / bucketThreshold);
        return arrayIndex;
    }

    scrollbasic(value) {
        this.testParabola();
        let currentScrollTop = document.documentElement.scrollTop;
        let difference = value - currentScrollTop;
        let direction = 'forward';
        if (difference < 0) {
            direction = 'backward';
        }
        let range = Math.abs(difference);
        let index = 0;
        let timeout = 0.1;
        // let unit = this.getSpeedArray()[0];
        setTimeout(() => {
            this.scrollBasicUnit(25, direction, index, range, value, timeout);
        }, timeout);
    }
};