import React from 'react';
import style from '../style/index';
import {View, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import ProfilePictSamuel from '../../assets/icon/Samuel.svg';
import ArrowLeft from '../../assets/icon/arrow-left.svg';
export default function InputAmount({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.navbar}>
          <View style={{flex: 2, marginLeft: 15}}>
            <ArrowLeft
              width="52"
              height="52"
              onPress={() => navigation.navigate('Search')}
            />
          </View>
          <Text style={style.name}>Find Receiver</Text>
          <View style={{flex: 10}}></View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <ProfilePictSamuel width="52" height="52" />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Samuel Suhi
              </Text>
              <Text>+628578219238</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            marginHorizontal: 120,
          }}>
          <View style={{flex: 5}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '700',
                color: 'grey',
                textAlign: 'left',
                paddingTop: 50,
              }}>
              Rp.120.000 Available
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            marginHorizontal: 120,
            paddingBottom: 40,
            paddingtop: 50,
          }}>
          <View style={[style.contentNote, {flex: 5}]}>
            <TextInput placeholder="0.00" style={{fontSize: 40}} />
          </View>
        </View>
        <View style={style.contentNote}>
          <TextInput
            style={style.formInputEmailFilled}
            placeholder="Add some notes"
            autoCapitalize={'none'}
            returnKeyType="next"
          />
        </View>
        <View style={style.positionCenter}>
          <Button
            style={
              style.buttonSubmitFilled
            }
            // onPress={() => onSubmit()}
            >
            <Text
              style={
                style.textButtonLoginFilled
              }>
              {' '}
              Submit
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
