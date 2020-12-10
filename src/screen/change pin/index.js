import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
// import { checkPin, editUser } from '../../redux/action/user'
import style from '../style';
import SmoothPin from 'react-native-smooth-pincode-input';
import {pinFilled, changePinProfile} from '../../redux/actions/ChangePin';

export default function changePin({navigation}) {
  const pinInput = useRef();
  const [pin, setPin] = useState('');
  const [isFull, setFull] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [isFullNew, setFullNew] = useState(false);
  const {isSuccess, isFilled} = useSelector((s) => s.ChangePin);
  const Auth = useSelector((s) => s.Auth);
  const dispatch = useDispatch();
  const authorization = {Authorization: Auth.data.token.token};

  const onSubmit = () => {
    if (isFull) {
      dispatch(pinFilled(pin));
    } else {
      ToastAndroid.show('Current PIN must be Fulfilled', ToastAndroid.SHORT);
    }
  };
  if (isSuccess) {
    navigation.navigate('Profile');
    ToastAndroid.show('PIN Edited', ToastAndroid.SHORT);
  }
  const changePin = () => {
    if (isFullNew) {
      dispatch(
        changePinProfile(
          {
            newPin: newPin,
            pin: pin,
          },
          authorization,
        ),
      );
      
    } else {
      ToastAndroid.show('New PIN must be Fulfilled', ToastAndroid.SHORT);
    }
  };
//   console.log(pin, 'filled?');
//   console.log(isSuccess, 'succes?');
  if (isFilled) {
    return (
      <>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle="light-content" />
        <SafeAreaView>
          <View>
            <ScrollView style={{height: '100%', backgroundColor: '#FAFCFF'}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  height: Dimensions.get('screen').height / 1.5,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#7A7886',
                      marginBottom: 50,
                    }}>
                    Type your new 6 digits security PIN to use in Zwallet.
                  </Text>
                  <View>
                    <SmoothPin
                      ref={pinInput}
                      codeLength={6}
                      placeholder={
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(169, 169, 169, 0.6)',
                            width: '60%',
                            height: '80%',
                          }}></View>
                      }
                      cellStyle={{
                        borderRadius: 10,
                        borderColor: isFull
                          ? '#6379F4'
                          : 'rgba(169, 169, 169, 0.6)',
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF',
                      }}
                      cellStyleFocused={{
                        borderColor: '#6379F4',
                      }}
                      textStyle={{
                        color: '#4D4B57',
                        fontSize: 24,
                        fontWeight: 'bold',
                      }}
                      cellSpacing={10}
                      cellSize={55}
                      value={newPin}
                      onTextChange={(pin) => {
                        setNewPin(pin);
                        pin.length < 6 ? setFullNew(false) : setFullNew(true);
                      }}
                      onFulfill={() => setFullNew(true)}
                      onBackspace={() => setFullNew(false)}
                    />
                  </View>
                </View>
                <RectButton
                  onPress={changePin}
                  style={isFullNew ? styles.buttonPrimary : styles.buttonGrey}>
                  <Text
                    style={{
                      color: isFullNew ? '#FFFFFF' : '#88888F',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Change PIN
                  </Text>
                </RectButton>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  } else {
    return (
      <>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle="light-content" />
        <SafeAreaView>
          <View>
            <ScrollView style={{height: '100%', backgroundColor: '#FAFCFF'}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  height: Dimensions.get('screen').height / 1.5,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#7A7886',
                      marginBottom: 50,
                      lineHeight: 27,
                    }}>
                    Enter your current 6 digits Zwallet PIN below to continue to
                    the next steps.
                  </Text>
                  <View>
                    <SmoothPin
                      ref={pinInput}
                      codeLength={6}
                      placeholder={
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderBottomColor: 'rgba(169, 169, 169, 0.6)',
                            width: '60%',
                            height: '80%',
                          }}></View>
                      }
                      cellStyle={{
                        borderRadius: 10,
                        borderColor: isFull
                          ? '#6379F4'
                          : 'rgba(169, 169, 169, 0.6)',
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF',
                      }}
                      cellStyleFocused={{
                        borderColor: '#6379F4',
                      }}
                      textStyle={{
                        color: '#6379F4',
                        fontSize: 24,
                        fontWeight: 'bold',
                      }}
                      cellSpacing={10}
                      cellSize={55}
                      value={pin}
                      onTextChange={(pin) => {
                        setPin(pin);
                        pin.length < 6 ? setFull(false) : setFull(true);
                      }}
                      onFulfill={() => setFull(true)}
                      onBackspace={() => setFull(false)}
                    />
                  </View>
                </View>
                <Text
                  style={{textAlign: 'center', color: '#FF5B37', fontSize: 16}}>
                  {/* {pinCheck} */}
                </Text>
                <RectButton
                  onPress={onSubmit}
                  style={isFull ? styles.buttonPrimary : styles.buttonGrey}>
                  <Text
                    style={{
                      color: isFull ? '#FFFFFF' : '#88888F',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Confirm
                  </Text>
                </RectButton>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    backgroundColor: '#6379F4',
    width: Dimensions.get('screen').width - 32,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
    marginTop: 40,
  },
  buttonGrey: {
    backgroundColor: '#DADADA',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 32,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
    marginTop: 40,
  },
});
