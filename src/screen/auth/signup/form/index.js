import React, {useRef, useState, Fragment} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from '../../../style/index';
import {formFilled, registerEmail} from '../../../../redux/actions/Register';
import {useDispatch, useSelector} from 'react-redux';

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const inputPassword = useRef();
  const inputEmail = useRef();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {data, isSuccess} = useSelector((s) => s.Register);
  const createPin = () => {
    // dispatch(AuthRegisterEmail({
    // 	fullName: username,
    // 	email:email,
    // 	password: password
    // }))

    dispatch(
      registerEmail({
        fullName: username,
        email: email,
        password: password,
      }),
    );
    if (isSuccess) {
		console.log('navigaor1')
		props.navigation.navigate('RegisterPin');
    } else {
		ToastAndroid.show('password must at least 8 digits', ToastAndroid.SHORT);
    }
};
React.useEffect(() => {
	if (isSuccess) {
		console.log(isSuccess,'navigaor2')
		props.navigation.navigate('RegisterPin');
    }
  }, [isSuccess]);

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
          <View style={styles.formBoxAuth}>
            <View style={styles.positionCenter}>
              <Text style={styles.formTitle}>Sign Up</Text>
              <Text style={styles.formDesc}>
                Create your account to access Zwallet.
              </Text>
            </View>

            <View style={styles.positionCenter}>
              <View>
                <View>
                  <TextInput
                    style={
                      username != ''
                        ? styles.formInputUsernameFilled
                        : styles.formInputUsername
                    }
                    placeholder="Enter your username"
                    autoCapitalize={'none'}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    onSubmitEditing={() => inputEmail.current.focus()}
                    returnKeyType="next"
                  />
                </View>
              </View>
            </View>

            <View style={styles.positionCenter}>
              <View>
                <View>
                  <TextInput
                    ref={inputEmail}
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
                  />
                </View>
              </View>
            </View>
            <View style={styles.positionCenter}>
              <TextInput
                ref={inputPassword}
                style={
                  password != ''
                    ? styles.formInputPasswordFilled
                    : styles.formInputPassword
                }
                placeholder="Create your password"
                autoCapitalize={'none'}
                value={password}
                secureTextEntry={true}
                returnKeyType="send"
                returnKeyLabel="masuk"
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={() => createPin()}
              />
            </View>

            <View style={styles.positionCenter}>
              <Button
                style={
                  email && password && username != ''
                    ? styles.buttonSubmitFilled
                    : styles.buttonSubmit
                }
                onPress={() => createPin()}>
                <Text
                  style={
                    email && password && username != ''
                      ? styles.textButtonLoginFilled
                      : styles.textButtonLogin
                  }>
                  {' '}
                  Sign Up
                </Text>
              </Button>
            </View>

            <View style={styles.col12}>
              <Text style={styles.textUnderButton}>
                Already have an account? Let’s{' '}
              </Text>
              <TouchableNativeFeedback onPress={() => toLogin()}>
                <Text style={styles.signUpButton}>Login</Text>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default RegisterForm;
