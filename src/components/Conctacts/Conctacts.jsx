import React, { useState } from "react";
import styles from "./contacts.module.css";

export const Contacts = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.contacts__mapWrp}>
          <div
            style={{ marginLeft: `${active ? -10 : -790}px` }}
            className={styles.contacts__map}
          >
            <iframe
              className={styles.contacts__apiMap}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.181558253436!2d24.243133144970518!3d56.97684133542055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecc261285b3d9%3A0xb9bca28c99238cd6!2zUsSrdmFzIGllbGEgNCwgVmlkemVtZXMgcHJpZWvFoXBpbHPEk3RhLCBSxKtnYSwgTFYtMTA2NA!5e0!3m2!1sru!2slv!4v1678373818414!5m2!1sru!2slv"
              }
              width={"750"}
              height={"350"}
              style={{ border: "0" }}
              allowFullScreen={""}
              loading={"lazy"}
              referrerPolicy={"no-referrer-when-downgrade"}
            ></iframe>
          </div>
          <button
            className={styles.contacts__mapButton}
            onClick={() => {
              setActive(!active), console.log(active);
            }}
          ></button>
        </div>
      </div>
    </>
  );
};
