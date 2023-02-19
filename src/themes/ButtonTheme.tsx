import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const brandPrimary = defineStyle({
  bgColor: 'brand.Charcoal',
  color: 'brand.Cream',
  fontFamily: 'Poppins', // change the appearance of the border
  borderRadius: '2px', // remove the border radius
  fontWeight: 'regular', // change the font weight
  _hover: {
    filter: 'brightness(1.25)'
  },
  _active: {
    transform: 'scale(.98)'
  }
})

const brandSecondary = defineStyle({
  bgColor: 'transparent',
  color: 'brand.Charcoal',
  border: '1px solid',
  borderColor: 'brand.Charcoal',
  fontFamily: 'Poppins', // change the appearance of the border
  borderRadius: '2px', // remove the border radius
  fontWeight: 'regular', // change the font weight
})

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary, brandSecondary },
})