import { useEffect } from "react";

const ScrollListener = (props) => {
  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener('scroll', () => {
      if (window.location.pathname === props.pathName) {
        if (window.scrollY >= props.yThreshold) {  
          for (var i = 0; i < props.elements.length; i++) {
            document.getElementById(props.elements[i].id).classList.add(props.elements[i].className);
          }
        }
        else if (window.scrollY <= 1) {
          for (i = 0; i < props.elements.length; i++) {
            document.getElementById(props.elements[i].id).classList.remove(props.elements[i].className);
          }
        }
      }
    }, { signal: controller.signal });

    return () => controller.abort();
  }, [props.pathName, props.yThreshold, props.elements]);

  return (
    <></>
  );
};

export default ScrollListener;