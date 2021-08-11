import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Main from './src/main';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ffffff'
    }
  };

  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}
