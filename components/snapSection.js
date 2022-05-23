
import { Box } from '@chakra-ui/react';

const SnapSection = ({children}) => (
    <Box h="100vh" scrollSnapAlign="start" p="2%">
        {children}
    </Box>
)

export default SnapSection;