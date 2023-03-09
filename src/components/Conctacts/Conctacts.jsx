import React, { useState } from "react";
import { contactsStyle, mailImage, phoneImage, whatsappImage } from "../Constants";
import styles from "./contacts.module.css";

export const Contacts = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
      style={contactsStyle}
      className={styles.contacts}>
        <div className={styles.contacts__mapWrp}>
          <div
            style={{ marginLeft: `${active ? 0 : -805}px` }}
            className={styles.contacts__map}
          >
            <iframe
              className={styles.contacts__apiMap}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.181558253436!2d24.243133144970518!3d56.97684133542055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecc261285b3d9%3A0xb9bca28c99238cd6!2zUsSrdmFzIGllbGEgNCwgVmlkemVtZXMgcHJpZWvFoXBpbHPEk3RhLCBSxKtnYSwgTFYtMTA2NA!5e0!3m2!1sru!2slv!4v1678373818414!5m2!1sru!2slv"
              }
              width={"800"}
              height={"400"}
              style={{ border: "0" }}
              allowFullScreen={""}
              loading={"lazy"}
              referrerPolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
          <button
          style={{display:`${active? "none": "block"}`}}
            className={styles.contacts__mapButtonOpen}
            onClick={() => {
              setActive(!active), console.log(active);
            }}
          ></button>
          <button
          style={{display:`${active? "block": "none"}`}}
            className={styles.contacts__mapButtonClose}
            onClick={() => {
              setActive(!active), console.log(active);
            }}
          ></button>
        </div>
        <div className={styles.contacts__list}>
          <ul>
            <li style={{marginBottom: "15px"}} className={styles.contacts__listItem}><a href="#" className={styles.contacts__listLink}><span style={mailImage}/>rivasiela4@gmail.com</a></li>
            <li style={{marginBottom: "15px"}} className={styles.contacts__listItem}><a href="#" className={styles.contacts__listLink}><span style={phoneImage}/>+37129730629</a></li>
            <li className={styles.contacts__listItem}><a href="#" className={styles.contacts__listLink}><span style={whatsappImage}/>+37129730629</a></li>
          </ul>
        </div>
        
      </div>
    </>
  );
};
