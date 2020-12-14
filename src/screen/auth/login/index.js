import React, {useRef, useState, Fragment} from 'react';
import {
  Image,
  View,
  TextInput,
  Keyboard,TouchableOpacity,
  Alert,
  ScrollView,
  ToastAndroid,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from '../../style/index';
import Mail from '../../../assets/icon/mail.svg';
import MailActive from '../../../assets/icon/mail-active.svg';
import Lock from '../../../assets/icon/lock.svg';
import LockActive from '../../../assets/icon/lock-active.svg';
import Eye from '../../../assets/icon/eye-crossed.svg';
import {NetworkInfo} from 'react-native-network-info';
import {useDispatch, useSelector} from 'react-redux';
import {AuthLogin} from '../../../redux/actions/Auth';
import {AuthLogout} from '../../../redux/actions/Auth';
const Login = (props) => {
  const inputPassword = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [eyeCondition, setEyeCondition] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.getDevice);
  const {message} = useSelector((s) => s.Auth);
  const onSubmit = () => {
    Keyboard.dismiss();
    setLoading(true);
    console.log(email, password);
    if (email.toLowerCase().search('@gmail.com') != -1) {
      dispatch(
        AuthLogin({
          email: email,
          password: password,
          device_token: data,
        }),
      );
      if (message == 'Request failed with status code 404') {
        ToastAndroid.show('Wrong Email or Password', ToastAndroid.SHORT);
      }else if(message=='Succes'){
        ToastAndroid.show('Welcome', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show(
        'Please Input Email with right format',
        ToastAndroid.SHORT,
      );
    }
  };

  const toRegister = () => {
    props.navigation.navigate('RegisterForm');
  };
  const toReset = () => {
    props.navigation.navigate('ResetEmail');
  };
  const onLogout = () => {
    Alert.alert(
      'Log Out Account',
      'Are You Sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => dispatch(AuthLogout()),
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFCFF" />
      <Fragment>
        <ScrollView>
          <View style={styles.positionCenter}>
            <View>
              <Text style={styles.zwalletIcon} onPress={() => onLogout()}>
                {' '}
                Zwallet
              </Text>
            </View>
            <View style={styles.formBoxAuth}>
              <View style={styles.positionCenter}>
                <Text style={styles.formTitle}>Login</Text>
                <Text style={styles.formDesc}>
                  Login to your existing account to access all the features in
                  Zwallet.
                </Text>
              </View>
              <View style={styles.positionCenter}>
                <View style={{position: 'relative', width: '100%'}}>
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 10,
                    }}>
                    {emailActive ? (
                      <MailActive width={25} height={25} />
                    ) : (
                      <Mail width={25} height={30} />
                    )}
                  </View>
                  <TextInput
                    style={
                      email != ''
                        ? styles.formInputEmailFilled
                        : styles.formInputEmail
                    }
                    placeholder="Enter your e-mail"
                    autoCapitalize={'none'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    onSubmitEditing={() => inputPassword.current.focus()}
                    returnKeyType="next"
                    setActive={setEmailActive}
                  />
                </View>
              </View>
              <View style={styles.positionCenter}>
                <View style={{position: 'relative', width: '100%'}}>
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 10,
                    }}>
                    {passwordActive ? (
                      <LockActive width={25} height={25} />
                    ) : (
                      <Lock width={25} height={30} />
                    )}
                  </View>
                  <TextInput
                    ref={inputPassword}
                    style={
                      password != ''
                        ? styles.formInputPasswordFilled
                        : styles.formInputPassword
                    }
                    placeholder="Enter your password"
                    autoCapitalize={'none'}
                    value={password}
                    secureTextEntry={eyeCondition? false : true}
                    returnKeyType="send"
                    returnKeyLabel="masuk"
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={() => onSubmit()}
                    setActive={setPasswordActive}
                  />
                  <TouchableOpacity
                    onPress={() => setEyeCondition(!eyeCondition)}
                    style={{position: 'absolute', right: 45, top: 10}}>
                    <Eye width={25} height={30} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.positionEnd}>
                <TouchableNativeFeedback onPress={() => toReset()}>
                  <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableNativeFeedback>
              </View>

              <View style={styles.positionCenter}>
                <Button
                  style={
                    email && password != ''
                      ? styles.buttonSubmitFilled
                      : styles.buttonSubmit
                  }
                  onPress={() => onSubmit()}>
                  <Text
                    style={
                      email && password != ''
                        ? styles.textButtonLoginFilled
                        : styles.textButtonLogin
                    }>
                    {' '}
                    Login
                  </Text>
                </Button>
              </View>

              <View style={styles.col12}>
                <Text style={styles.textUnderButton}>
                  Don’t have an account? Let’s{' '}
                </Text>
                <TouchableNativeFeedback onPress={() => toRegister()}>
                  <Text style={styles.signUpButton}>Sign Up</Text>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    </>
  );
};

export default Login;
