import React, { useEffect  } from 'react';

export const Adsense = () => {



    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);



    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-3179825736250948"
                data-ad-slot='f08c47fec0942fa0'
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
};

