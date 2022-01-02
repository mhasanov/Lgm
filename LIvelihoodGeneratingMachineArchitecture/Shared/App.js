import React, { useState } from 'react';
import * as Font from 'expo-font';
import{ AppLoading } from 'expo';
import RootStackScreen from "./app/screens/RootStackScreen";



export default function App() {
  const [userToken, setUserToken] = React.useState(null);

  return (
    RootStackScreen()
  );
}