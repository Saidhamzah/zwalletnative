import React, {useState} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {ProfileNumber, ProfileNumberAdd} from '../../redux/actions/Profile';
import style from '../style';
import Trash from '../../assets/icon/trash.svg';
import PhoneInactive from '../../assets/icon/phone.svg';
import PhoneActive from '../../assets/icon/phone-active.svg';
import Input from '../../component/noteInput';
import {RectButton} from 'react-native-gesture-handler';
import {Users} from '../../redux/actions/Users';

const Phone = ({navigation}) => {
  const [inputActive, setActive] = useState(false);
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const User = useSelector((s) => s.User);
  const {isSuccess} = useSelector((s)=> s.ProfileNumber)
  const userData = User.data;
  const authorization = {Authorization: Auth.data.token.token};

  const addPhone = () => {
    if (phone.length == 11 && phone[0] != 0) {
      const newPhone = {phoneNumber: parseInt('62' + phone.toString())};
      console.log(newPhone, authorization, 'nomor baru');
      dispatch(ProfileNumberAdd(authorization, newPhone));
      dispatch(Users(authorization));
      ToastAndroid.show(
        'Success Add Phone',
        ToastAndroid.SHORT,
      );
      navigation.navigate('Profile');
    } else {
      ToastAndroid.show(
        'Phone must be 11 character and not include +62',
        ToastAndroid.SHORT,
      );
    }
  };
  React.useEffect(() => {
    if(isSuccess){
      dispatch(Users(authorization));
    }
  }, [isSuccess]);
  const deletePhone = () => {
    dispatch(ProfileNumber(authorization));
    dispatch(Users(authorization));
  };

  console.log(phone, 'cek daa');
  return (
    <>
      <SafeAreaView>
        <View>
          <ScrollView style={{height: '100%', backgroundColor: '#FAFCFF'}}>
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: 16,
                marginBottom: 30,
                justifyContent: 'space-between',
                height: Dimensions.get('screen').height / 1.5,
              }}>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#7A7886',
                    fontSize: 16,
                    lineHeight: 27,
                    marginBottom: 40,
                  }}>
                  {userData.phoneNumber
                    ? 'You can only delete the phone number and then you must add another phone number.'
                    : 'Add at least one phone number for the transfer ID so you can start transfering your money to another user.'}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  {userData.phoneNumber != 62 ? (
                    <View
                      style={[
                        styles.card,
                        {
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          alignItems: 'center',
                        },
                      ]}>
                      <View>
                        <Text style={styles.title}>Primary</Text>
                        <Text style={styles.value}>
                          +{userData.phoneNumber}
                        </Text>
                      </View>
                      <TouchableOpacity onPress={deletePhone}>
                        <Trash width={28} height={28} />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View
                      style={{
                        position: 'relative',
                        width: Dimensions.get('screen').width - 32,
                      }}>
                      <View style={{position: 'absolute', left: 0, top: 10}}>
                        {inputActive ? (
                          <PhoneActive width={24} height={24} />
                        ) : (
                          <PhoneInactive width={24} height={24} />
                        )}
                      </View>
                      <View style={{position: 'absolute', left: 33, top: 13}}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '800',
                          }}>
                          +62
                        </Text>
                      </View>
                      <Input
                        setActive={setActive}
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                        placeholder="Enter your phone number"
                        placeholderTextColor="rgba(169, 169, 169, 0.8)"
                        returnKeyType="send"
                        padding={70}
                        keyboardType="phone-pad"
                      />
                    </View>
                  )}
                </View>
              </View>
              {userData.phoneNumber != 62 ? (
                <Text></Text>
              ) : (
                <RectButton
                  onPress={addPhone}
                  style={
                    phone.length === 11
                      ? styles.buttonPrimary
                      : styles.buttonGrey
                  }>
                  <Text
                    style={{
                      color: phone.length === 11 ? '#FFFFFF' : '#88888F',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Submit
                  </Text>
                </RectButton>
              )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Phone;

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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    flex: 1,
  },
  title: {
    color: '#7A7886',
    fontSize: 16,
    marginBottom: 10,
  },
  value: {
    color: '#514F5B',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
