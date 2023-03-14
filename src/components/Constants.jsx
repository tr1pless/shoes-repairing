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
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  whiteSpace: "pre-wrap",
};

export const contactsStyle = {
  //   backgroundImage: `url("/rez/images/wpMain.jpg")`,
  backgroundImage: `url("./../assets/contactsBg.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  overflow: "hidden",
  margin: "0",
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

export const phoneImage = {
  backgroundImage: `url("./../assets/phone.png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  justifyContent: "center",
  alignItems: "center",
  width: "28px",
  height: "28px",
  display: "block",
  marginRight: "15px",
};

export const whatsappImage = {
  backgroundImage: `url("./../assets/whatsapp.png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  justifyContent: "center",
  alignItems: "center",
  width: "28px",
  height: "28px",
  display: "block",
  marginRight: "15px",
};

export const mailImage = {
  backgroundImage: `url("./../assets/mail.png")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  justifyContent: "center",
  alignItems: "center",
  width: "28px",
  height: "28px",
  display: "block",
  marginRight: "15px",
};

export const serviceContacts = [
  {
    email: "rivasiela4@gmail.com",
    phone: "+37129730629",
  },
];

export const mapArrow = (
  <svg
    style={{ marginLeft: "-3px" }}
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
  </svg>
);

export const mapClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  </svg>
);

export const latvian = (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
    <rect fill="#9E3039" width="1200" height="25"></rect>
    <rect fill="#fff" y="8" width="1200" height="8"></rect>
  </svg>
);

export const russian = (
  <svg
    style={{ marginTop: "-3px" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 9 6"
    width="30"
    height="30"
  >
    <rect fill="#fff" width="9" height="3" />
    <rect fill="#d52b1e" y="4" width="9" height="3" />
    <rect fill="#0039a6" y="2" width="9" height="3" />
  </svg>
);

export const arrow = (
  <svg
    style={{ transform: "matrix(-1, 0, 0, 1, 25, 0)" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <g>
      <path
        d="M9.865 82.005c8.634-1.047 17.137-3.036 25.005-6.398 7.857-3.348 15.062-8.085 20.822-14.208 5.801-6.08 10.233-13.346 13.408-21.139 3.188-7.801 5.173-16.106 6.388-24.536l.006-.039a4.504 4.504 0 1 1 8.87 1.533c-1.802 8.928-4.435 17.771-8.395 26.093-3.941 8.309-9.29 16.068-16.047 22.387-6.714 6.372-14.852 11.06-23.383 14.138-8.552 3.096-17.498 4.642-26.404 5.219a1.531 1.531 0 0 1-.288-3.047l.018-.003z"
        fill="#0039a6"
      />
    </g>
    <g>
      <path
        d="M84.505 14.243l7.776 14.97a1.635 1.635 0 0 1-2.561 1.952L77.347 19.698a4.568 4.568 0 1 1 7.158-5.455z"
        fill="#0039a6"
      />
    </g>
    <g>
      <path
        d="M81.742 19.823L66.183 26.34a1.635 1.635 0 0 1-1.735-2.713L76.895 12.24a4.567 4.567 0 1 1 4.847 7.583z"
        fill="#0039a6"
      />
    </g>
  </svg>
);
