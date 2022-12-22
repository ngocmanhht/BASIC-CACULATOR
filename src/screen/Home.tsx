import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  AppRegistry,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ActivityIndicator, FlatList } from 'react-native';
export const home = () => {


  const cong = require('../image/cong.png')
  const tru = require('../image/tru.png')
  const bang = require('../image/bang.png')
  const chia = require('../image/chia.png')
  const congTru = require('../image/cong-tru.png')
  const eight = require('../image/eight.png')
  const nine = require('../image/nine.png')
  const seven = require('../image/seven.png')
  const six = require('../image/six.png')
  const five = require('../image/five.png')
  const four = require('../image/four.png')
  const three = require('../image/three.png')
  const two = require('../image/two.png')
  const one = require('../image/one.png')
  const zero = require('../image/khong.png')
  const nhan = require('../image/nhan.png')
  const phay = require('../image/phay.png')
  const percent = require('../image/percent.png')
  const reset = require('../image/reset.png')
  const [data, setData] = useState([
    {

      name: 'reset',
      url: reset,
      funct: true
    },
    {

      name: '+/-',
      url: congTru,
      funct: true,
      //  special: true

    },
    {

      name: '%',
      url: percent,
      funct: true,
      special: true

    },
    {

      name: '/',
      url: chia,
      funct: true

    },
    {

      name: '7',
      url: seven,
      title: 7
    },
    {

      name: '8',
      url: eight,
      title: 8,

    },
    {

      name: '9',
      url: nine,
      title: 9

    },
    {

      name: 'x',
      url: nhan,
      funct: true

    },
    {

      name: '4',
      url: four,
      title: 4

    },
    {

      name: '5',
      url: five,
      title: 5

    },
    {

      name: '6',
      url: six,
      title: 6

    },
    {

      name: '-',
      url: tru,
      funct: true

    },
    {

      name: '1',
      url: one,
      title: 1
    },
    {

      name: '2',
      url: two,
      title: 2

    },
    {

      name: '3',
      url: three,
      title: 3

    },
    {

      name: '+',
      url: cong,
      funct: true

    },
    {

      name: '0',
      url: zero,
      title: 0
    },
    {

      name: 'phay',
      url: phay,
      funct: true,
      special: true


    },
    {

      name: 'bang',
      url: bang,
      funct: true,
      special: true


    },

  ])

  const [key, setKey] = useState('0')
  const [fkey, setFkey] = useState(0)
  const [dk, setDk] = useState(false)
  const initialState = {
    currentValue: `${key}`,
    function: '',
    nextValue: '0'

  }

  const resetInitialState = ((currentValue, nextValue, yc) => {
    currentValue = '0'
    nextValue = '0'
    yc = ''
  })
  function tinhToan(currentValue, nextValue, yc) {

    switch (yc) {
      case '+':
        return parseFloat(currentValue) + parseFloat(nextValue);
      case '-':
        return parseFloat(currentValue) - parseFloat(nextValue);
      case 'x':
        return parseFloat(currentValue) * parseFloat(nextValue);
      case '/':
        return parseFloat(currentValue) / parseFloat(nextValue);
      case '+/-':
        return parseFloat(currentValue) * -1;
      default:
        return currentValue
    }
  }
  const inContent = (() =>

    data.map((data) =>
      <View style={styles.function}>
        <TouchableOpacity onPress={() => {
          if (data.funct === undefined) {
            if (initialState.function == '') {
              initialState.currentValue = `${initialState.currentValue}${data.title}`;
            }
            else {

              initialState.nextValue = `${initialState.nextValue}${data.title}`;
            }
          }
          else {
            if (data.special != true) {
              initialState.function = data.name;
            }
          }
          if (data.name == 'phay') {
            initialState.currentValue = `${initialState.currentValue}.`
          }
          if (data.name == '+/-') {
            let kq = tinhToan(initialState.currentValue, initialState.nextValue, initialState.function)
            setKey(kq)
          }

          if (data.name == '%') {
            let kq = parseFloat(initialState.currentValue) / 100;
            setKey(String(kq))

          }
          if (data.name === 'reset') {

            initialState.currentValue = '0'
            initialState.nextValue = '0'
            initialState.function = ''
            setKey('0')

          }
          if (data.name == 'bang') {
            let kq = tinhToan(initialState.currentValue, initialState.nextValue, initialState.function)
            kq = Math.round(kq * 1000) / 1000
            console.warn(initialState.currentValue)
            console.warn(initialState.nextValue)
            setKey(kq)
            console.log(kq)
          }
        }}
        >
          <Image style={{ width: 50, height: 50 }} source={data.url} />
        </TouchableOpacity>
      </View>
    )


  )
  return (
    <View>
      <View style={{ backgroundColor: '#000000', height: '25%' }}>
        {
          <Text style={styles.text}>{key}</Text>
        }
      </View>
      <View style={{ backgroundColor: '#000000', height: '80%', flexDirection: 'row', flexWrap: 'wrap', paddingTop: 5 }}>
        {
          inContent()
        }
      </View>
    </View>

  )
}
export default home;

const styles = StyleSheet.create({
  function: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#a5a5a5',
    justifyContent: 'center',
    paddingLeft: 15,
    marginVertical: 5,
    marginHorizontal: 2
  },
  text:
  {
    fontSize: 80,
    color: 'white',
    alignSelf: 'flex-end',
    paddingTop: 100
  }

})
