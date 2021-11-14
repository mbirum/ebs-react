import { useEffect } from "react";

var yThreshold = 500;

const ScrollListener = (props) => {
  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener('scroll', () => {

      if (window.scrollY >= yThreshold && window.location.pathname === '/') {
        document.getElementById(props.elementId).classList.add(props.className);
      }
      else if (window.scrollY <= 1) {
        document.getElementById(props.elementId).classList.remove(props.className);
      }
    }, { signal: controller.signal });

    return () => controller.abort();
  }, [props.className, props.elementId]);

  return (
    <></>
  );
};

export default ScrollListener;