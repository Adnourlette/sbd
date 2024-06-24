import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../constants'
import moment from 'moment'



const Home = ({ navigation, route }) => {
  const { user } = route?.params
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    getPackage();
  }, []);

  const getPackage = async() => {
    const response = await fetch(
      "http://192.168.1.41:8080/api/getPackage"
    ).then((response) => response.json());
    if (response.result !== false) {
      setItemList(response)
    } else {
      //Alert Something...
    }
  }

  const updatePackage = async(item) => {
    let formdata = new FormData();
    formdata.append("packageid", item.packageid);
    const response = await fetch(
      "http://192.168.1.41:8080/api/updatePackage", 
      {
        method: "POST",
        body: formdata
      }
    ).then((response) => response.json());
    if (response.result !== false) {
      getPackage();
    } else {
      //Alert Something...
    }
  }

  const handleButton = (item) => {
    Alert.alert(item.detail, 'ยืนยันที่จะรับพัสดุใส่หรือไม่?', [
      {
        text: 'ยกเลิก',
      },
      {
        text: 'ตกลง',
        onPress: () => updatePackage(item)
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleFont}>
          Smart Box Delivery 
        </Text>
      </View>
      <View style={styles.backgroundUser}>
        <Text style={styles.chatFont}>
          Notification
        </Text>
        <ScrollView>
          {itemList?.map((item, index) => (
          <TouchableOpacity 
            key={index}
            disabled={item.status}
            style={styles.buttonContainer} 
            onPress={() => handleButton(item)}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.picture}/>
              <View style={styles.chatContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.chatFont2}>
                    {item.name}
                  </Text>              
                  <Text style={styles.chatFont2}>
                    {moment(item.date).format("HH.mm น.")}
                  </Text>
                </View>
                <Text style={[
                  styles.chatFont3,
                  {
                    color: item.status ? colors.white : colors.red
                  }
                  ]}>
                  {
                    item.status ? 
                    "พัสดุคุณได้ถูกรับไปแล้ว" : 
                    "คุณยังไม่ได้รับพัสดุ"
                  }
                </Text>
              </View>
            </View>
            <View style={styles.underLine}/>
          </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  backgroundUser: {
    alignItems: 'center',
    backgroundColor: '#FED08C',
    width: '100%',
    flex: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cream,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleFont: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  chatContainer: {
    width: '80%',
    marginVertical: 5
  },
  chatFont: {
    fontSize: 20,
    marginVertical: 10
  },
  chatFont2: {
    fontSize: 16,
  },
  chatFont3: {
    fontSize: 16,
    color: colors.white,
  },
  buttonContainer: {
    width: '100%',
  },
  underLine: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: colors.white,
    height: 1,
    marginVertical: 1
  },
  picture: {
    width: 40, 
    backgroundColor: colors.white, 
    borderRadius: 50,
    height: 40,
    margin: 10
  },
})