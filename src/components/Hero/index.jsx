import React, { useEffect, useState } from "react";
import HeroSliderControls from "../HeroSliderControls";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import FullScreenSlider from "../FullScreenSlider";
import Button from "../Button";
import Aos from "aos";
import BG from '../images/2.png'
import BG1 from '../images/bgk/1st library.jpeg'
import BG2 from '../images/bgk/2nd library.jpeg'
import BG3 from '../images/bgk/3rd library.jpeg'
import BG4 from '../images/bgk/4thkitchen.png'
import BG5 from '../images/bgk/Living Room.jpg'
import BG6 from '../images/bgk/Living Room(1).jpg'
import { useTranslation } from "react-i18next";

import "aos/dist/aos.css";
import "./Hero.scss";

const Hero = () => {
  const [image, setImage] = useState("");
  const [openSlider, setOpenSlider] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const {t} = useTranslation();

  const images = [
    {
      id: 0,
      src: BG,
    },
    {
      id: 1,
      src: BG1,
    },
    {
      id: 2,
      src: BG5,
    },
    {
      id: 3,
      src: BG3,
    },
    {
      id: 4,
      src: BG4,
    },
    {
      id: 5,
      src: BG2,
    },
    {
      id: 6,
      src: BG6,
    },
  ];

  useEffect(() => {
    setImage(images[4].src);
    Aos.init({ duration: 1000 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="hero__section">
        {image && <div className="gb__image position-absolute">
          <img src={image} alt="" />
        </div>}
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title" data-aos="fade-up">
                <span>{t("WE_CAN")}</span>{" "}
                <span data-aos="fade-up" data-aos-delay="150">
                  {t("Wooden_Products")}
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                {t('hero_desc')}
              </p>
              <div className="hero__links d-flex flex-column  justify-content-between">
                <div data-aos="fade-up" data-aos-delay="350">
                  <Button>{t('Work_With_Us')}</Button>
                </div>
                <ul className="d-flex align-items-center">
                  <li data-aos="fade-up" data-aos-delay="400">
                    <a href="https://web.facebook.com/profile.php?id=100086677671717&_rdc=1&_rdr" target="_blank" rel="noreferrer">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500">
                    <a href="https://twitter.com/We_Can_Optics" target="_blank" rel="noreferrer">
                      <FaTwitter />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="600">
                    <a href="#home" target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="700">
                    <a href="#home" target="_blank">
                      <GrInstagram />
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="800">
                    <a href="#home" target="_blank">
                      <FaDribbble />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="hero__rigth"
              data-aos="fade-left"
              data-aos-delay="350"
            >
              <HeroSliderControls
                setCurrIndex={setCurrIndex}
                images={images}
                setImage={setImage}
                onOpenSlider={setOpenSlider}
              />
            </div>
          </div>
        </div>
      </section>
      {openSlider && <FullScreenSlider startIndex={currIndex} images={images} onClose={setOpenSlider} />}
    </>
  );
};

export default Hero;
