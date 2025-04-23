import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Playwrite NL', serif`,
    body: `'Quicksand', sans-serif`,
  },
  colors: {
    brand: {
      50: "#FFFDEC", // warm cream
      100: "#FFF5F5", // ultra light pink
      200: "#FFE2E2", // soft powder pink
      300: "#FFCFCF", // blush
      400: "#F8BDBD", // warm pink
      500: "#86A788", // sage green (main accent!)
      600: "#6D8E70", // darker sage
      700: "#58785C", // foresty green
      800: "#3C5B43", // deep leafy tone
      900: "#2B4031", // dark forest
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
        variant: "notebook",
      },
      variants: {
        notebook: {
          bg: "brand.100",
          color: "gray.800",
          border: "1px solid",
          borderColor: "brand.200",
          borderRadius: "md", // not too round
          boxShadow: "sm", // subtle lift
          fontWeight: "medium",
          _hover: {
            bg: "brand.200",
          },
          _active: {
            bg: "brand.300",
            transform: "translateY(1px)",
          },
        },
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
