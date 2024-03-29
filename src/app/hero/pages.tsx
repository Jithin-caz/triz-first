import { Container, Button, Row, Col, Collapse, Card } from "react-bootstrap/esm/index";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader/pages";


interface Subject {
  heading: string;
  content: string[];
}

export default function Hero() {
  const [resdata, setresdata] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        setresdata(response.data.data.subjects);
        console.log(response.data.data.subjects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null); 

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return resdata.length !== 0 ? (
    <div className="hero">
      <Container>
        <Row className="hero-top">
          <Col md={5} className="hero-left" data-aos="zoom-in-left" data-aos-duration="1300" data-aos-once="true">
            <img src="/triz.png" alt="search--v1" />
          </Col>
          <Col md={7} className="hero-right" data-aos="zoom-in-right" data-aos-duration="1300" data-aos-once="true">
            <h2><span> For every student,</span> <span>Every classroom.</span><span><u className="underline"> Real results.</u></span></h2>
            <p>We are a nonprofit with a <span> mission to provide free,world class education for anyone, anywhere</span> </p><br />
            <Button className="start-here">start here</Button>
          </Col>
          <Col sm={12} className="hero-bottom" data-aos="zoom-in-down" data-aos-duration="1300" data-aos-once="true">
          {resdata.map((item, index) => (
            <div className="drop-down-container" key={index}>
              <button
                onClick={() => handleToggle(index)}
                aria-controls={`collapse-${index}`}
                aria-expanded={openIndex === index}
              >
                <div> <span> <img width="20" height="20" src="https://img.freepik.com/free-vector/illustration-graduation-hat_53876-5920.jpg?t=st=1710346426~exp=1710350026~hmac=08c9316ed5b7ee6b29bf7d44a4c73a2daea0b06cc194abbdb68050edb14bfefe&w=740" alt="expand-arrow--v1" />
                </span> <span className="drop-down-head">{item.heading}</span></div>

                <img className="down-logo" width="20" height="20" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1" />
              </button>
              <Collapse in={openIndex === index}>
                <div id={`collapse-${index}`}>
                  <Card>
                    <Card.Body>
                      <ul>{item.content.map((val, key) => <p key={key}>{val} <br /></p>)}</ul>
                    </Card.Body>
                  </Card>
                </div>
              </Collapse>
            </div>
          ))}
        </Col>
        </Row>

       
      </Container>
    </div>
  ) : <Loader />;
}
