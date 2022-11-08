import { Box, FormControl, FormLabel, Heading, Input, Stack, Text, FormHelperText, Button } from '@chakra-ui/react'
import React from 'react'

export default function SimpleForm({bgColor, textColor}) {
  return (
    <Box minW="250px" maxW="400px" mb={{ base: 12, md: 0 }} bgColor={bgColor} p={6} textColor={textColor} borderRadius={6}>
                    <form method="POST">
                        <Stack spacing={1} mb={4}>
                            <Heading as="h4" fontSize="2xl" >
                                How much is your home worth?
                            </Heading>
                            <Text >
                                Recieve a personalised estimate via email within the next 24hrs
                            </Text>
                            <FormControl>
                                <Box my={4}>
                                    <FormLabel fontWeight="bold" fontSize="sm">Full Name</FormLabel>
                                    <Input type='name' />
                                </Box>
                                <Box my={4}>
                                    <FormLabel fontWeight="bold" fontSize="sm">Email</FormLabel>
                                    <Input type='email' />
                                </Box>
                                <Box my={4}>
                                    <FormLabel fontWeight="bold" fontSize="sm">Address</FormLabel>
                                    <Input type='address' />
                                </Box>
                                <FormHelperText textColor="white" textAlign="center" mb={2}>We&apos;ll never share your email.</FormHelperText>
                            </FormControl>
                            <Button
                                mt={4}
                                colorScheme='orange'
                                // isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </Box>
  )
}
