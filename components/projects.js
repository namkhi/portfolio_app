
import { Heading, Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { forwardRef } from 'react';
import Section from './section'

const Projects = forwardRef((props, ref) => {
    return (
    <Box ref={ref}>
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
    </Box>
    )
})

export default Projects;