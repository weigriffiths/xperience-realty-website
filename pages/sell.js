import { Box, Container, Heading, Text, Divider, VStack, Flex, Stack, Center } from '@chakra-ui/react'
import React, {useEffect} from 'react'


import { sellData } from '../data/sellPage'
import SimpleForm from '../components/SimpleForm'

export default function Sell() {

  // useEffect(() => {
  //   sellData.map((obj, iter) => (obj.icon = setIcons[iter]))
    
  // })

  return (
    <>
      <Box>
        <Container maxW="90%">
          <Box textAlign="center" py={10}>
            <Heading as="h1" fontSize="4xl" mb={4} fontWeight="extrabold" textTransform="capitalize" textColor="brand.brandOrange">
              List Your Home With Xperience Realty
            </Heading>
            <Text fontSize="md" fontWeight="bold">With our listing program, we make it easy to sell your property</Text>
          </Box>
          <Divider />
          <Box mt={16} />
          {sellData.map(section => (
            <Stack key={section.title} spacing={3} mb={12} textAlign="left" w="60%" mx="auto">
              <Flex justify="flex-start" align="center">
                <Flex align="center" justify="center" bgColor="brand.lightGrey" p={4} w={14} h={14} borderRadius={"50%"} mr={5}>
                {section.icon}
                </Flex> 
                <Heading as="h1" fontSize="xl">{section.title}</Heading>
              </Flex>
              <Heading as="h2" fontWeight="normal" fontSize="lg">{section.description}</Heading>
            </Stack>
          ))}
          <Box mt={16} />
          <Divider />
          <Center>
            <SimpleForm  bgColor="white" textColor="black" />
          </Center>
          <Box mt={16} />
        </Container>
      </Box>
    </>
  )
}
