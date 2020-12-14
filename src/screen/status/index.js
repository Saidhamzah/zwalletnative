import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  ToastAndroid,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import style from '../style';
import moment from 'moment';
import {RectButton} from 'react-native-gesture-handler';
import Success from '../../assets/icon/success.svg';
import Failed from '../../assets/icon/failed.svg';

export default function Status({navigation}) {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const authorization = {Authorization: Auth.data.token.token};
  const {data, message, isSuccess} = useSelector((state) => state.Transfer);
  const userTransfer = useSelector((s) => s.getSearchTransfer);
  const userReceiver = userTransfer.data.data[0];

  useEffect(() => {
    if (isSuccess) {
      console.log(userReceiver,'receiver')
      console.log(userTransfer,'Transfer')
      console.log(isSuccess,'dataTransfer sukses')
        
    }
}, [isSuccess]);
  const splitFormat = (number) => {
    let newNumber = number.toString().split('').reverse().join('');
    let finalNumber = '';
    for (let i = 0; i < newNumber.length; i++) {
      if (i > 0 && i % 3 == 0) {
        finalNumber += '.';
      }
      finalNumber += newNumber.charAt(i);
    }
    return finalNumber.split('').reverse().join('');
  };

  return (
    <>
      <StatusBar backgroundColor={'#FFFFFF'} />
      <SafeAreaView>
        <View>
          <ScrollView
            style={{height: '100%', backgroundColor: '#FAFCFF'}}>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
              }}>
              <View style={{alignItems: 'center'}}>
                <View style={{marginBottom: 30}}>
                  {!isSuccess ? (
                    <Success width={70} height={70} />
                  ) : (
                    <Failed width={70} height={70} />
                  )}
                </View>
                <Text
                  style={{
                    color: '#4D4B57',
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginBottom: 35,
                  }}>
                  Transfer {isSuccess ? 'Success' : 'Failed'}
                </Text>
                {isSuccess ? (
                  <Text
                    style={{
                      color: '#7A7886',
                      fontSize: 16,
                      marginBottom: 35,
                      textAlign: 'center',
                      lineHeight: 27,
                    }}>
                    We can’t transfer your money at the moment, we recommend you
                    to check your internet connection and try again.
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
              <View style={style.textLeft}>
                <Text
                  style={{color: '#514F5B', fontWeight: 'bold', fontSize: 15}}>
                  Details
                </Text>
              </View>
              <View style={style.contentHistory}>
                <View style={{flex: 5, flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'NunitoSans-Regular',
                        color: 'grey',
                      }}>
                      Amount
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: 'NunitoSans-Regular',
                        color: '#3A3D42',
                        fontWeight: 'bold',
                      }}>
                      Rp {splitFormat(data.amountTransfer)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={style.contentHistory}>
                <View style={{flex: 5, flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'NunitoSans-Regular',
                        color: 'grey',
                      }}>
                      Balance Left
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: 'NunitoSans-Regular',
                        color: '#3A3D42',
                        fontWeight: 'bold',
                      }}>
                      Rp {splitFormat(data.balanceLeft)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={style.contentHistory}>
                <View style={{flex: 5, flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'NunitoSans-Regular',
                        color: 'grey',
                      }}>
                      Date & Time
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: 'NunitoSans-Regular',
                        color: '#3A3D42',
                        fontWeight: 'bold',
                      }}>
                      {moment().format('LL')} - {moment().format('LT')}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={style.contentHistory}>
                <View style={{flex: 5, flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'NunitoSans-Regular',
                        color: 'grey',
                      }}>
                      Notes
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontFamily: 'NunitoSans-Regular',
                        color: '#3A3D42',
                        fontWeight: 'bold',
                      }}>
                      {data.note}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={style.textLeft}>
                <Text
                  style={{color: '#514F5B', fontWeight: 'bold', fontSize: 15}}>
                  Transfer to
                </Text>
              </View>

              <View style={style.contentHistory}>
                <View style={{flex: 5, flexDirection: 'row'}}>
                  <View>
                    <Image
                      style={{
                        borderRadius: 10,
                        width: 52,
                        height: 52,
                        marginRight: 10,
                      }}
                      source={{uri: userReceiver.img}}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      {userReceiver.fullName}
                    </Text>
                    <Text
                      style={{fontFamily: 'NunitoSans-Regular', color: 'grey'}}>
                      +{userReceiver.phoneNumber}
                    </Text>
                  </View>
                </View>
              </View>
              {!isSuccess ? (
                <RectButton
                  onPress={() => navigation.replace('Dashboard')}
                  style={styles.buttonPrimary}>
                  <Text style={{color: '#FFFFFF', fontSize: 18}}>
                    Back to Home
                  </Text>
                </RectButton>
              ) : (
                <RectButton
                  onPress={() => navigation.replace('Search')}
                  style={styles.buttonPrimary}>
                  <Text style={{color: '#FFFFFF', fontSize: 18}}>
                    Try Again
                  </Text>
                </RectButton>
              )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  top: {
  backgroundColor: '#6379F4',
  borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  paddingTop: StatusBar.currentHeight * 1.8,
  paddingBottom: StatusBar.currentHeight,
  paddingHorizontal: 16,
  marginBottom: 30,
  alignItems: 'center'
},
label: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 20
  },
card: {
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
      padding: 15,
  marginBottom: 20,
      elevation: 3,
      flex: 1
  },
  title: {
      color: '#7A7886',
      fontSize: 16,
      marginBottom: 10
  },
  value: {
      color: '#514F5B',
      fontSize: 18,
      fontWeight: 'bold'
  }, 
  buttonPrimary: {
      alignItems: 'center',
      backgroundColor: '#6379F4',
      width: '100%',
      padding: 16,
      borderRadius: 12,
      elevation: 3,
      marginBottom: 15,
      marginTop: 40
  },
  buttonGrey: {
      backgroundColor: '#DADADA',
      alignItems: 'center',
      width: '100%',
      padding: 16,
      borderRadius: 12,
      elevation: 3,
      marginBottom: 15,
      marginTop: 40
  },
})
