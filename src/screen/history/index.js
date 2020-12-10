import React, {Fragment, useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {RectButton, FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {getHistory} from '../../redux/actions/History';
import style from '../style';
import {imageURI} from '../../utils';
import Income from '../../assets/icon/arrow-down.svg';
import Expense from '../../assets/icon/arrow-up.svg';
import IncomeActive from '../../assets/icon/income-active.svg';
import ExpenseActive from '../../assets/icon/expense-active.svg';
const History = (props) => {
  // const [income, setIncome] = useState('');
  // const [outcome, setOutcome] = useState('');
  const [transaction, setTransaction] = useState([]);
  const [loadMore, setLoadMore] = useState(4);

  const toDashboard = () => {
    props.navigation.navigate('Dashboard');
  };
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const User = useSelector((s) => s.User);
  const [outcome, setOutcome] = useState(false);
  const [income, setIncome] = useState(false);
  const [isFilter, setFilter] = useState(false)
  const {data} = useSelector((s) => s.getHistory);
  const dataAll = data.data.data;
  const authorization = {Authorization: Auth.data.token.token};
  const user = User.data;
  useEffect(() => {
    dispatch(getHistory(authorization));

    setTransaction(dataAll);

    const outcomecek = dataAll.filter((item) => {
      return item.receiver == user.id;
    });

    setOutcome(outcomecek);

    const incomecek = dataAll.filter((item) => {
      return item.receiver != user.id;
    });

    setIncome(incomecek);
  }, []);

  const setloadMore = () => {
    const countLength = dataAll.length;
    setLoadMore(countLength);
  };

  const pressOutcome = () => {
    setSorting(true);
    setTransaction(outcome);
    setOutcome(!outcome)
  };

  const pressIncome = () => {
    setSorting(true);
    setTransaction(income);
    setIncome(!income);
  };
  return (
    <Fragment>
      <ScrollView style={style.bodyBackground}>
        <View style={style.container}>
          <View style={style.likeRowTwo}>
            <Text style={style.paginationBorder}>This week</Text>
          </View>
        </View>
        <View style={style.flexColumn}>
          {transaction == 'undefined' ? (
            <Text></Text>
          ) : (
            transaction.slice(0, loadMore).map((item) => {
              return (
                <View style={style.contentHistory}>
                  <View style={{flex: 5, flexDirection: 'row'}}>
                    {/* picture */}
                    <View>
                      <Image
                        style={{
                          borderRadius: 10,
                          width: 52,
                          height: 52,
                          marginRight: 20,
                        }}
                        source={{
                          uri:
                            User.id == item.receiver
                              ? !item.imgSender == ''
                                ? item.imgSender
                                : 'https://i.ibb.co/KjFr43p/blank.png'
                              : !item.imgReceiver == ''
                              ? item.imgReceiver
                              : 'https://i.ibb.co/KjFr43p/blank.png',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                        marginLeft: 10,
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        {User.data.id == item.receiver
                          ? item.sender
                          : item.receiveBy}
                      </Text>
                      <Text>Transfer</Text>
                    </View>
                  </View>
                  <View style={{flex: 5}}>
                    {User.id == item.receiver ? (
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '700',
                          color: '#1EC15F',
                          textAlign: 'right',
                        }}>
                        +{item.amountTransfer}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '700',
                          color: 'red',
                          textAlign: 'right',
                        }}>
                        -{item.amountTransfer}
                      </Text>
                    )}
                  </View>
                </View>
              );
            })
          )}

          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <TouchableNativeFeedback onPress={() => setloadMore()}>
              <Text style={{color: '#6379F4', fontSize: 20}}>Load More</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View
          style={{
            zIndex: isFilter ? -1 : 0,
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginTop: 30,
            marginBottom: 30,
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
          }}>
          <RectButton
            onPress={() => {
              pressIncome();
              setOutcome(false);
            }}
            style={income ? styles.buttonActive : styles.button}>
            {income ? (
              <IncomeActive width={28} height={28} />
            ) : (
              <Income width={28} height={28} />
            )}
          </RectButton>
          <RectButton
            onPress={() => {
              pressOutcome();
              setIncome(false);
            }}
            style={outcome ? styles.buttonActive : styles.button}>
            {outcome ? (
              <ExpenseActive width={28} height={28} />
            ) : (
              <Expense width={28} height={28} />
            )}
          </RectButton>
          <RectButton
            onPress={() => {
              setFilter(true);
              bs.current.snapTo(0);
            }}
            style={[styles.button, {paddingHorizontal: 40}]}>
            <Text
              style={{fontSize: 18, color: style.primary, fontWeight: 'bold'}}>
              Filter By Date
            </Text>
          </RectButton>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default History;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 0,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
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
  button: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 4,
  },
  buttonActive: {
    backgroundColor: '#6379F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    padding: 15,
    borderRadius: 12,
    elevation: 4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 3,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    zIndex: 3,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#6379F4',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
