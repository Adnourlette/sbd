import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const InputIcon = ({
  value,
  title,
  placeholder,
  password,
  width,
  height,
  backgroundColor,
  icon,
  onChangeText
}) => {
  const defaultHeight = height ?? 40
  const iconSize = defaultHeight / 2
  const [showPassword, setShowPassword] = useState(password)

  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{ marginHorizontal: 10 }}>{title}:</Text>
      <View style={{ flexDirection: "row", height: defaultHeight, width: width }}>
        <View
          style={{
            borderWidth: 1,
            width: "10%",
            backgroundColor: backgroundColor ?? 'lightgray',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Ionicons name={icon} size={iconSize} color="black" />
        </View>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={showPassword}
          style={{
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            width: "90%",
            backgroundColor: backgroundColor ?? 'lightgray',
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 10
          }}
          onChangeText={onChangeText}
          value={value}
        />
        {password &&
          <View
            style={{
              position: 'absolute',
              height: "100%",
              width: "10%",
              left: "88%",
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableWithoutFeedback 
              onPressIn={() => setShowPassword(false)}
              onPressOut={() => setShowPassword(true)}
            >
              <Ionicons name={"eye-outline"} size={iconSize} color="black" />
            </TouchableWithoutFeedback>
          </View>
        }
      </View>
    </View>
  )
}

export default InputIcon