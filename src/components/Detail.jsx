import React, { useContext } from 'react'
import {
  Box,
  Text,
  Image,
  chakra,
} from '@chakra-ui/react'
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";

import img from '../assets/images/birthday-cake.png';
import { EventDetailContext } from '../contexts/EventDetailContext';

const DetailPage = () => {
  const eventContext = useContext(EventDetailContext);
  const { eventName, hostName, startTime, endTime, location } = eventContext

  return (
    <Box alignItems="left">
      <Image src={img} alt='birthday-cake' />
      <Box mt="36px" textAlign="left">
        <Text color="#240D57" fontSize="28px" fontWeight="700" lineHeight="32.2px">{eventName}</Text>
        <Text color="#828282" fontSize="18px" fontWeight="400" lineHeight="20.7px">Hosted by <chakra.span fontWeight="700">{hostName}</chakra.span></Text>
      </Box>
      <Box
        mt="55px"
        display="flex"
        textAlign="left"
        justifyContent="space-between"
        alignItems="center"
      >
        <chakra.div
          padding="15px"
          borderRadius="10px"
          width="56px"
          height="56px"
          background="#FFFFFF"
          boxShadow= "0px 0px 5px rgb(0 0 0 / 10%)"
        >
          <IoCalendarOutline margin="auto!important" transform= "translate(0, 15%)" textAlign="center" fontSize="26px"/>
        </chakra.div>
        <Box pl="20px" flexGrow={1}>
          <Text>{startTime}</Text>
          <Text>{endTime}</Text>
        </Box>
        <Box margin="auto">
          <AiOutlineRight />
        </Box>
      </Box>

      <Box
        mt="33px"
        display="flex"
        textAlign="left"
        justifyContent="space-between"
        alignItems="center"
      >
        <chakra.div
          padding="15px"
          borderRadius="10px"
          width="56px"
          height="56px"
          background="#FFFFFF"
          boxShadow= "0px 0px 5px rgb(0 0 0 / 10%)"
        >
          <IoLocationOutline margin="auto!important" transform= "translate(0, 15%)" textAlign="center" fontSize="26px"/>
        </chakra.div>
        <Box pl="20px" flexGrow={1}>
          <Text>{location}</Text>
        </Box>
        <Box>
          <AiOutlineRight />
        </Box>
      </Box>
    </Box>
  );
}
 
export default DetailPage;