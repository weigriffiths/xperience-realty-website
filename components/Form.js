import { Box, Flex, Heading, RadioGroup, Radio, Text, HStack, VStack, Grid, GridItem, Button } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea
} from '@chakra-ui/react'
import React from 'react'

export default function Form() {
  return (
    <Box 
      p={5} 
      mx="auto"
      maxW="60%"
      bg="black" 
      backgroundImage="url('/x-badge-overlay.svg'), linear-gradient(316deg,#f15a29 0%,#f89939 100%);"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      textAlign="center"
      borderRadius={6}
      boxShadow="lg"
      >
        <Heading as="h1" fontSize="3xl">How much is your property worth?</Heading>
        <Text fontSize="sm" my={4}>
          You could be selling or renting your property well under what it’s worth. So, why not have one of Brisbane’s best Sales and Rental specialists take a look for you?

          After all, it&apos;s free!
        </Text>
        <FormControl >
          <VStack spacing={4} align="flex-start">
            <Grid templateColumns='repeat(4, 1fr)' gap={4} alignItems="center" justify="center">
              <GridItem colSpan={1}>
                <FormLabel>Full Name</FormLabel>
                <Input type='name' _focus="none"/>
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel>Phone number</FormLabel>
                <Input type='phone' _focus={"none"}/>
              </GridItem>
              <GridItem colSpan={2} >
                <FormLabel>Email address</FormLabel>
                <Input type='email' _focus="none"/>
              </GridItem>
            </Grid>
            <FormLabel>Property Address</FormLabel>
            <Input type='address' _focus="none"/>
            <RadioGroup>
              <FormLabel>Who do you want to talk to?</FormLabel>
              <HStack spacing={4}>
                <Radio value='sales'>Sales</Radio>
                <Radio value='rentals'>Rentals</Radio>
              </HStack>
            </RadioGroup>
            <FormLabel>Comments</FormLabel>
            <Textarea _placeholder={{color: "brand.midGrey", opacity: 0.8}} placeholder='Describe your property' _focus="none"/>
          </VStack>
        </FormControl>
        <Button mt={5} type="submit">Submit</Button>
    </Box>
  )
}
