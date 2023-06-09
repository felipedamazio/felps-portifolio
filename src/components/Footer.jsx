import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/felp.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <div class="flex-center">
                <a href="https://github.com/felipedamazio" target="_blank"><i class="fa fa-github fa-3x icon-3d" ></i></a>
                <a href="https://www.linkedin.com/in/felipe-damazio/" target="_blank"><i class="fa fa-linkedin fa-3x icon-3d" ></i></a>
                <a href="https://www.instagram.com/felipe.damazio" target="_blank"><i class="fa fa-instagram fa-3x icon-3d" ></i></a>
                <a href="https://www.facebook.com/felp.damazio" target="_blank"><i class="fa fa-facebook fa-3x icon-3d" ></i></a>
              </div>
            </div>
            <p>Copyright 2023. All Rights Reserved Felp©</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
