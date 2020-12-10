import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import style from '../style';

export default function Info({navigation}) {
  const User = useSelector((s) => s.User);
  const data = User.data;
  return (
    <>
      <SafeAreaView>
        <View>
          <ScrollView
            style={{height: '100%', backgroundColor: '#FAFCFF'}}>
            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: 16,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  color: '#7A7886',
                  fontSize: 16,
                  lineHeight: 27,
                  marginBottom: 40,
                }}>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.card}>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.value}>{data.fullName}</Text>
                </View>
              </View>
              {/* <View style={{flexDirection: 'row'}}>
                <View style={styles.card}>
                  <Text style={styles.title}>Last Name</Text>
                  <Text style={styles.value}>{data.lastName}</Text>
                </View>
              </View> */}
              <View style={{flexDirection: 'row'}}>
                <View style={styles.card}>
                  <Text style={styles.title}>Verified E-mail</Text>
                  <Text style={styles.value}>{data.email}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
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
                    <Text style={styles.title}>Phone Number</Text>
                    {data.phoneNumber ? (
                      <Text style={styles.value}>+{data.phoneNumber}</Text>
                    ) : (
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Phone')}>
                        <Text
                          style={{
                            color: '#6379F4',
                            fontSize: 22,
                            fontWeight: 'bold',
                          }}>
                          Add phone number
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  {data.phoneNumber ? (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('PhoneNumber')}>
                      <Text style={{color: '#6379F4'}}>Manage</Text>
                    </TouchableOpacity>
                  ) : (
                    <Text></Text>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
 
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
