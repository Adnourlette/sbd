import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { InputIcon, Button } from '../components'
import { colors } from '../constants'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    navigation.navigate("Register")
  }

  const handleSend = () => {
    navigation.navigate("Forgot")
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>
          Forgot password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputIcon
          title={"Email"}
          placeholder={"Email"}
          icon={"mail-outline"}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <Button
        icon={"log-in-outline"}
        title={"Send Email"}
        onPress={() => handleSend()}
      />
        <Text style={styles.askFont}>
          Don't have an accout?
        </Text>
      <TouchableOpacity 
        onPress={() => handleRegister()}
      >
        <Text style={styles.registerFont}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleFont: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  registerFont: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: colors.blue,
  },
  inputContainer: {
    width: '90%',
  },
  forgotFont: {
    fontSize: 12,
    color: colors.blue,
    right: 115,
  },
  askFont: {
    fontSize: 14,
    marginBottom: 10,
  },
})