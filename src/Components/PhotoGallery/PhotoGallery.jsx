import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PhotoGallery() {
    const [show, setModalShow] = React.useState(false);
    let [imageArr, setImageArr] = useState([])
    const [modalImage, setModalImage] = useState("")
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

    let onHide = () => {
        console.log("close");
        setModalShow(false);
    }
    let viewImage = (e) => {
        setModalShow(true);
        setModalImage(e)
    }
    return (
        <>
            <div>PhotoGallery</div>
            <Container fluid>
                <Row >
                {imageArr.map((img, i) =>{
                   return <Col lg={3} md={4} xl={2} ><img className='img-fluid'  key={i}  onClick={() => { viewImage(img) }} src={img} alt="" /></Col>
                })}
                    
                </Row>


            </Container>
            {/* **************photo viewer modal ******************/}
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={modalImage}
                        style={{
                            width: "100%", display: "block" }}
                                />
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={(e)=>{onHide()}}>Close</Button>
                </Modal.Footer> */}
            </Modal>
            {/* **************photo viewer modal ******************/}
        </>

    )
}
