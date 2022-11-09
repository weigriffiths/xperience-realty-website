import { AspectRatio, Box, Container, Button, Divider, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack, Spacer } from '@chakra-ui/react'
import React from 'react'

// https://developers.google.com/maps/documentation/embed/quickstart
// https://console.cloud.google.com/projectselector2/home/dashboard

export default function contact() {
  return (
    <>
      <Box>
        <Container maxW="90%">
          <Box textAlign="center" py={10}>
            <Heading as="h1" fontSize="4xl" mb={4} fontWeight="extrabold" textTransform="capitalize" textColor="brand.brandOrange"> Contact Us</Heading>
            <Text fontSize="md" fontWeight="bold">We&apos;d love to hear from you</Text>
          </Box>
          <Divider />
          <Box mt={16} />
          <Flex justify="space-between" mt={5}>
            <Box>
              <Text fontWeight="bold">Address</Text>
              <Text>1/58 HIGH STREET</Text>
              <Text >TOOWONG, 4066</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Hours</Text>
              <Text>Mon - Fri: <Text as="span" fontWeight="bold">9am - 5pm</Text></Text>
              <Text>Sat - Sun: <Text as="span" fontWeight="bold">Appointment Only</Text></Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Direct</Text>
              <Text>(07) 3706 5558</Text>
              <Text>contact@xperiencereatly.com.au</Text>
            </Box>
          </Flex>
          <Box mt={16} />
          <Flex flexGrow direction={["column", "column", "column", "row"]} justify="space-between" align="center" mb={[4,4,4,0]}>
            <Box>
              <iframe width="600" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJU1HlXK9QkWsR-2uVjAl3_LY&key=AIzaSyAydVhMpJMTmN5xrbmXmezeZCRSZs9-DMI"></iframe>
            </Box>
            <VStack w={["60%","60%","60%","40%"]} ml={[0,0,0,5]} mt={[5,5,5, 0]}>
              <Heading as="h2" fontSize="2xl">Reach Out Directly</Heading>
              <Text textAlign="center"> We would love to hear from you and answer any questions that are not answered in our FAQ section.</Text>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input bg="brand.midGrey" type="name"></Input>
                <FormLabel>Email</FormLabel>
                <Input bg="brand.midGrey" type="email"></Input>
                <FormLabel>Phone</FormLabel>
                <Input bg="brand.midGrey" type="phone"></Input>
                <FormLabel>Message</FormLabel>
                <Textarea bg="brand.midGrey"></Textarea>
              </FormControl>
              <Button type="submit">Submit</Button>
            </VStack>
          </Flex>
          <Box mt={16} />
        </Container>
      </Box>
    </>
  )
}
