import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history, children }) {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top on route changes
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
