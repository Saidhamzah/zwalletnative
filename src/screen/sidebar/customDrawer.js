import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Alert, Text, View} from 'react-native';
import {Avatar, Divider, List} from 'react-native-paper';
import {AuthLogout} from '../../redux/actions/Auth';
import {useDispatch} from 'react-redux';

function CustomDrawer(props) {
  const dispatch = useDispatch();

  const onLogout = () => {
    Alert.alert('Keluar Akun', 'Apakah Kamu Yakin?', [
      {
        text: 'Tidak',
        style: 'cancel'
      },
      {
        text: 'Keluar',
        onPress: () => dispatch(AuthLogout()),
      },
    ], { cancelable: true });
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginVertical: 50}}>
        <Avatar.Image
          source={{
            uri: 'https://topmeaning.com/english/images/img/EN/g/guy.jpg',
          }}
          size={100}
          style={{alignSelf: 'center'}}
        />
      </View>
      <DrawerItemList {...props} />
      <Divider />
      <List.Item title="Keluar" onPress={() => onLogout()} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;