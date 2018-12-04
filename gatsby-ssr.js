import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import React from 'react';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(bodyComponent);
  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([sheet.getStyleElement()]);
};
