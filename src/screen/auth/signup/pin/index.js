import React, {useRef, useState, Fragment} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from '../../../style/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useDispatch, useSelector} from 'react-redux';
import {createPin, registerEmail} from '../../../../redux/actions/Register';
const RegisterPin = (props) => {
  const dispatch = useDispatch();
  const inputPassword = useRef();
  const [pincode, setPincode] = useState('');
  const [loading, setLoading] = useState(false);
  const {data,isPinSuccess} = useSelector((s) => s.Register);

  console.log(data.email, pincode, 'tes');

  const toSuccess = () => {
    console.log(data.isSuccess, data, 'registeremail');
    dispatch(createPin({pin: parseInt(pincode), email: data.email}));
    if (isPinSuccess) {
		console.log(isPinSuccess,'navigator 1')
      props.navigation.navigate('SuccessRegister');
    }
    console.log(data.email, 'registerpin');
  };
  React.useEffect(() => {
	if (isPinSuccess) {
		console.log(isPinSuccess,'navigaor2')
		props.navigation.navigate('SuccessRegister');
    }
  }, [isPinSuccess]);

  const toLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <Fragment>
      <ScrollView>
        <View style={styles.positionCenter}>
          <View>
            <Text style={styles.zwalletIcon}> Zwallet</Text>
          </View>

          <KeyboardAvoidingView
            style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
            behavior="height"
            enabled
            keyboardVerticalOffset={1}>
            <View style={styles.formBoxAuth}>
              <View style={styles.positionCenter}>
                <Text style={styles.formTitle}>Create Security PIN</Text>
                <Text style={styles.formDesc}>
                  Create a PIN that’s contain 6 digits number for security
                  purpose in Zwallet.
                </Text>
              </View>

              <View style={styles.pincodePosition}>
                <SmoothPinCodeInput
                  codeLength={6}
                  cellStyle={{
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: 'rgba(169, 169, 169, 0.6)',
                  }}
                  cellStyleFocused={{
                    borderColor: '#6379F4',
                  }}
                  value={pincode}
                  onTextChange={(code) => setPincode(code)}
                />
              </View>

              <View style={styles.positionCenter}>
                <Button
                  style={
                    pincode.length == 6
                      ? styles.buttonSubmitFilled
                      : styles.buttonSubmit
                  }
                  onPress={() => toSuccess()}>
                  <Text
                    style={
                      pincode.length == 6
                        ? styles.textButtonLoginFilled
                        : styles.textButtonLogin
                    }>
                    {' '}
                    Confirm
                  </Text>
                </Button>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default RegisterPin;
