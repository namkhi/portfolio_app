
import { Heading, Box, Text, Grid, GridItem, } from '@chakra-ui/react';
import { forwardRef } from 'react';
import Section from './section';

const EduAndExp = forwardRef((props, ref) =>{

    return (
        <Box ref={ref}>
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

        <Grid templateRows="repeat(auto)" templateColumns={{md:"repeat(1, 1fr)"}} gap="4" pt="4">
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
      </Box>
    )
})

export default EduAndExp;