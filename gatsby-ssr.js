import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import React from 'react';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();

  const app = (
    <StyleSheetManager sheet={sheet.instance}>
      {React.cloneElement(bodyComponent)}
    </StyleSheetManager>
  );

  const bodyHTML = renderToString(app);

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([sheet.getStyleElement()]);
};
