import { Box, FormLabel, Grid, GridItem, Input, Slider, Text, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'AUD',
	minimumFractionDigits: 0,
  maximumFractionDigits: 0
}

export default function CalculatorControls(props){
	return(
		<Grid templateColumns={'repeat(2,1fr)'} templateRows={'repeat(2,1fr)'} gap={6}>			
			<GridItem>
        <Text fontSize="sm">
          Purchase Price |&nbsp;  
				<Text as="span" fontWeight="bold" fontSize="md" mb={3}>
          {parseInt(props.purchasingHousePrice).toLocaleString('en-AU', localeOptions)}
        </Text>
          
        </Text>
        <Slider 
          aria-label='slider-houseprice' 
          defaultValue={props.purchasingHousePrice}  
          min={100000}
          max={5000000}
          step={1000}
          onChange={(value) => props.setPurchasingHousePrice(value)}
          >
          <SliderTrack bg="orange.300">
            <SliderFilledTrack bg="brand.brandOrange"/>
          </SliderTrack>
          <SliderThumb />
        </Slider>
			</GridItem>
			<GridItem>
        <Text fontSize="sm">
          Deposit | &nbsp;
        <Text as="span" fontWeight="bold" fontSize="md" mb={3}>
          {parseInt(props.depositAmount).toLocaleString('en-AU', localeOptions)}
        </Text>
        </Text>
        <Slider 
          aria-label='slider-deposit' 
          defaultValue={props.depositAmount}  
          min={0}
          max={1000000}
          step={1000}
          onChange={(value) => props.setDepositAmount(value)}
          >
          <SliderTrack bg="orange.300">
            <SliderFilledTrack bg="brand.brandOrange"/>
          </SliderTrack>
          <SliderThumb />
        </Slider>        
			</GridItem>
			<GridItem>
        <Text fontSize="sm">
          Mortgage Term | &nbsp;
          <Text as="span" fontWeight="bold" fontSize="md" mb={3}>{props.mortgageTerm} Years</Text>
        </Text>
        <Slider 
          aria-label='slider-term' 
          defaultValue={props.mortgageTerm}  
          min={5}
          max={30}
          step={1}
          onChange={(value) => props.setMortgageTerm(value)}
          >
          <SliderTrack bg="orange.300">
            <SliderFilledTrack bg="brand.brandOrange"/>
          </SliderTrack>
          <SliderThumb />
        </Slider> 
			</GridItem>
			<GridItem>
        <Text fontSize="sm">
          Interest Rate | &nbsp;
          <Text as="span" fontWeight="bold" fontSize="md" mb={3}>{props.interestRate}%</Text>
        </Text>
        <Slider 
          aria-label='slider-interest-rate' 
          // bg='brand.brandOrange' 
          defaultValue={props.interestRate}  
          min={0.1}
          max={10}
          step={0.1}
          onChange={(value) => props.setInterestRate(value)}
          >
          <SliderTrack bg="orange.300">
            <SliderFilledTrack bg="brand.brandOrange"/>
          </SliderTrack>
          <SliderThumb />
        </Slider>       
			</GridItem>
		</Grid>
	);
}