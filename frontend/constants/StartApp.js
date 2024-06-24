import { View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'

const StartApp = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate("Main")
  }, []);
  
  return <SafeAreaView/>
}

export default StartApp