import { useEffect } from "react";

var yThreshold = 300;

const ScrollListener = (props) => {
  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener('scroll', () => {

      if (window.scrollY >= yThreshold) {
        document.getElementById(props.elementId).classList.add(props.className);
        // document.getElementById('masthead').classList.add('sticky-header');
        // document.getElementById('root').classList.add('sticky-root');
        // document.getElementById('storeNavigation').classList.add('sticky-store-nav');
      }
      else if (window.scrollY <= 1) {
        document.getElementById(props.elementId).classList.remove(props.className);
        // document.getElementById('masthead').classList.remove('sticky-header');
        // document.getElementById('root').classList.remove('sticky-root');
        // document.getElementById('storeNavigation').classList.remove('sticky-store-nav');
      }
    }, { signal: controller.signal });

    return () => controller.abort();
  }, []);

  return (
    <></>
  );
};

export default ScrollListener;