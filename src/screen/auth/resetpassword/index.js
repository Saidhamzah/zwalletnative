import React, {useRef, useState, Fragment} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import styles from '../../style/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetPassword = (props) => {
  const inputPassword = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
              <Text style={styles.formTitleReset}>Reset Password</Text>
              <Text style={[styles.formDesc,{paddingBottom: 1}]}>
                Create and confirm your new password so you can login to
                Zwallet.
              </Text>
            </View>
            <View style={[styles.positionCenter,{}]}>
                <View>
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
                    secureTextEntry={true}
                    returnKeyType="send"
                    returnKeyLabel="masuk"
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={() => onSubmit()}
                  />
                </View>
                <View>
                  <TextInput
                    ref={inputPassword}
                    style={
                      password != ''
                        ? styles.formInputPasswordFilled
                        : styles.formInputPassword
                    }
                    placeholder="Confirm new password"
                    autoCapitalize={'none'}
                    value={password}
                    secureTextEntry={true}
                    returnKeyType="send"
                    returnKeyLabel="masuk"
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={() => onSubmit()}
                  />
                </View>
            </View>

            <View style={styles.positionEndReset} >
              <Button style={styles.buttonSubmitFilled} onPress={() => toLogin()}>
                <Text style={styles.textButtonLoginFilled} > Reset Password</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default ResetPassword;
