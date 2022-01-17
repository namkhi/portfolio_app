import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Phuong Nam (Joseph) Chiu Tran</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>

            <Container maxW="container.lg" pt={10}>
                {children}
            </Container>
        </Box>
    )
}

export default Main