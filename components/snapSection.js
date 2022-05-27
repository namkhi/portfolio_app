
import { Flex, Box, VStack } from '@chakra-ui/react';

const SnapSection = ({children}) => (
    <Box minH="100vh" scrollSnapAlign="start" p="2%">
        {children}
    </Box>
)

export default SnapSection;