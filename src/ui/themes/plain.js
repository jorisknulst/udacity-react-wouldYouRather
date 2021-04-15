export const plain = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#4e4e4e",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6"
  },
  images: {
    john: "../../../images/avatar_john.png",
    sarah: "../../../images/avatar_sarah.png",
    tyler: "../../../images/avatar_tyler.png",
    avatar: {
      width: 150,
      height: 150,
      borderRadius: "50%"
    },
    smallavatar: {
      width: 50,
      height: 50,
      borderRadius: "50%"
    }
  },
  badges: {
    primary: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "gold",
      color: "gray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "-25px",
      right: "-25px"
    }
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    }
  },
  forms: {
    input: {
      margin: "20px 0px"
    }
  },
  cards: {
    primary: {
      padding: 3,
      minWidth: "200px",
      borderRadius: 4,
      margin: "25px 0px",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)"
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      margin: "auto",
      maxWidth: "400px",
      minWidth: "200px",
      border: "1px solid",
      borderColor: "muted"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      variant: "text.heading",
      fontSize: 5
    },
    h2: {
      variant: "text.heading",
      fontSize: 4
    },
    h3: {
      variant: "text.heading",
      fontSize: 3
    },
    h4: {
      variant: "text.heading",
      fontSize: 2
    },
    h5: {
      variant: "text.heading",
      fontSize: 1
    },
    h6: {
      variant: "text.heading",
      fontSize: 0
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    }
  }
};
