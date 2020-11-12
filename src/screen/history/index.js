import React from 'react';
import style from '../style/index';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import ProfilePictSamuel from '../../assets/icon/Samuel.svg';
import ArrowLeft from '../../assets/icon/arrow-left.svg';
import ProfileNetflix from '../../assets/icon/netflix.svg';
export default function History({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.navbar}>
          <View style={{flex: 2, marginLeft: 15}}>
            <ArrowLeft
              width="52"
              height="52"
              onPress={() => navigation.navigate('Dashboard')}
            />
          </View>
          <Text style={style.name}>History</Text>
          <View style={{flex: 10}}></View>
        </View>

        <View
          style={{flexDirection: 'row', marginTop: 20, alignItems: 'flex-end'}}>
          <View style={{flex: 5, marginLeft: 17}}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 13,
                fontWeight: '700',
                color: 'grey',
                textAlign: 'left',
              }}>
              This Week
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
        <View style={{flex: 5, marginLeft: 17}}>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 13,
              fontWeight: '700',
              color: 'grey',
              textAlign: 'left',
              paddingTop: 30,
            }}>
            This Month
          </Text>
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
        <View style={{flexDirection: 'row', marginTop: 10}}>
            {/* <OutcomeIcon width="40" height="52"  style={style.buttonWhite}/> */}
            <Button
              mode="contained"
              style={style.buttonWhite}>
                  Out
            </Button>
            <Button
              mode="contained"
              style={style.buttonWhite}>
              Inc
            </Button>
          <View style={{flex: 5, marginHorizontal: 10, marginRight: 15, paddingLeft: 10}}>
            <Button
              mode="contained"
              style={[style.buttonWhite,{color:'#6379F4'}]}
              >
              Filter by Date
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
