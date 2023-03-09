import React from "react";

export const mainStyle = {
  //   backgroundImage: `url("/rez/images/wpMain.jpg")`,
  backgroundImage: `url("./../assets/oldMain.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const aboutStyle = {
  //   backgroundImage: `url("/rez/images/wpMain.jpg")`,
  backgroundImage: `url("./../assets/aboutBg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const carouselShoes = {
  // backgroundImage: `url("./../assets/carouselShoes.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "500px",
  width: "100%",
  minWidth: "800px",
};

export const carouselKeys = {
  // backgroundImage: `url("./../assets/carouselKeys.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "500px",
  width: "100%",
};

export const carouselSharping = {
  // backgroundImage: `url("./../assets/carouselSharping.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "500px",
  width: "100%",
};

export const pricesStyle = {
  backgroundImage: `url("./../assets/pricesBg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  whiteSpace: "pre-wrap",
};
export const leftCaret = (
  <svg
    style={{ height: "40px" }}
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z"
      fillRule="nonzero"
    />
  </svg>
);

export const rightCaret = (
  <svg
    style={{ height: "40px" }}
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
      fillRule="nonzero"
    />
  </svg>
);
