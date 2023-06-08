import { Box, VStack,Stack,Text,Avatar } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box 
    bgColor={"blackAlpha.900"} 
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}
    >
      <Stack 
      direction={["coloumn", "row"]}
      h={"full"}
      alignItems={"center"}
      >

<VStack w={"full"} alignItems={["center", "flex-start"]}>

<Text fontWeight={"bold"}>About us</Text>
<Text 
   fontSize={"sm"}
   letterSpacing={"widest"}
   textAlign={["center", "left"]}
   >
    We are the best crypto infomation app in the World, we provide our 
    infomation at free of cost.
   </Text>
</VStack>
<VStack>
    <Avatar boxSize={"28"} mt={["4", "0"]}/>
    <Text>Our Founder</Text>
</VStack>
      </Stack>

    </Box>
  )
}

export default Footer;
