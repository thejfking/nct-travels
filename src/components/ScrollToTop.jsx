import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the window to stay at the top and avoid horizontal shifts
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}