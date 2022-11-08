import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    "brandDark": '#2C3539',
    "brandOrange": '#ff6900', 
    "brandAmber": '#fcb900',
    "brandLightPurple": "#9b51e0",
    "brandPurple": "#5f358f",
    "brandBlack": '#000',
    "lightGrey": '#f6f6f6',
    "midGrey": "#ececec",
    "darkGrey": "#d4d4d4",
    "hoverGrey": "#B7B7B7",
  },
}

const theme = extendTheme({ 
  colors,
  // fonts: {
  //     heading: `'Metropolis Bold', sans-serif`,
  //     body: `'Inter', sans-serif`,
  // }

})

export default theme