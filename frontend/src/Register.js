import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, InputIcon } from '../components'
import { colors } from '../constants'
import { SimpleLineIcons } from '@expo/vector-icons'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = async() => {
    if (
    username == "" ||
    password == "") {
      //Alert Something...
      return;
    } else if (password !== confirmPassword) {
      //Alert Something...
      return;
    } else if (password.length < 6) {
      //Alert Something...
      return;
    } else {
      let formdata = new FormData();
      formdata.append("username", username);
      formdata.append("password", password);
      try {
        await fetch(
          "http://192.168.1.41:8080/api/saveUser", 
          {
            method: "POST",
            body: formdata
          }
        );
        navigation.navigate("Login", { user: username })
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>
          REGISTER
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
        <InputIcon
          title={"Confirm Password"}
          placeholder={"Confirm password"}
          icon={"key-outline"}
          password={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </View> 
      <Button
        icon={"log-in-outline"}
        title={"Create Account"}
        onPress={() => handleRegister()}
      />   
    </View>
  )
}

export default Login;

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
  buttonFont: {
    fontSize: 17,
    fontWeight: 'bold',
    right: 20,
  },
  inputContainer: {
    width: '90%',
  },
  buttonContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 20,
    flexDirection: "row"
  }
})
