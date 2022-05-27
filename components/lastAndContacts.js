
import { Heading, Box, Text, Grid, GridItem, useClipboard, Spacer, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, IconButton, Link, Image} from '@chakra-ui/react';
import { ExternalLinkIcon, CopyIcon } from '@chakra-ui/icons';
import React, { forwardRef } from 'react';
import Section from './section'

const Contacts = forwardRef((props, ref) => {
    const [ value, setValue ] = React.useState('chiutran.joseph@gmail.com');
    const {hasCopied, onCopy } = useClipboard(value);
    return (
        <Box ref={ref}>
<Section delay={0.3}>
        <Box pt="1" display={{md:'flex-box'}}>
          <Heading as="h3" size="md" variant="section-title" bg="#91D0D7" borderRadius="md" p="2" boxShadow="md">
            Contacts & Links
          </Heading>

          <Box pt="2" display={{base:"flex"}}>

              <Text value={ value }>
                Email: chiutran.joseph@gmail.com
              </Text> 
              <Spacer/> 
              <Popover placement="top">
                <PopoverTrigger>
                  <IconButton bg="white" color="hsl(256, 28%, 42%)" size="sm" icon={<CopyIcon />}  onClick={onCopy} />
                </PopoverTrigger>
                <PopoverContent display="flex" width="initial">
                  <PopoverArrow/>
                  <PopoverHeader>Copied</PopoverHeader>
                </PopoverContent>
              </Popover>
            </Box>
            
            <Box pt="2" display={{base:"flex"}}>
              <Text>LinkedIn:&nbsp;
                <Link href="https://www.linkedin.com/in/joseph-chiu-tran/" isExternal color="hsl(256, 28%, 42%)">
                  /in/joseph-chiu-tran
                  {/* <a>https://www.linkedin.com/in/joseph-chiu-tran/</a> */}
                </Link>
              </Text> 
              <Spacer/>
              <Link href="https://www.linkedin.com/in/joseph-chiu-tran/" isExternal><ExternalLinkIcon color="hsl(256, 28%, 42%)" mx='2px'/> </Link>
          </Box>

          <Box pt="2" display="flex">
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
        </Box>
    )
})

export default Contacts;