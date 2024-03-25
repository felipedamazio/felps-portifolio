import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FelpImg from "../assets/img/FelpAavatarNew.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { DownloadBtn } from "./DownloadBtn";
import MyPDF from "../assets/CV/FelipeDamazio(curriculo).pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Developer", "Gamer", "Creator"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi! I'm Felp..`}
                      <br></br>{" "}
                      <span
                        className="txt-rotate"
                        data-period="100"
                        data-rotate='["Developer", "Gamer", "Creator"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>Sophia's Dad | Front End Developer</p>
                    <p>Content Creator and Games Enthusiast.</p>
                    <p>
                      {" "}
                      • React.Js • Next.Js • Node.Js • JavaScript • TypeScript
                    </p>
                    <div className="flex">
                      <div className="tech-skills">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          className="techs-logo"
                        ></img>
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                          className="techs-logo"
                        ></img>
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                          className="techs-logo"
                        ></img>
                        <img
                          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                          className="techs-logo"
                        ></img>
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                          className="techs-logo"
                        ></img>
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                          className="techs-logo"
                        ></img>
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                          className="techs-logo"
                        ></img>
                      </div>
                      <div className="btn-download">
                        <DownloadBtn
                          urlFile={MyPDF}
                          nameFile={"FelipeDamazio(curriculo).pdf"}
                          text={"Download CV"}
                        />
                      </div>
                    </div>
                    <HashLink className="connect-banner-link" to="#connect">
                      <button className="connect-banner">
                        Let’s Connect <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={FelpImg} alt="Felp Img" className="felp-img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
