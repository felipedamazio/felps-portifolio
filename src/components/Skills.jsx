import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills and Tools</h2>
              <div className="tools">
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-React"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Next"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Node"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Js"
                    height="40"
                    width="40"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Typescript"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Tailwind"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Sass"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Git"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  />
                </div>
                <div className="item">
                  <img
                    align="center"
                    alt="Felp-Photoshop"
                    height="40"
                    width="40"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                  />
                </div>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Teamwork</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Creativity</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
