
import { Box } from '@chakra-ui/react';

const SnapSection = (children) => (
    <Box h="100vh" scrollSnapAlign="start" p="5%">
        {children}
    </Box>
)

export default SnapSection;