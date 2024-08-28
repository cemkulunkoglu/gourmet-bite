import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useActiveLink() {
  const location = useLocation();

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
      const link = item.querySelector("a");
      if (link && link.getAttribute("href") === location.pathname) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, [location]);
}

export default useActiveLink;
