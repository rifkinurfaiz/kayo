import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Main from './src/main';
import colors from './src/Assets/Colors';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary.white
    }
  };

  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}
