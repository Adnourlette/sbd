import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { InputIcon, Button } from '../components'
import { colors } from '../constants'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'; 

const Login = ({ navigation, route }) => {
  const [username, setUsername] = useState("admin")
  const [password, setPassword] = useState("123456")

  useEffect(() => {
    if (route?.params) {
      setUsername(route.params.user)
    }
  }, [route?.params]);

  const handleLogin = async() => {
    if (
      username == "" ||
      password == ""
    ) {
      //Alert Something...
      return;
    }
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    const response = await fetch(
      "http://192.168.1.41:8080/api/login", 
      {
        method: "POST",
        body: formdata
      }
    ).then((response) => response.json());
    if (response.result !== false) {
      navigation.navigate("Home", { user: response })
    } else {
      //Alert Something...
    }
  }

  const handleRegister = () => {
    navigation.navigate("Register")
  }

  const handleForgot = () => {
    navigation.navigate("Forgot")
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>
          LOGIN
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputIcon
          title={"Username"}
          placeholder={"username"}
          icon={"person-outline"}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <InputIcon
          title={"Password"}
          placeholder={"password"}
          icon={"key-outline"}
          password={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity 
        onPress={() => handleForgot()}
      >
      <Text style={styles.forgotFont}>
          Forgot Password?
      </Text>
      </TouchableOpacity>
      <Button
        icon={"log-in-outline"}
        title={"Login"}
        onPress={() => handleLogin()}
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