import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
    fonts: {
        body: 'Maven Pro, sans-serif',
        heading: 'Maven Pro, sans-serif',
        mono: 'Menlo, monospace',
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700,
    },
    space: {
        "28": '28px',
        "42": '42px',
        "44": '44.65px',
    },
    fontSizes: {
        xs: "18px",
        sm: "20px",
        md: "22px",
        lg: "26px",
        xl: "28px",
        "2xl": "38px",
    },
    colors: {
        gray: {
            100: '#F2F2F2',
            200: '#4A4A4A',
            300: '#141414',
            400: '#101010',
        }
    },
    components: {
        Heading: {
            variants: {
                large: { fontSize: '2xl', color: 'gray.400'},
                normal: { fontSize: 'xl', color: 'gray.400' },
            },
        },
        Text: {
            variants: {
                small: { fontSize: 'xs', color: 'gray.200' },
                normal: { fontSize: 'sm', color: 'gray.200' },
                large: { fontSize: 'lg' },
            },
        },
        Button: {
            variants: {
                link: {
                    bg: 'transparent',
                    color: 'gray.200',
                    border: '0',
                    _hover: { color: 'gray.100', textDecoration: 'none' },
                    _focus: { color: 'gray.100', boxShadow: '0' },
                }
            }
        },
    },

});

export default customTheme;