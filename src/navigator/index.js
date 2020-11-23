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
  TransferConfirmation
  
} from '../screen';
import {isLogin} from '../utils';
import {useSelector, useDispatch} from 'react-redux';
import {Users} from '../redux/actions/Users';
import {Title} from 'react-native-paper';
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

const HomeStack = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const {isLogin} = useSelector((s) => s.Auth);

  const [initialRoute, setInitialRoute] = React.useState('Home');
  const [loading, setLoading] = React.useState(true);
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
            options={{headerShown: false}}
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
            name="Topup"
            component={Topup}
            options={{
              headerShown: true,
              title: 'Top Up',
              headerStyle: {
                backgroundColor: '#fafcff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
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
