import { Flex, Box, Divider, Grid, GridItem, Heading, Image, Link, Text, HStack, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'

import { team } from '../../data/team'

export default function TeamList() {

  return (
    <section>
      <Box textAlign="center" py={10}>
        <Heading as="h1" fontSize="4xl" mb={4} fontWeight="extrabold" textTransform="capitalize" textColor="brand.brandOrange"> Meet Your Super Agents!</Heading>
        <Text fontSize="md" fontWeight="bold">We have a full team of office staff and realtors ready to help you</Text>
      </Box>
      <Divider />
      <Box mt={16} />
      <Grid templateColumns={['1fr', '1fr', 'repeat(2,1fr)', 'repeat(3,1fr)']} gap={8} justifyItems="center">
        {team.map(member => (
          <TeamCard key={member.id} imgUrl={member.imgUrl} hoverImgUrl={member.hoverImgUrl} name={member.name} title={member.title} phone={member.phone} email={member.email} />
        ))}
      </Grid>
    </section>
  )
}

const TeamCard = ({imgUrl, hoverImgUrl, name, title, phone, email}) => {
  const [image, setImage] = useState(imgUrl)
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false)

  const handleTogglePhone = () => {
    setShowPhone(!showPhone)
    // showEmail ? setShowEmail(!showEmail) : null
  }

  const handleToggleEmail = () => {
    setShowEmail(!showEmail)
    // showPhone ? setShowPhone(!showPhone) : null
  }

  return (
    <GridItem w={["200px", "250px", "300px", "300px"]} boxShadow="md" borderRadius={20} position="relative" >
              <Image src="/x-badge.svg" position="absolute" top={-4} right={4} alt="x badge" w={"70px"}/>
              <Link href="/agent/:id">
                <Image 
                  className="flash"
                  src={image} 
                  alt={name} 
                  borderRadius={20} 
                  onMouseEnter={() => setImage(hoverImgUrl)}
                  onMouseLeave={() => setImage(imgUrl)}
                  />
              </Link>
              <Flex bg="white" position="absolute" bottom={0} right={0} w="full" align="center">
                  <Box px={2} py={3} borderRight={1} w={showPhone ? "100%" : "50%"} textAlign="center" fontWeight="bold" onClick={handleTogglePhone} cursor="pointer" display={showEmail ? "none" : null}>
                    {showPhone ? phone : "Call"}
                  </Box>
                  <Spacer borderRight="1px" borderColor="brand.midGrey" />
                  <Box px={2} py={3} textAlign="center" w={showEmail ? "100%" : "50%"} fontWeight="bold" fontSize={showEmail? "xs": "md"} onClick={handleToggleEmail} cursor="pointer" display={showPhone ? "none" : null}>
                    {showEmail ? email : "Email"}
                  </Box>
              </Flex>
          </GridItem>
  )
}