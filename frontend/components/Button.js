import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import { Ionicons } from '@expo/vector-icons'

const Button = ({
  title,
  icon,
  width,
  onPress
}) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: colors.white,
        width: width ?? "70%",
        paddingVertical: 15,
        borderRadius: 20,
        borderWidth: 1,
        marginVertical: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
      }} 
      onPress={onPress}
    >
      <Ionicons 
        name={icon} 
        size={25} 
        color="black" 
      />
      <Text  
        style={{
          marginHorizontal: 5,
          fontSize: 17,
          fontWeight: 'bold'
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button