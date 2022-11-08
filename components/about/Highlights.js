import { Box, Flex, Image, VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Highlights() {
  return (
    <section>
      <Flex direction={["column", "column", "row", "row", "row"]} align="center" justify={["space-around", "space-around", "space-between"]}>
        <Image borderRadius={8} boxShadow="lg" objectFit="cover" alt="milton office" src="/milton-office.webp" maxW={["100%", "100%", "100%", "100%", "500px"]} minW={["250px"]}/>
        <VStack spacing={3} align="start" maxW={["100%","100%","50%", "50%"]} mt={[4, 4, 0]} ml={[0,0,6]} lineHeight={2}>
          <Heading as="h1" fontSize="2xl" textColor="brand.brandPurple" textTransform="uppercase">Humble Beginnings </Heading>
          <Text>So great, we have an awesome mission, everything should fall into place right? Well not exactly.</Text>
          <Text>If you&apos;ve ever watched a hero&apos;s origin story then you&apos;ll know that the hero always starts off as an underdog, and everyone loves a good underdog story. Ours starts with a humble little office. By humble, we mean a 15 m² office small bedroom with no windows (well that&apos;s not exactly true, we did have a framed picture of the sky to stop us all from going mad). But hey, we had an HQ, and things could only go uphill from here.</Text>
        </VStack>
      </Flex>
      <Box mt={8} />
      <Flex direction={["column", "column", "row", "row", "row"]} align="center" justify={["space-around", "space-around", "space-between"]}> 
        <VStack spacing={3} align="start" maxW={["100%","100%","50%", "50%"]} mt={[4, 4, 0]} ml={[0,0,6]} lineHeight={2}>
          <Heading as="h1" fontSize="2xl" textColor="brand.brandPurple" textTransform="uppercase">But from there </Heading>
          <Text>we moved into something a little roomy and more naturally lit with our Auchenflower office. Finally we had a space that we were proud to welcome clients into.</Text>
          <Text>But it still wasn&apos;t enough. It still didn&apos;t have the cool out-of-this-world look that we&apos;d always wanted. So eventually, we were finally able to move into the space of our dreams in Toowong. No wall was left uncovered with all the colours and rum shelves that would make any other business owner cry with jealousy. Over the top? Maybe. But who wouldn&apos;t want to walk in to sign a contract or lease in this pop-culture wonderland!</Text>
        </VStack>
        <Image borderRadius={8} boxShadow="lg" objectFit="cover" alt="auchenflower office" src="/auchenflower-office.webp" maxW={["100%", "100%", "100%", "100%", "500px"]} minW={["250px"]}/>
      </Flex>

    </section>
  )
}
