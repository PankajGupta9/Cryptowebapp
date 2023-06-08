import React from 'react';
import {VStack,Box,Spinner} from '@chakra-ui/react';


const Loader = () => {
  return (
    <div>
      <VStack height={'90vh'} justifyContent={'center'}>
 
 <Box transform={'scale(3)'}>
      <Spinner size={'xl'}></Spinner>
 </Box>

      </VStack>
    </div>
  )
}

export default Loader
