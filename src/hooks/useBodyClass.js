import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useBodyClass(defaultClass, subPageClass) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      document.body.classList.add(subPageClass);
    } else {
      document.body.classList.remove(subPageClass);
    }
  }, [location, subPageClass]);

  useEffect(() => {
    document.body.classList.add(defaultClass);
    
    return () => {
      document.body.classList.remove(defaultClass);
      document.body.classList.remove(subPageClass);
    };
  }, [defaultClass, subPageClass]);
}

export default useBodyClass;
