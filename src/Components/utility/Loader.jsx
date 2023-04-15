//import React, { useEffect, useState } from 'react'

export default function Loader(props) {
    // const [loader, setLoader] = useState(props.loader);
    // useEffect(() => {
    //     setLoader(props.loader)
    // }, [props.loader])
    return (
        <>
            {
                props.loader ? <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> : <></>
            }
        </>

    )
}
