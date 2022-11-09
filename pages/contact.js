import { AspectRatio, Box, Container, Button, Divider, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack, Spacer, Stack } from '@chakra-ui/react'
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
          <Stack direction={["column", "column", "row"]} justify={["center", "center", "space-between"]} spacing={5} mt={5}>
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
          </Stack>
          <Box mt={16} />
          <Flex flexGrow direction={["column", "column", "column", "row"]} justify="space-between" align="center" mb={[4,4,4,0]}>
            {/* <AspectRatio ratio={12 / 9}> */}
              {/* w={["250px", "350px", "450px", "600px"]} h={["auto"]} */}
            <Box w="full" maxW="100%">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.425204486827!2d152.9889924153363!3d-27.487148724026675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150af5ce55153%3A0xb6fc77098c956bfb!2sXperience%20Realty!5e0!3m2!1sen!2sau!4v1667960977607!5m2!1sen!2sau" 
                width="600" height="450" 
                style={{border:0}}
                allowfullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" />
            </Box>
            {/* </AspectRatio> */}
            <VStack w={["100%","80%","60%","40%"]} ml={[0,0,0,5]} mt={[5,5,5, 0]}>
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
