import React from 'react'
import { RiServiceFill } from "react-icons/ri"
import { FaHandshake, FaComments } from "react-icons/fa"
import { Box, Center, Flex, Heading, HStack, Icon, Text, VStack, Wrap, WrapItem  } from '@chakra-ui/react'

const content = [
  {
    key: 1,
    iconSrc: RiServiceFill,
    title: 'Exceptional Service',
    description: 'We take care of you like family. Our team of agents and staff are always available for you throughout the entire process.'
  },
  {
    key: 2,
    iconSrc: FaHandshake,
    title: 'Skilled Negotiators',
    description: 'Whether representing you as a buying or selling agent, we get you the best number, relative to the market and your situation.'
  },
  {
    key: 3,
    iconSrc: FaComments,
    title: 'Clear Communication',
    description: 'We pride ourselves as being great communicators. You are never left in the dark, or left on read.'
  },

]

export default function Features() {
  return (
    <section>
      <Wrap spacing={4} align="center" justify="center" overflow="hidden" p={3}>
        {/* <VStack minW="250px" spacing={3}>
          <Flex align="center" justify="center" bgColor="brand.lightGrey" p={7} borderRadius={7}>
            <Icon as={<RiServiceFill />} />
          </Flex>
          <Heading as="h2" fontSize="lg">Exceptional Service</Heading>
          <Text fontSize="sm" textAlign="center">We take care of you like family. Our team of agents and staff are always available for you throughout the entire process.</Text>
        </VStack> */}
        {content.map(item => (
          <WrapItem key={item.key} 
          w="300px"
          h={["250px", "250px", "220px"]} 
          border="1px" 
          borderColor="brand.midGrey" 
          borderRadius={7} 
          p={5} 
          boxShadow="md"
          textAlign="center"
          >
            <VStack spacing={2} >
              <Flex  mx="auto" align="center" justify="center" bgColor="brand.lightGrey" p={4} w={12} h={12} borderRadius={7}>
                <Icon as={item.iconSrc} w={8} h={8}/>
              </Flex> 
              <Heading as="h2" fontSize="lg">{item.title}</Heading>
              <Text fontSize="sm" textAlign="center">{item.description}</Text>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>
    </section>
  )
}  
