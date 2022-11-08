import { Box, Heading, Text, Divider, Flex, Grid, GridItem, VStack } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'


import CalculatorControls from './CalculatorControls';
import PaymentGraph from './PaymentGraph';
import { handleMortgageDataChange } from './utils';

// https://github.com/daveidivide/mortgage-payment-calculator/blob/master/src/components/Calculator.js
// https://mortgage-payment-calculator.netlify.app/

export default function MortgageCalculator() {
  return (
    <section>
      <Box textAlign="center" py={10}>
        <Heading as="h1" fontSize="4xl" mb={4} fontWeight="extrabold" textTransform="capitalize" textColor="brand.brandOrange">Start the pre-qualification process</Heading>
        <Text fontSize="md" fontWeight="bold">Find out how much you can afford today</Text>
      </Box>
      <Divider />
      <Box mt={16} />
      <Selectors />
      <Box mt={20} />
    </section>
  )
}

const Selectors = () => {
  const [depositAmount, setDepositAmount] = useState(100000);
	const [purchasingHousePrice, setPurchasingHousePrice] = useState(500000);
	const [mortgageTerm, setMortgageTerm] = useState(25);
	const [interestRate, setInterestRate] = useState(3.9);

	//Set initial values for the whole mortgage term
	const amountToBorrow = purchasingHousePrice - depositAmount;
	const monthlyPayment = ((interestRate / 100 / 12) * amountToBorrow) / (1 - (Math.pow((1 + (interestRate / 100 / 12)),((0 - mortgageTerm) * 12))));
	const totalRepaid = monthlyPayment * 12 * mortgageTerm;
	const totalInterestPaid = totalRepaid - amountToBorrow;

  const yearlyPayments = handleMortgageDataChange(amountToBorrow, mortgageTerm, interestRate, monthlyPayment)

  const localeOptions = {
    style:'currency',
    currency:'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }

  return (
    <Grid 
      templateColumns={['1fr', '1fr', '1fr', '1fr', 'repeat(2,1fr)']} 
      gap={6}>
        <GridItem textAlign="center">
          <Heading as="h2" fontSize="3xl">Mortgage Calculator</Heading>
          <Text fontSize="md" mb={5}>Find Your Comfortable Price Range</Text>
          <CalculatorControls 
            depositAmount={depositAmount}
            setDepositAmount={setDepositAmount}
            purchasingHousePrice={purchasingHousePrice}
            setPurchasingHousePrice={setPurchasingHousePrice}
            mortgageTerm={mortgageTerm}
            setMortgageTerm={setMortgageTerm}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
          />
          <VStack textAlign="center" mt={5} spacing={2}>
            <Heading as="h1">Expected Monthly Payments</Heading>
            <Heading as="h2" fontSize="3xl">{parseInt(monthlyPayment).toLocaleString('en-AU', localeOptions)} pm</Heading>
            <Text fontWeight="bold">Based on an LTV of {(amountToBorrow / purchasingHousePrice * 100).toFixed(1)}%</Text>
            <Text fontSize="xs" fontWeight="light">
              This tool is for research only. Please consult your bank or financial advisor to your personalised options. 
            </Text>
          </VStack>
        </GridItem>
        <GridItem mx={["auto", "auto", "auto", "auto", 0]}>
          <PaymentGraph
            mortgageTerm={mortgageTerm}
            yearlyPayments={yearlyPayments}
          />
        </GridItem>  
    </Grid>
  )
}