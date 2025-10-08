// src/components/userflow/Home/Partners.tsx
import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import fishBg from "../../../assets/home/partners_img.png";

import ciba from "../../../assets/partners/ciba.png";
import cmfri from "../../../assets/partners/cmfri.png";
import nfdb from "../../../assets/partners/ngdb.png";
import nabard from "../../../assets/partners/nabard.png";
import icar from "../../../assets/partners/icar.png";
import { useRef, useState, useEffect } from "react";
import useHomeStyles from "./homeStyles";


const partners = [
  { src: ciba, alt: "CIBA" },
  { src: cmfri, alt: "CMFRI" },
  { src: nfdb, alt: "NFDB" },
  { src: nabard, alt: "NABARD" },
  { src: icar, alt: "ICAR" },
];

const PartnersSection = () => {
  const { classes } = useHomeStyles();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const createCarouselSlides = () => {
    const slides = [];
    
    slides.push([partners[0], partners[1]]);
    
    slides.push([partners[2], partners[3]]);
    
    slides.push([partners[4], partners[0]]);
    
    slides.push([partners[1], partners[2]]);
    
    slides.push([partners[3], partners[4]]);
    
    return slides;
  };

  const carouselSlides = createCarouselSlides();

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  return (
    <Box className={classes.partnersRoot}>
      <SectionTitle title="Our Corporates" />
      <Box className={classes.partnersInner}>
        <Box className={classes.partnersDesktopLayout}>
          {partners.map((partner, index) => (
            <Box key={`desktop-${index}`} className={classes.partnersCard}>
              <Box
                component="img"
                src={partner.src}
                alt={partner.alt}
                className={classes.partnersImg}
              />
            </Box>
          ))}
        </Box>
        
        {/* Mobile carousel layout */}
        <Box
          ref={scrollRef}
          className={classes.partnersScroll}
        >
          {carouselSlides.map((slide, slideIndex) => (
            <Box 
              key={slideIndex} 
              className={classes.partnersSlide}
              style={{
                display: slideIndex === currentSlide ? 'flex' : 'none'
              }}
            >
              {slide.map((partner, partnerIndex) => (
                <Box key={`${slideIndex}-${partnerIndex}`} className={classes.partnersCard}>
                  <Box
                    component="img"
                    src={partner.src}
                    alt={partner.alt}
                    className={classes.partnersImg}
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className='herofish'>
      <Box
        src={fishBg}
        component={'img'}
        alt=""
        className="fish1"
       
      />
      </Box>
      {/* <motion.img
        src={fishBg}
        alt=""
        className={classes.partnersBgImg}
        initial={PARTNERS_FISH_INITIAL}
        animate={PARTNERS_FISH_ANIMATE}
        transition={PARTNERS_FISH_TRANSITION}
      /> */}
    </Box>
  );
};

export default PartnersSection;
