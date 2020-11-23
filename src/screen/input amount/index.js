import React, {useState, useRef} from 'react';
import style from '../style/index';
import {View, Text, TextInput, Image,Dimensions, StyleSheet,StatusBar, ToastAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Note from '../../component/noteInput';
import EditInactive from '../../assets/icon/editInactive.svg';
import EditActive from '../../assets/icon/editActive.svg';
import { RectButton } from 'react-native-gesture-handler'
import {getSearch, getSearchTransfer} from '../../redux/actions/Search';
import { transferDataFilled } from '../../redux/actions/Transfer';

export default function InputAmount({navigation}) {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const User = useSelector((s) => s.User);
  const userData = User.data.data[0];
  const {data} = useSelector((s) => s.getSearchTransfer);
  const authorization = {Authorization: Auth.data.token.token};
  const receiverData = data.data[0];

  const noteInput = useRef();
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [noteActive, setNoteActive] = useState(false);

  // console.log(data.data[0], 'ini data baru');

  const onSubmit=()=>{
    if(amount && parseInt(amount)<= userData.balance){
      dispatch(transferDataFilled({
        amount: parseInt(amount),
        note : note,
        receiver : receiverData.id,
        status : 'Transfer',
        balanceLeft : (userData.balance - parseInt(amount))
      }))
      navigation.navigate("TransferConfirmation")
    }else{
      if(!amount){
        ToastAndroid.show('Fill amount to transfer!', ToastAndroid.SHORT)
      }else{
        ToastAndroid.show('Fill amount with correct format!', ToastAndroid.SHORT)
      }
    }
  }
  
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
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
                source={{uri: receiverData.img}}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {receiverData.fullName}
              </Text>
              <Text style={{fontFamily: 'NunitoSans-Regular', color: 'grey'}}>
                +{receiverData.phoneNumber}
              </Text>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <TextInput
              keyboardType="numeric"
              placeholder="0.00"
              placeholderTextColor="#B5BDCC"
              value={amount}
              onChangeText={(text) => setAmount(text)}
              style={{
                fontSize: 42,
                textAlign: 'center',
                color: style.primary,
                fontWeight: '800',
                marginBottom: 25,
              }}
              returnKeyType="next"
              onSubmitEditing={() => noteInput.current.focus()}
            />
            <Text
              style={{
                color: '#7C7895',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 40,
              }}>
              Rp{userData.balance} Available
            </Text>
            <View
              style={{
                position: 'relative',
                width: Dimensions.get('screen').width - 32,
              }}>
              <View style={{position: 'absolute', left: 0, top: 10}}>
                {noteActive ? (
                  <EditActive width={24} height={24} />
                ) : (
                  <EditInactive width={24} height={24} />
                )}
              </View>
              <Note
                inputref={noteInput}
                setActive={setNoteActive}
                value={note}
                onChangeText={(text) => setNote(text)}
                placeholder="Add some notes"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                returnKeyType="send"
              />
            </View>
          </View>
          <RectButton
            onPress={onSubmit}
            style={amount ? styles.buttonPrimary : styles.buttonGrey}>
            <Text
              style={
                amount
                  ? {color: style.white, fontSize: 18}
                  : {color: style.darkGrey, fontSize: 18}
              }>
              Continue
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}










const styles = StyleSheet.create({
  top: {
  backgroundColor: 'blue',
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  paddingTop: StatusBar.currentHeight * 1.8,
  paddingBottom: StatusBar.currentHeight,
  paddingHorizontal: 16,
  marginBottom: 30,
  alignItems: 'center'
},
label: {
      backgroundColor: '#ffff',
      borderRadius: 10,
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 20
  },
  buttonPrimary: {
      alignItems: 'center',
      backgroundColor: '#6379F4',
      width: Dimensions.get('screen').width - 32,
      padding: 16,
      borderRadius: 12,
      elevation: 3,
      marginBottom: 15,
      marginTop: 100
  },
  buttonGrey: {
      backgroundColor: '#DADADA',
      alignItems: 'center',
      width: Dimensions.get('screen').width - 32,
      padding: 16,
      borderRadius: 12,
      elevation: 3,
      marginBottom: 15,
      marginTop: 100
  },
})
