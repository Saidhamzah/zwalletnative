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
import {transfer} from '../../redux/actions/Transfer'
import style from '../style';
import SmoothPin from 'react-native-smooth-pincode-input';

export default function CheckPin({navigation}) {
  const dispatch = useDispatch();

  const pinInput = useRef();
  const [pin, setPin] = useState('');
  const [isFilled, Filled] = useState(false);
  const Auth = useSelector((s) => s.Auth);
  const authorization = {Authorization: Auth.data.token.token};
  const {data, message, isSuccess} = useSelector((state) => state.Transfer);
  // const { userTransfer} = useSelector(state => state.search)
  // const { data } = useSelector(state => state.user)
  // const { token } = useSelector(state => state.auth)

  const checkPin = (pin) => {
    Filled(true);
  };
  console.log(data)
  const dataTransfer = {pin: parseInt(pin), ...data};
  console.log(dataTransfer, 'ini tes');
  const onSubmit = () => {
    if(isFilled) {
        dispatch(transfer(authorization, {
            ...dataTransfer
    //         device_token: userTransfer.device_token
        }))
    } else {
        ToastAndroid.show('PIN must be 6 digits', ToastAndroid.SHORT)
    }
    if(!isSuccess) {
        pinInput.current.shake()
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }
  };
  return (
    <>
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
              <View style={{alignItems: 'center', paddingTop: 50}}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: 18,
                    color: '#7A7886',
                    marginBottom: 50,
                  }}>
                  Enter your 6 digits PIN for confirmation to continue
                  transferring money.{' '}
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
                      borderColor: isFilled
                        ? '#6379F4'
                        : 'rgba(169, 169, 169, 0.6)',
                      borderWidth: 1,
                      backgroundColor: '#FFFFFF',
                    }}
                    cellStyleFocused={{
                      borderColor: '#6379F4',
                    }}
                    textStyle={{
                      color: style.dark,
                      fontSize: 24,
                      fontWeight: 'bold',
                    }}
                    cellSpacing={10}
                    cellSize={55}
                    value={pin}
                    onTextChange={(pin) => {
                      setPin(pin);
                      pin.length < 6 ? Filled(false) : Filled(true);
                    }}
                    onFulfill={checkPin}
                    onBackspace={() => Filled(false)}
                  />
                </View>
              </View>
              <RectButton
                onPress={onSubmit}
                style={isFilled ? styles.buttonPrimary : styles.buttonGrey}>
                <Text
                  style={{
                    color: isFilled ? '#FFFFFF' : '#88888F',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Transfer Now
                </Text>
              </RectButton>
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
    paddingHorizontal: 16,
    marginBottom: 30,
    alignItems: 'center',
  },
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
