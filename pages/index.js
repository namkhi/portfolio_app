import { Container, Box, Text, Heading, Image, Grid, GridItem, Link, useClipboard, IconButton, Spacer, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader} from '@chakra-ui/react'
import { ExternalLinkIcon, CopyIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import Section from '../components/section';

import LandingCard from '../components/landingPage';
import SnapSection from '../components/snapSection';


export default function Home() {
  const [ value, setValue ] = React.useState('chiutran.joseph@gmail.com')
  const {hasCopied, onCopy } = useClipboard(value)
  return (


    <Container minW="100vw" scrollSnapType="y mandatory" overflowY="scroll" h="100vh" w="100vw" alignItems="center" flexDirection="column">
        <SnapSection>
          <Box borderRadius="lg" bg="#E2CBD3" p="3" align="center" boxShadow="md" >
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
      <Box borderRadius="lg" pt="5" display={{md:'flex'}} >
        <Box flexGrow={1}>
          <Heading as="h2" size="2xl" variant="page-title">
            Phuong Nam (Joseph) Chiu Tran
          </Heading>
          <Text pt="2" fontSize="xl">
            Aspiring full stack developer having fun creating and learning different tech.
          </Text>
        </Box>

        <Box flexShrink={0} mt={{base:4, md: 0}} mb={{base:4, md: 2}} ml={{ md: 6 }} align="center" >
          <Image borderColor="hsl(256, 28%, 58%)" borderWidth={2} borderStyle="solid" maxWidth="180px" display="inline-block" borderRadius="full" src="/images/joseph.jpg"/>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Box pt="1" display={{md:'flex-box'}}>
        
        <Heading as="h3" size="lg" variant="section-title" bg="#91D0D7" borderRadius="md" p="2" boxShadow="md">
          About Myself
        </Heading>
             
        <Text pt="2" fontSize="xl">
          From a young age, my mind was always filled with creative ideas but I was never satisfied by any one medium.  I grew frustrated while realizing these ideas because
          there was always a side of me that wanted to incorporate my innovative ideas as well.  Programming became the medium for expressing these passions and I&apos;ve been working hard 
          to become a full stack developer ever since.
          <br/> <br/>
          Ultimately, I would like to translate my skills in full stack development and enter the world of machine learning when my technical skills have improved.
          <br/> <br/>
          Feel free to download my general resume: <Link href="/Phuong_Nam_Chiu_Tran_2022_Resume.pdf">Resume</Link>
        </Text>

        <Box align="center">
          <Image src="/images/quill.png"/>
        </Box>
          
        </Box>
      </Section>
      </SnapSection>

      <SnapSection h="100vh">
      <Section delay={0.2}>
        <Heading as="h3" size="lg" variant="section-title" bg="#91D0D7" borderRadius="md" p="2" boxShadow="md">
            Education
        </Heading>
          <Box borderRadius="lg" p="2" display={{md:'flex-box'}}>
            <Heading as="h2" size="md">
                Toronto Metropolitan University (formerly Ryerson University)
            </Heading>
            <Heading as="h3" size="sm" pt="2" pb="3" color="hsl(256, 28%, 51%)">
                  Bachelor of Science (Honours), 2019-2024
                </Heading>
            <Text fontSize="xl">
              Computer Science with a concentration in Software Education Engineering
            </Text>
            
          </Box>
          
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" size="lg" variant="section-title" bg="#91D0D7" borderRadius="md" p="2" boxShadow="md">
            Experience
        </Heading>

        <Grid templateRows="repeat(auto)" templateColumns={{md:"repeat(2, 1fr)"}} gap="4" pt="4">
          <GridItem borderRadius="lg" p="2" display={{md:'flex-box'}}>
          <Heading as="h2" size="md">
                IT Architect, ORNGE
              </Heading>
                <Heading as="h3" size="sm" pt="2" pb="3" color="hsl(256, 28%, 51%)">
                  May 2021 - August 2021
                </Heading>
                <Text>
                  Worked on every phase of the development cycle with a small team, from requirements and documentation (UML modelling) to design, implementation and testing.
                </Text>
          </GridItem>
          <GridItem bg="#f3f1f1" borderRadius="lg" p="2" display={{md:'flex-box'}}>

          </GridItem>
        </Grid>
      </Section>

      </SnapSection>
      <SnapSection>
      <Section delay={0.2}>
          <Heading as="h3" size="md" variant="section-title" bg="#91D0D7" borderRadius="md" p="2" boxShadow="md">
            Projects
          </Heading>

          <Grid templateRows="repeat(auto)" templateColumns={{md:"repeat(2, 1fr)"}} gap="4" pt="4">
            
            <GridItem bg="#f3f1f1" borderRadius="lg" p="2" display={{md:'flex-box'}}>
              <Heading as="h2" size="sm">
                Team Project: E-Learning Platform
              </Heading>
                <Heading as="h3" size="xs" pt="2" pb="3" color="hsl(256, 28%, 51%)">
                  ReactJS, MongoDB, ExpressJS, NodeJS
                </Heading>
                <Text>
                  Worked on every phase of the development cycle with a small team, from requirements and documentation (UML modelling) to design, implementation and testing.
                </Text>
            </GridItem>

            <GridItem borderRadius="lg" p="2" display={{md:'flex-box'}}>
              <Heading as="h2" size="sm">
                Team Project: Online Phone Store
              </Heading>
              <Heading as="h3" size="xs" pt="2" pb="3" color="hsl(256, 28%, 50%)">
                  AngularJS, JavaScript, JQuery, MySQL, PHP
                </Heading>
              <Text>
                A webapp project implemnented in two iterations, one without the use of a framework and the second being the refactor of the first into a javascript framework, this being the second iteration in AngularJS.  We gained exposure to different web technologies and an introduction of the power that web frameworks hold.</Text>
            </GridItem>
              

            <GridItem borderRadius="lg" p="2" display={{md:'flex-box'}}>
              <Heading as="h2" size="sm">
                Team Project: Online Merchandising Website
              </Heading>
              <Heading as="h3" size="xs" pt="2" pb="3" color="hsl(256, 28%, 50%)">
                  Angular, MySQL, PHP
                </Heading>
              <Text>
              Implemented front-end of webpages to be fully responsive. Established website&apos;s structure and routing using Angular Framework. Implemented the navigation bar and footer of the main page.
              </Text>
            </GridItem>
              
            <GridItem bg={{base:"#f3f1f1", md:"white"}} borderRadius="lg" p="2" display={{md:'flex-box'}}>
              <Heading as="h2" size="sm">
                Personal Team Project: Expiration Rotation App
              </Heading>
              <Heading as="h3" size="xs" pt="2" pb="3" color="hsl(256, 28%, 51%)">
                  ReactJS, MySQL, ExpressJS, NodeJS
                </Heading>
              <Text>
              Designed and implemented the application with a small team to increase the efficiency of retail workers as they manage the sales of perishable items, instead of having workers perform the tasks manually.
              </Text>
            </GridItem>

            <GridItem bg={{md:"#f3f1f1", base:"white"}} borderRadius="lg" p="2" display={{md:'flex-box'}}>
              <Heading as="h2" size="sm">
                Personal Project: Portfolio Webpage
              </Heading>
                <Heading as="h3" size="xs" pt="2" pb="3" color="hsl(256, 28%, 51%)">
                  NextJS, ChakraUI, Framer Motion
                </Heading>
                <Text>
                  A little project to explore NextJS and front end tech.  In the future, I hope to explore ThreeJS and Blender models with the goal of integrating it into the site.
                </Text>
            </GridItem>
          </Grid>

          <Box align="center">
            <Image src="images/terminal.png"/>
          </Box>
          
        </Section>
      </SnapSection>
      <SnapSection>
        <Section delay={0.3}>
        <Box pt="1" display={{md:'flex-box'}}>
          <Heading as="h3" size="md" variant="section-title" bg="#91D0D7" borderRadius="md" p="2" boxShadow="md">
            Contacts & Links
          </Heading>

          <Box pt="2" display={{md:"flex", base:"flex-box"}}>

              <Text value={ value }>
                Email: chiutran.joseph@gmail.com
              </Text> 
              <Spacer/> 
              <Popover placement="top" matchWidth>
                <PopoverTrigger>
                  <IconButton bg="white" color="hsl(256, 28%, 42%)" size="sm" icon={<CopyIcon />}  onClick={onCopy} />
                </PopoverTrigger>
                <PopoverContent display="flex" width="initial">
                  <PopoverArrow/>
                  <PopoverHeader>Copied</PopoverHeader>
                </PopoverContent>
              </Popover>
            </Box>
            
            <Box pt="2" display={{md:"flex", base:"flex-box"}}>
              <Text>LinkedIn:&nbsp;
                <Link href="https://www.linkedin.com/in/joseph-chiu-tran/" isExternal color="hsl(256, 28%, 42%)">
                  /in/joseph-chiu-tran
                  {/* <a>https://www.linkedin.com/in/joseph-chiu-tran/</a> */}
                </Link>
              </Text> 
              <Spacer/>
              <Link href="https://www.linkedin.com/in/joseph-chiu-tran/" isExternal><ExternalLinkIcon color="hsl(256, 28%, 42%)" mx='2px'/> </Link>
          </Box>

          <Box pt="2" display={{md:"flex", base:"flex-box"}}>
            <Text>GitHub:&nbsp; 
            <Link href="https://github.com/namkhi" isExternal color="hsl(256, 28%, 42%)">
              github.com/namkhi
                  {/* <a>https://github.com/namkhi</a> */}
                </Link>
            </Text>
            <Spacer/>
              <Link href="https://github.com/namkhi" isExternal><ExternalLinkIcon color="hsl(256, 28%, 42%)" mx='2px'/> </Link>
          </Box>
          
          <Box align="center" pt="2">
            <Image src="images/contact.png"/>
          </Box>
        </Box>
        </Section>
        </SnapSection>
    </Container>
    
  )
}
