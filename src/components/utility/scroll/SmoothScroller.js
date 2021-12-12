
export default class SmoothScroller {
    
    scrollBasicUnit(unit, direction, index, max, scrollToValue, timeout) {
        let currentScrollTop = document.documentElement.scrollTop;
        if ((direction === 'forward' && currentScrollTop >= scrollToValue) ||
            (direction === 'backward' && currentScrollTop <= scrollToValue) ||
            (index >= max)) {
                return;
        }
        else {
            let nextScrollValue = (direction === 'forward') ? currentScrollTop + unit : currentScrollTop - unit;
            window.scrollTo(0, nextScrollValue);
            setTimeout(() => {
                this.scrollBasicUnit(unit, direction, index + 1, max, scrollToValue, timeout);
            }, timeout);
        }
    }

    scrollbasic(value) {
        let currentScrollTop = document.documentElement.scrollTop;
        let difference = value - currentScrollTop;
        let direction = 'forward';
        if (difference < 0) {
            direction = 'backward';
        }
        let range = Math.abs(difference);
        let index = 0;
        let timeout = 1;
        let unit = 25;
        setTimeout(() => {
            this.scrollBasicUnit(unit, direction, index, range, value, timeout);
        }, timeout);
    }
};