import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import MortgageCalculator from '../components/mortgage'

// https://mortgage-payment-calculator.netlify.app/

export default function mortgageCalculator() {
  return (
    <>
      <Box>
        <Container maxW="90%">
          <MortgageCalculator />
        </Container>
      </Box>
    </>
  )
}
