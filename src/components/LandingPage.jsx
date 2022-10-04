import {
  Button,
  Text,
  Box,
  Image,
} from '@chakra-ui/react'
import img from '../assets/images/movie-night.svg';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();
  return (
    <>
      <Box
        color="#240D57"
        fontSize="36px"
        fontStyle="normal"
        lineHeight="36px"
        fontWeight="700"
      >
        <Text>Imagine if</Text><Text lineHeight="41px"
            background="linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)"
            backgroundClip="text" sx={{ '-webkit-background-clip': 'text!important', '-webkit-text-fill-color': 'transparent!important'  }}>Snapchat</Text><Text> had events.
        </Text>
      </Box>
      <Box mt="16px">
        <Text
          color="#4F4F4F"
          fontSize="16px"
          fontStyle="normal"
          lineHeight="18px"
          fontWeight="300"
        >
          Easily host and share events with your friends across any social media.
        </Text>
      </Box>
      <Box
        pt="36px"
        margin="auto"
        width="165.63px"
        borderRadius="13.2326px"
        filter="drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))"

      >
        <Image src={img} alt='movie-night' />
      </Box>
      <Box textAlign="center">
        <Button
          mt="34px"
          padding="16px"
          gap="10px"
          color="#FFFFFF"
          fontWeight="700"
          fontSize="16px"
          lineHeight="18.4px"
          textAlign="right"
          background="linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)"
          border-radius="10px"
          onClick={() => navigate(`/create`)}
        >
          Create my event
        </Button>
      </Box>
    </>
  );
}
 
export default LandingPage;