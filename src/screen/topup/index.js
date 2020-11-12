import React from 'react';
import style from '../style/index';
import {View, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import ArrowLeft from '../../assets/icon/arrow-left.svg';
import PlusBlue from '../../assets/icon/plusBlue.svg';
export default function Topup({navigation}) {
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
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                1
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                Go to the nearest ATM or you can use E-Banking.
              </Text>
            </View>
          </View>
        </View>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                2
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                Type your security number on the ATM or E-Banking.
              </Text>
            </View>
          </View>
        </View>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                3
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                Select “Transfer” in the menu.
              </Text>
            </View>
          </View>
        </View>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                4
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                Type the virtual account number that we provide you at the top.
              </Text>
            </View>
          </View>
        </View>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                5
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                Type the amount of the money you want to top up.
              </Text>
            </View>
          </View>
        </View>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                6
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                Read the summary details.
              </Text>
            </View>
          </View>
        </View>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                7
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                Press transfer / top up.
              </Text>
            </View>
          </View>
        </View>
        <View style={style.contentTopup}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <Text
                style={[
                  style.font50p,
                  {fontSize: 20, color: '#6379F4', fontWeight: 'bold'},
                ]}>
                8
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 17, color: 'grey', lineHeight: 28}}>
                You can see your money in Zwallet within 3 hours.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
