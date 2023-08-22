import { BsCardChecklist } from 'react-icons/bs'
import { IoMdTrendingUp } from 'react-icons/io'
import { GoHome } from 'react-icons/go'
import { TiDeviceDesktop, TiContacts } from 'react-icons/ti'
import { RiContactsBookLine } from 'react-icons/ri'
import { Icon } from '@chakra-ui/react'

export const sellData = [
  {
    icon: <Icon as={BsCardChecklist} w={8} h={8} />,
    title: 'Step-By-Step Guide of the Listing Process',
    description: 'When is the option period over? What can I expect from the appraisal process? We lay out the whole process for you, and walk with you through it.'
  },
  {
    icon: <Icon as={IoMdTrendingUp} w={8} h={8} />,
    title: 'Accurate Market Data to Decide The Right Listing Price',
    description: 'Our super agents use all of the market data available to us, to determine what the best price is for you to sell at, based on your situation.'
  },
  {
    icon: <Icon as={GoHome} w={8} h={8} />,
    title: 'Dedicated Landing Page For Your Home',
    description: 'Your home will receive its own personal web page on our website, complete with the ability for interested buyers to reach out and schedule an appointment.'
  },
  {
    icon: <Icon as={TiDeviceDesktop} w={8} h={8} />,
    title: 'Complete Digital Marketing Plan',
    description: 'Our comprehensive and detailed marketing plan is a proven system we use to ultimately get the attention of prospective buyers on your listing.'
  },
  {
    icon: <Icon as={TiContacts} w={8} h={8} />,
    title: 'Complete List of Preferred Vendors',
    description: 'We have a full list of preferred vendors: contractors, home-inspectors, staging services, etc. available for your use. Vendors we know and trust, who are seasoned in their craft, and understand the home-selling process'
  },
]