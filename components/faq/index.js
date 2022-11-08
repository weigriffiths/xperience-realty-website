import { Box, Container, Heading, Text, Divider } from '@chakra-ui/react'
import React from 'react'

export default function index() {
  return (
    <>
      <Box>
        <Container maxW="90%">
          <Box textAlign="center" py={10}>
            <Heading as="h1" fontSize="4xl" mb={4} fontWeight="extrabold" textTransform="capitalize" textColor="brand.brandOrange"> 
              Frequently Asked Questions
            </Heading>
            <Text fontSize="md" fontWeight="bold">
              Have a question for us? Find your answers here
            </Text>
          </Box>
          <Divider />
          <Box mt={16} />
          
        </Container>
      </Box>
    </>
  )
}
