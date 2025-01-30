import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*  
  Was having some problems where Links from react-router-dom were sending
  users to the bottom of pages after they clicked buttons. This just auto
  scrolls the user to the top of the page when they click a button to send
  them to another page.
*/

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;