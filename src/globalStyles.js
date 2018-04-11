import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { textColour, headingColour, backgroundAlt } from './variables';
 
injectGlobal`
  ${styledNormalize}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: ${backgroundAlt};
    color: ${textColour};
    font-family: 'Lato', sans-serif;
    font-size: 1em;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, caption, th, td, input, textarea, select, option, legend, fieldset, h1, h2, h3, h4, h5, h6 {
    font-size-adjust: 0.5;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${headingColour};
    line-height: 1.25;
  }

  b {
    color: ${headingColour};
  }

  h1 { font-size: 2.5em; }
  h2 { font-size: 1.75em; }
  h3 { font-size: 1.35em; }
  h4 { font-size: 1.1em; }
  h5 { font-size: 0.9em; }
  h6 { font-size: 0.75em; }
`;