import React, {useState} from 'react'
import { Box, Flex, Heading, Text, Grid, GridItem, Icon, HStack, VStack, Collapse, Button, Center } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillStar } from 'react-icons/ai'

import { reviews } from '../../data/reviews'

export default function Reviews() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <section>
      <Flex align="center" justify="space-between" mb={7}>
        <Box borderTop="1px" w={["20%", "20%", 1/3]}/>
        <Heading as="h1" fontSize={["md", "md", "lg"]}>Our Clients Love Us</Heading> 
        <Box borderTop="1px" w={["20%", "20%",1/3]}/>
      </Flex>
      <Collapse startingHeight={200} in={show}>
        <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>
          {reviews.map(item => (
            <ReviewCard key={item.name} type={item.type} name={item.name} rating={item.rating} review={item.review} />
          ))}
        </Grid>
      </Collapse>
      <Center>
        <Box as="button" size='sm' onClick={handleToggle} mt={10} bg='brand.brandOrange' px={3} py={3} color="white" borderRadius={6} border="none" fontWeight="bold" borderColor="brand.brandOrange" _focus={"none"}>
          Show {show ? 'Less' : 'More'}
        </Box>
      </Center>
    </section>
  )
}

const ReviewCard = ({type, name, rating, review }) => {
  const stringLimit = 100

  const newArray = [...Array(rating)]

  return (
    <GridItem>
      <VStack p={5} boxShadow="md" position="relative" align="flex-start" borderRadius={6}>
        {type == 'Google' ? <Icon position="absolute" as={FcGoogle} top={5} right={5} w={7} h={7} /> : null }
        <Heading as="h1" fontSize="lg">{name}</Heading>
        <HStack spacing={1}>
          {newArray.map((e,i) => <Icon key={i} as={AiFillStar} w={4} h={4} fill="yellow.300"/>)}
        </HStack>
        <Text fontSize="sm" fontWeight="bold">
          {review.length > stringLimit ? review.slice(0, stringLimit) + '...' : review}
        </Text>
      </VStack>
    </GridItem>
  )
}