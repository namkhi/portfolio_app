
import NextLink from 'next/link';
import { Container, Box, Text, Heading, Image, Grid, GridItem, Link, useClipboard, IconButton, Spacer, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, Button} from '@chakra-ui/react'

import React, { useState, useRef, useEffect } from 'react';
import Section from '../components/section';



import LandingCard from '../components/landingPage';
import SnapSection from '../components/snapSection';
import '../components/theme';

import About from '../components/about.js';
import EduAndExp from '../components/eduAndExp.js';
import Contact from '../components/lastAndContacts';
import Projects from '../components/projects';

export default function Home() {
  // copy and paste controls
  const [ value, setValue ] = React.useState('chiutran.joseph@gmail.com');
  const {hasCopied, onCopy } = useClipboard(value);

  // jump link controls

  const aboutRef = useRef();
  const expRef = useRef();
  const projRef = useRef();
  const contactRef = useRef();

  const aboutJump = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const expJump = () =>{
    expRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const projJump = () => {
    projRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const contacts = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollUp = () => {
    document.querySelector("#topSection").scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  const initialFocusRef = useRef();

  return (


    <Container minW="100vw" scrollSnapType="y proximity" scroll-snap-stop="normal" overflowY="scroll" h="100vh" w="100vw" alignItems="center" id="topSection">
        <SnapSection >
          <Box borderRadius="lg" bg="#E2CBD3" p="3" align="center" boxShadow="md">
            <Text fontSize="2xl">
              Welcome to my website!&nbsp;
              <span>👋</span>
            </Text>
            
          </Box>
          <Box align="center">
            <LandingCard delay={0.1}>
              <video loop muted autoPlay src="/jos_cardo.mp4"/> 
            </LandingCard>
          </Box>

          <Box align="center">
          <Image src="chevron-double-down.png">

          </Image>
          </Box>

        </SnapSection>

      <SnapSection>
        
        <About ref={aboutRef}>

        </About>
      </SnapSection>

      <SnapSection>
        <EduAndExp ref={expRef}>

        </EduAndExp>
      </SnapSection>


      <SnapSection>
        <Projects ref={projRef} ></Projects>
      </SnapSection>


      <SnapSection>
        <Contact ref={contactRef}>

        </Contact>
      </SnapSection>
                
      <Button onClick={scrollUp}>Back to Top</Button>
      <Button onClick={aboutJump}>About</Button>
      <Button onClick={expJump}>Exp</Button>
    </Container>
    
  )
}
