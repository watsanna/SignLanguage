import React, { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.innerHTML = "&copy; 2023 SL App. All rights reserved.";

    // Wait for the DOM to be fully loaded before appending the footer
    document.addEventListener("DOMContentLoaded", () => {
      const root = document.getElementById("root");

      // Check if the root element exists before appending the footer
      if (root) {
        root.appendChild(footer);

        // Cleanup function to remove the footer when the component unmounts
        return () => {
          root.removeChild(footer);
        };
      }
    });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
