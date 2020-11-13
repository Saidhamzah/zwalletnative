import React from 'react';
import style from '../style/index';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import ProfilePict from '../../assets/icon/profilepict.svg';
import ProfilePictSamuel from '../../assets/icon/Samuel.svg';
import ArrowUpIcon from '../../assets/icon/arrow-up.svg';
import PlusIcon from '../../assets/icon/plus.svg';
import BellIcon from '../../assets/icon/bell.svg';
import ProfileNetflix from '../../assets/icon/netflix.svg';
import CustomDrawer from '../sidebar/customDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {getHome} from '../../redux/actions/Home';

const Drawer = createDrawerNavigator();
const Welcome = (navigation) => {
    
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.navbar}>
          <View style={{flex: 2, marginLeft: 15}}>
            <ProfilePict width="52" height="52" />
          </View>
          <View style={{flex: 10, flexDirection: 'column'}}>
            <Text onPress={() => navigation.navigate('login')}>Hello,</Text>
            <Text
              style={style.name}
              onPress={() => navigation.navigate('login')}>
              Robert Chandler
            </Text>
          </View>
          <BellIcon />
        </View>
        <View style={style.navbar}></View>
        <View style={style.boxBalance}>
          <Text style={{fontSize: 14, color: 'white'}}>Balance</Text>
          <Text style={style.balanceNumber}>Rp.{ 120.000}</Text>
          <Text style={{color: 'white', fontSize: 14}}>+62</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{flex: 5, marginHorizontal: 10, marginLeft: 15}}>
            <Button
              mode="contained"
              style={style.buttonGrey}
              onPress={() => navigation.navigate('Search')}>
              <ArrowUpIcon />
              Transfer
            </Button>
          </View>
          <View style={{flex: 5, marginHorizontal: 10, marginRight: 15}}>
            <Button
              mode="contained"
              style={style.buttonGrey}
              onPress={() => navigation.navigate('Topup')}>
              <PlusIcon />
              Top Up
            </Button>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'flex-end'}}>
          <View style={{flex: 5, marginLeft: 17}}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 18,
                fontWeight: '700',
                color: 'black',
                textAlign: 'left',
              }}>
              Transaction History
            </Text>
          </View>
          <View style={{flex: 5, marginRight: 17}}>
            <Text
              onPress={() => navigation.navigate('History')}
              style={{textAlign: 'right', fontSize: 14, color: '#6379F4'}}>
              See All
            </Text>
          </View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            {/* picture */}
            <View>
              <ProfilePictSamuel width="52" height="52" />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Samuel Suhi
              </Text>
              <Text>Transfer</Text>
            </View>
          </View>
          <View style={{flex: 5}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#1EC15F',
                textAlign: 'right',
              }}>
              +50.000
            </Text>
          </View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <ProfileNetflix width="52" height="52" />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Netflix</Text>
              <Text>Subscription</Text>
            </View>
          </View>
          <View style={{flex: 5}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: 'red',
                textAlign: 'right',
              }}>
              -50.000
            </Text>
          </View>
        </View>
        <View style={style.contentHistory}>
          <View style={{flex: 5, flexDirection: 'row'}}>
            <View>
              <ProfilePictSamuel width="52" height="52" />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Samuel Suhi
              </Text>
              <Text>Transfer</Text>
            </View>
          </View>
          <View style={{flex: 5}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#1EC15F',
                textAlign: 'right',
              }}>
              +50.000
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};
const Transfer = () => {
  return (
    <View>
      <Text>transfer</Text>
    </View>
  );
};

const Home = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: '#11624299',
        activeTintColor: '#fff',
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerType="back"
      initialRouteName="Welcome"
      overlayColor="#ffffff22">
      <Drawer.Screen name="Dashboard" component={Welcome} options={{headerShown: false}}/>
      <Drawer.Screen name="Topup" component={Transfer} />
      <Drawer.Screen name="Transfer" component={Transfer} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default Home;
