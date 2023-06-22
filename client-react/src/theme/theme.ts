import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: `'Gotham', helvetica, arial, sans-serif`,
        color: "var(--ice)",
        background: "var(--siphon)",
      },
    },
  },
  colors: {
    'sohoLights': "var(--sohoLights)",
    'hemocyanin': "var(--hemocyanin)",
    'purpleHaze': "var(--purpleHaze)",
    'plum': "var(--plum)",
  },
  components: {
    Button: {
      variants: {
        'sohoLights': {
          background: "var(--sohoLights)",
        }
      }
    }
  }
})