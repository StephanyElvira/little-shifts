import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Libre Baskerville', serif`,
    body: `'Quicksand', sans-serif`,
    accent: `'Birthstone', serif`,
  },
  colors: {
    brand: {
      50: "#F4E6DA",
      100: "#EBD5BF",
      200: "#D7B89C",
      300: "#C79D77",
      400: "#B88355",
      500: "#86A788",
      600: "#6D8E70",
      700: "#58785C",
      800: "#3C5B43",
      900: "#2B4031",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "'Libre Baskerville', sans-serif",
        color: "brand.400",
        fontSize: "sm",
      },
    },
  },

  styles: {
    global: {
      body: {
        bg: "#F2E0D0",
        color: "gray.900",
        backgroundImage: "url('/wave-pattern3.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "100% 30vh",
      },
    },
  },
});

export default theme;
