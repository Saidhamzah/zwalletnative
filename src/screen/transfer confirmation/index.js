import React,{useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,ToastAndroid
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import moment from 'moment';
import styles from '../style';

export default function TransferConfirmation({navigation}) {
  const {data,isSuccess} = useSelector((s) => s.Transfer);
  const Auth = useSelector((s) => s.Auth);
  const User = useSelector((s) => s.User);
  const {isLogin} = useSelector((s) => s.Auth);
  const userTransfer = useSelector((s) => s.getSearchTransfer);
  const userReceiver = userTransfer.data.data[0];
  // console.log(userReceiver, ' ini data');
  
  useEffect(()=>{
    if(isSuccess){
      ToastAndroid.show(` Transfer ${isSuccess? 'Success':'Failed'}`, ToastAndroid.SHORT)
      navigation.replace("Status")
    }
  },[isSuccess])

  const splitFormat = (number) => {
    let newNumber = number.toString().split('').reverse().join('');
    let finalNumber = '';
    for (let i = 0; i < newNumber.length; i++) {
      if (i > 0 && i % 3 == 0) {
        finalNumber += '.';
      }
      finalNumber += newNumber.charAt(i);
    }
    return finalNumber.split("").reverse().join("")
  };
  // console.log(data.amount.toString().length, 'ini apa');
  return (
    <>
      <StatusBar backgroundColor={styles.primary} />
      <SafeAreaView>
        <View>
          <ScrollView style={{height: '100%', backgroundColor: '#FAFCFF'}}>
            <View style={styles.textLeft}>
              <Text
                style={{color: '#514F5B', fontWeight: 'bold', fontSize: 15}}>
                Transfer to
              </Text>
            </View>

            <View style={styles.contentHistory}>
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
            <View style={styles.textLeft}>
              <Text
                style={{color: '#514F5B', fontWeight: 'bold', fontSize: 15}}>
                Details
              </Text>
            </View>
            <View style={styles.contentHistory}>
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
            <View style={styles.contentHistory}>
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
            <View style={styles.contentHistory}>
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
            <View style={styles.contentHistory}>
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
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
              }}>
              <RectButton
                onPress={() => navigation.navigate('CheckPin')}
                style={styles.buttonPrimary}>
                <Text style={{color: '#FFFFFF', fontSize: 18}}>Confirm</Text>
              </RectButton>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
