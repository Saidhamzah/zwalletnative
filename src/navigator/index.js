import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  RegisterForm,
  RegisterPin,
  SuccessRegister,
  ResetEmail,
  ResetPassword,
  Dashboard,
  History,
  Search,
  InputAmount,
  Topup,
  TransferConfirmation,
  CheckPin,
  Status,
  Profile,
  Info,
  Phone,
  Password,
  ChangePin
  
} from '../screen';
// import {isLogin} from '../utils';
import {useSelector, useDispatch} from 'react-redux';
import {Users} from '../redux/actions/Users';
import {Title} from 'react-native-paper';
import { LogBox } from 'react-native';
import messaging from '@react-native-firebase/messaging'
import {getDevice} from '../redux/actions/Device'

import {getHome} from '../redux/actions/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {isLogin} = useSelector((s) => s.Auth);
  const {isSuccess} = useSelector((s)=> s.Transfer)
  const [initialRoute, setInitialRoute] = React.useState('Home');
  const [loading, setLoading] = React.useState(true);
  
  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        setLoading(false);
      });

    messaging()
      .getToken()
      .then((device_token) => {
        console.log(device_token);
        console.log('device_token from router');
        dispatch(getDevice(device_token));
      });
  }, []);

  useEffect(() => {
    if (isLogin|| isSuccess) {
      const authorization = {Authorization: Auth.data.token.token};
      // console.log(authorization,'users nih')
      dispatch(Users(authorization));
      dispatch(getHome(authorization));
    }
  }, [isLogin, isSuccess]);
  return (
    <>
      {isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{
              headerShown: true,
              title: 'History',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: true,
              title: 'Find Receiver',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="InputAmount"
            component={InputAmount}
            options={{
              headerShown: true,
              title: 'Transfer',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="TransferConfirmation"
            component={TransferConfirmation}
            options={{
              headerShown: true,
              title: 'Confirmation',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="CheckPin"
            component={CheckPin}
            options={{
              headerShown: true,
              title: 'Enter Your Pin',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="ChangePin"
            component={ChangePin}
            options={{
              headerShown: true,
              title: 'Change Pin',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{
              headerShown: true,
              title: 'Personal Information',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="ChangePassword"
            component={Password}
            options={{
              headerShown: true,
              title: 'Change Password',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="PhoneNumber"
            component={Phone}
            options={{
              headerShown: true,
              title: 'Manage Phone Number',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: true
            }}
          />
          <Stack.Screen
            name="Status"
            component={Status}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterForm"
            component={RegisterForm}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="RegisterPin"
            component={RegisterPin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SuccessRegister"
            component={SuccessRegister}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetEmail"
            component={ResetEmail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <HomeStack navigation={props.navigation} />
    </NavigationContainer>
  );
};

export default MainNavigator;
