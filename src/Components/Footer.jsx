import React from "react";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <div className="border-2 bg-black font-[montserrat] mt-10 py-3 text-white">
      <p className="text-center">
        {year} &copy; all rights reserved. Developed by Ashish G.M
      </p>
    </div>
  );
}

export default Footer;
