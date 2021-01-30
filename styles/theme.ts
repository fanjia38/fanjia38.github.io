import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: () => ({
    "html, body": {
      color: "dark",
      lineHeight: "tall"
    }
  })
}
const fonts = {
  body: "'Montserrat', sans-serif",
  heading: "'Montserrat', sans-serif",
}
const components = {
  Container: {
    baseStyle: {
      border: "1px solid #589738",
      borderRadius: "8px",
      padding: "8px",
      width: "100%"
    }
  },
  Link: {
    baseStyle: {
      color: "#ffa500",
      textDecoration: "none"
    }
}
}

const theme = extendTheme({ styles, fonts, components })
export default theme