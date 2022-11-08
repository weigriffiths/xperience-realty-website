import { Box, Center, Heading, Text, VStack, Flex, Icon, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { IoHomeOutline,IoPeopleOutline } from 'react-icons/io5'
import { BsShieldCheck } from 'react-icons/bs'
import { GoLaw } from 'react-icons/go'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { BiDrink } from 'react-icons/bi'

export default function Why() {
  return (
    <section>
      <VStack spacing={4}>
        <Heading as="h1" color="brand.brandOrange" textTransform="uppercase" fontWeight="light">
          &quot;SURE, BUT WHY SHOULD I CHOOSE XPERIENCE REALTY?&quot;
        </Heading>
        <Heading as="h2" color="brand.brandPurple" fontWeight="bold" textTransform="uppercase">
          YOU ARE ON FIRE WITH THE QUESTIONS. I LOVE IT!
        </Heading>
          <Text fontSize="lg" lineHeight={2} textAlign="center">  
            Still not convinced? Alright, I guess we&apos;ll pull out the big guns. Property management isn&apos;t rocket science. However, it takes a certain kind of finesse to do, not just well, but fantastic. And it takes double that to be super at it.
          </Text>
          <Text fontSize="lg" lineHeight={2} textAlign="center">  
            Everyone&apos;s after a good property manager. But why stop there? Why not a great property manager? An excellent property manager. Nah, we reckon you can do better than that. We can do better than that. It&apos;s all in our title - super property managers. Property management so super it&apos;s an Xperience.
          </Text>
          <Text fontSize="lg" lineHeight={2} textAlign="center">  
            And it&apos;s not just a title. You see, we&apos;re genuine experts. In what, you make ask? Well…
          </Text>
      </VStack>
      <Box mt={5} />
      <Wrap py={2} justify="center" spacing={8}>
        <WrapItem >
          <ExpertsCard icon={IoHomeOutline} text="PROPERTY MARKET" />
        </WrapItem>
        <WrapItem>
          <ExpertsCard icon={GoLaw} text="PROPERTY LEGISLATION" />
        </WrapItem>
        <WrapItem >
          <ExpertsCard icon={HiOutlineBuildingOffice2} text="STRATA SCHEMES AND THE OWNERS’ CORPORATION" />
        </WrapItem>
        <WrapItem>
          <ExpertsCard icon={BsShieldCheck} text="SALES AND PROPERTY INSURANCE" />
        </WrapItem >
        <WrapItem >
          <ExpertsCard icon={BiDrink} text="FASHION AND RUM" />
        </WrapItem>
        <WrapItem >
          <ExpertsCard icon={IoPeopleOutline} text="CONNECTIONS! ABOVE BOARD, OF COURSE..." />
        </WrapItem>
      </Wrap>
    </section>
  )
}

const ExpertsCard = ({icon, text}) => {
  return (
    <Box p={5} boxShadow="md" border="1px" borderColor="brand.midGrey" borderRadius={7} w="150px" h="180px">
      <VStack spacing={4}>
        <Flex  mx="auto" align="center" justify="center" bgColor="brand.lightGrey" p={4} w={12} h={12} borderRadius={7}>
          <Icon as={icon} w={8} h={8}/>
          </Flex> 
        <Heading as="h2" fontSize="md" textAlign="center">{text}</Heading>
      </VStack>
    </Box>
  )
}