// ====================================================================================
// export default {
//   // The parts of the component
//   parts: [],
//   // The base styles for each part
//   baseStyle: {},
//   // The size styles for each part
//   sizes: {},
//   // The variant styles for each part
//   variants: {},
//   // The default `size` or `variant` values
//   defaultProps: {},
// }
// ====================================================================================


import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(['menu', 'item'])

export const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    menu: {
      boxShadow: 'lg',
      rounded: 'lg',
      flexDirection: 'column',
      py: '2',
    },
    item: {
      fontWeight: 'medium',
      lineHeight: 'normal',
      color: 'gray.600',
    },
  },
  sizes: {
    sm: {
      item: {
        fontSize: '0.75rem',
        px: 2,
        py: 1,
      },
    },
    md: {
      item: {
        fontSize: '0.875rem',
        px: 3,
        py: 2,
      },
    },
  },
  variants: {
    bold: {
      item: {
        fontWeight: 'bold',
      },
      menu: {
        boxShadow: 'xl',
      },
    },
    colorful: {
      item: {
        color: 'orange.600',
      },
      menu: {
        bg: 'orange.100',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
})