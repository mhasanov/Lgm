import React, { useState } from 'react';
import * as Font from 'expo-font';
import{ AppLoading } from 'expo';
import Navigator from "./app/screens/RootStackScreen";



export default function App() {
  const [fontLoaded, setFontLoaded] = useState(true);

  return (
    Navigator()
  );
}