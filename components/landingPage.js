import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div , {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition' 
    }
})

const LandingCard = ({ children, delay = 0}) => (
    <StyledDiv
        initial={{scale:2, opacity: 0}}
        animate={{scale:1, opacity: 1}}
        transition={{duration: 1.2, delay}}
        mb={1}>
            {children}
    </StyledDiv>
)

export default LandingCard;