import React from 'react';
import style from '../style/index';
import {View, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import ProfilePictSamuel from '../../assets/icon/Samuel.svg';
import ArrowLeft from '../../assets/icon/arrow-left.svg';
import ProfileNetflix from '../../assets/icon/netflix.svg';
export default function Search({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        {/* Navbar */}
        <View style={style.navbar}>
          {/* photo here */}
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
        <View style={{paddingHorizontal:20}}>
          <TextInput
            style={style.formInputSearch}
            placeholder="Search receiver here"
            autoCapitalize={'none'}
            //   onChangeText={(text) => setEmail(text)}
            //   onSubmitEditing={() => inputPassword.current.focus()}
            returnKeyType="next"
          />
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'flex-end'}}>
          <View style={{flex: 5, marginLeft: 17}}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 17,
                fontWeight: '700',
                color: 'black',
                textAlign: 'left',
              }}>
              All Contacts
            </Text>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 13,
                fontWeight: '700',
                color: 'grey',
                textAlign: 'left',
              }}>
              17 contacts found
            </Text>
          </View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <ProfilePictSamuel width="52" height="52" onPress={() => navigation.navigate('InputAmount')}/>
            </View>
            <View 
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text onPress={() => navigation.navigate('InputAmount')} style={{fontSize: 16, fontWeight: 'bold'}}>
                Samuel Suhi
              </Text>
              <Text onPress={() => navigation.navigate('InputAmount')}>+628578219238</Text>
            </View>
          </View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <ProfileNetflix width="52" height="52" />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Netflix</Text>
              <Text>+6291283871239</Text>
            </View>
          </View>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}
