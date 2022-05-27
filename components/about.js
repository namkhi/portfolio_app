import { Heading, Box, Link, Text, Image } from '@chakra-ui/react';
import { forwardRef } from 'react';
import Section from './section'

const About = forwardRef((props, ref) => {

    return(
        <Box ref={ref}>
        <Box borderRadius="lg" pt="5" display={{md:'flex'}}>
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
          Feel free to download my general resume: <Link href="Phuong_Nam_Chiu_Tran_2022_Resume.pdf">Resume</Link>
        </Text>

        <Box align="center">
          <Image src="/images/quill.png"/>
        </Box>
          
        </Box>
      </Section>
      </Box>
    )
})

export default About;