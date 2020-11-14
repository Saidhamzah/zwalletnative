import React, {useEffect, useState} from 'react';
import style from '../style/index';
import {View, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import ArrowLeft from '../../assets/icon/arrow-left.svg';
import PlusBlue from '../../assets/icon/plusBlue.svg';
import {useDispatch, useSelector} from 'react-redux';
import {getTopup} from '../../redux/actions/Topup';
import { FlatList } from 'react-native-gesture-handler'

export default function Topup({navigation}) {
  const dispatch = useDispatch();
  const User = useSelector((s) => s.User);
  const {data} = useSelector((s) => s.Topup);
  React.useEffect(() => {
    dispatch(getTopup());
  },[]);
  console.log(data.data, 'aaaaaaaaaaaaapaaaa');

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.navbar}>
          <View style={{flex: 2, marginLeft: 15}}>
            <ArrowLeft
              width="52"
              height="52"
              onPress={() => navigation.navigate('Dashboard')}
            />
          </View>
          <Text style={style.name}>Find Receiver</Text>
          <View style={{flex: 10}}></View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <PlusBlue width="52" height="52" />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, color: 'grey'}}>
                Virtual Account Number
              </Text>
              <Text style={{fontWeight: 'bold'}}>2389 081393877946</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 5}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: 'grey',
              textAlign: 'center',
              paddingTop: 50,
            }}>
            We provide you virtual account number for top up via nearest ATM.
          </Text>
        </View>
        <View style={{flex: 5}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'left',
              paddingTop: 30,
              paddingLeft: 10,
            }}>
            How to Top-Up
          </Text>
        </View>
        {data.data.map((item, index)=>{
          return(
            <View style={style.contentTopup} key={index}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                {item.stepNumber}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                {item.instruction}
              </Text>
            </View>
          </View>
        </View>
        )
        })}
        </ScrollView>
    </SafeAreaView>
    );
}
