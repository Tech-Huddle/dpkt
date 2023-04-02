import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
export default function PhotoGallery() {
    let [imageArr, setImageArr] = useState([])
    useEffect(() => {
        let imgSrc = ["https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",
            "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg"];
        // let arr = []
        // for (let i = 0; i < imgSrc.length; i++) {
        //     arr.push({ src: imgSrc[i] })
        // }
        setImageArr(imgSrc)

    }, [])
    useEffect(() => {
        console.log(imageArr)
    })
    return (
        <>
            <div>PhotoGallery</div>
            <Container fluid>
                {/* <Row >
                {imageArr.map((img, i) =>{
                   return <Col lg={3} md={4} xl={2} ><img className='img-fluid' src={img} alt="" /></Col>
                })}
                    
                </Row> */}

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4, 1200: 6 }}
                >
                    <Masonry gutter='20px'>
                        {
                            imageArr.map((image, i) => {
                                return (<img
                                    key={i}
                                    src={image}
                                    style={{ width: "100%", display: "block" }}
                                />)


                            })
                        }
                    </Masonry>
                </ResponsiveMasonry>

            </Container>

        </>

    )
}
