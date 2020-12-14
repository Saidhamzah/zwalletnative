import React, {useRef, useState, Fragment} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from '../../style/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Lock from '../../../assets/icon/lock.svg';
import LockActive from '../../../assets/icon/lock-active.svg';
import {reset, setDefault} from '../../../redux/actions/ResetPass';
import Eye from '../../../assets/icon/eye-crossed.svg';
import Mail from '../../../assets/icon/mail.svg';
const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const inputPassword = useRef();
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);
  const [eyeCondition, setEyeCondition] = useState(false);
  const [eyeCondition2, setEyeCondition2] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [passwordActive2, setPasswordActive2] = useState(false);
  const {data, isSuccess} = useSelector((s) => s.ResetPass);
  console.log(data);
  console.log(password);
  const toLogin = () => {
    if(password==password2){
      if (password.length >= 8) {
        dispatch(
          reset({
            password: password,
            email: data,
          }),
        );
      } else {
        ToastAndroid.show('password must at least 8 digits', ToastAndroid.SHORT);
      }
    }else{
      ToastAndroid.show('Your Password not same', ToastAndroid.SHORT);
    }
  };
  React.useEffect(() => {
    if (isSuccess) {
      ToastAndroid.show(
        'Success Edit Password, Please Login',
        ToastAndroid.SHORT,
      );
      props.navigation.navigate('Login');
      dispatch(setDefault());
    }
  }, [isSuccess]);
  return (
    <Fragment>
      <ScrollView>
        <View style={styles.positionCenter}>
          <View>
            <Text style={styles.zwalletIcon}> Zwallet</Text>
          </View>
          <View style={styles.formBoxAuth}>
            <View style={styles.positionCenter}>
              <Text style={styles.formTitleReset}>Reset Password</Text>
              <Text style={[styles.formDesc, {paddingBottom: 1}]}>
                Create and confirm your new password so you can login to
                Zwallet.
              </Text>
            </View>
            <View style={[styles.positionCenter]}>
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
                  placeholder="Create new password"
                  autoCapitalize={'none'}
                  value={password}
                  secureTextEntry={eyeCondition ? false : true}
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
                    password2 != ''
                      ? styles.formInputPasswordFilled
                      : styles.formInputPassword
                  }
                  placeholder="Create new password"
                  autoCapitalize={'none'}
                  value={password2}
                  secureTextEntry={eyeCondition2 ? false : true}
                  returnKeyType="send"
                  returnKeyLabel="masuk"
                  onChangeText={(text) => setPassword2(text)}
                  onSubmitEditing={() => onSubmit()}
                  setActive={setPasswordActive2}
                />
                <TouchableOpacity
                  onPress={() => setEyeCondition2(!eyeCondition2)}
                  style={{position: 'absolute', right: 45, top: 10}}>
                  <Eye width={25} height={30} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.positionEndReset}>
              <Button
                style={styles.buttonSubmitFilled}
                onPress={() => toLogin()}>
                <Text style={styles.textButtonLoginFilled}>
                  {' '}
                  Reset Password
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default ResetPassword;
