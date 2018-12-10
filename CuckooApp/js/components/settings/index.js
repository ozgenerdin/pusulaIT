import React, {Component} from 'react';
import {TouchableOpacity, Image, AsyncStorage, ScrollView, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import MyBills from './mybills';
import Contracts from './contracts';
import SettingsTab from './settings';


import StarRating from 'react-native-star-rating';
import IconF from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';


import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    View,
    Tab,
    Tabs,
    List,
    Switch,
    ListItem,
} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';

import {setIndex} from '../../actions/list';
import {openDrawer} from '../../actions/drawer';
import styles from './styles';

import FlyInfo from '../common/flyInfo';
import OfferCard from '../common/offerCard';
const {height, width} = Dimensions.get('window');

import i18 from '../../lib/i18';
var I18n = new i18();

import appStyles from '../../themes/style';

const flyData = {
    flightNumber: "THY12",
    fromAirportShort: "IST",
    fromAirport: "Istanbul - Ataturk",
    toAirportShort: "ECN",
    toAirport: "Lefkoşa - Ercan",
    date: "29.06.2017",
    hour: "23:00",
};

class Settings extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            currencyType: 'EURO',
            accessToken: '',
            flyData: {},
            user: {name: ''},
            selectedTabIndex: 0
        };
    }

    componentDidMount() {
        this.getToken();
        var user = AsyncStorage.getItem('user').then((res) => {
            user = JSON.parse(res);
            this.setState({user: user});
        });

    }

    test() {
        console.log("works");
    }

    async getToken() {
        try {
            let accessToken = await AsyncStorage.getItem('token');
            if (!accessToken) {

            } else {
                this.setState({accessToken: accessToken})
            }
        } catch (error) {

        }
    }


    handleChangeTab({i, ref, from,}) {
        this.state.selectedTabIndex = i;
    }

    onPress() {
        Actions.giveAnswer();
    }

    render() {
        var that = this;

        console.log("selectedTabIndex", that.state.selectedTabIndex);

        return (

            <Container style={{...styles.container, ...appStyles.appBackgroundColor}}>

                <View style={{
                    // backgroundColor: '#00bcd2',
                    width: width,
                    height: 45,
                    marginTop: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                    zIndex: 25,
                    overflow: 'visible',
                    // shadowColor: 'black',
                    // shadowOpacity: .2,
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 1
                    // },
                }}>
                    <View style={{width: 50, alignItems: 'center'}}>

                        <TouchableOpacity onPress={() => {
                            that.props.openDrawer()
                        }} activeOpacity={0.8} style={{color: '#fff'}}>
                            <Icon
                                name='ios-menu'
                                style={{color: '#fff'}}
                                size={32}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{
                            ...appStyles.yellowColor,
                            fontSize: 18,
                        }}>{I18n.t('Common.cuckoo').toUpperCase()}</Text>
                    </View>
                    <IconF style={styles.cameraIcon} name='sign-out'/>

                </View>


                <Content style={{backgroundColor: 'white'}}
                         scrollEnabled={false}
                >
                    <View style={styles.upperContainer}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={styles.profilePicWrapper}>
                                <Image style={styles.profilePic}
                                       source={require('../../../profile.jpg')}
                                />
                                <View style={{
                                    backgroundColor: '#fcc231',
                                    padding: 5,
                                    borderRadius: 17,
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                }}>
                                    <IconF style={styles.cameraIcon} name='camera'/>
                                </View>
                            </View>

                            <View style={{
                                paddingTop: 10,
                                flexDirection: 'column',
                                paddingLeft: 10,
                                alignItems: 'center'
                            }}>
                                <Text style={{color: 'white', paddingBottom: 5}}>
                                    {this.state.user ? this.state.user.username : ""}
                                </Text>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    starSize={15}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    starColor={styles.starStyle.color}
                                    emptyStarColor={styles.starStyle.backgroundColor}
                                />
                                <Text style={{
                                    color: 'white',
                                    textDecorationLine: 'underline',
                                    paddingTop: 5,
                                    paddingBottom: 15
                                }}>
                                    UPDATE DATA FLIGHT
                                </Text>
                            </View>

                        </View>
                    </View>

                    <Tabs
                        renderTabBar={() => <ScrollableTabBar />}
                        onChangeTab={this.handleChangeTab.bind(this)}
                    >
                        <Tab style={{
                            backgroundColor: '#04519c',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                             heading="GELEN TEKLİFLER"
                             tabStyle={{backgroundColor: '#04519c'}}
                             textStyle={{
                                 fontSize: 12,
                                 textAlign: 'center',
                                 fontWeight: '400',
                                 textDecorationLine: 'underline'
                                 , color: '#fff'
                             }}
                             activeTabStyle={{backgroundColor: '#0074e5'}}
                             activeTextStyle={{
                                 fontSize: 12,
                                 textAlign: 'center',
                                 color: '#fff',
                                 fontWeight: 'normal'
                             }}>
                            <Content
                                scrollEnabled={false}>
                                <ScrollView style={{
                                    flex: 1,
                                    height: 370,
                                }}>
                                    <OfferCard
                                        type="EMPTY"
                                        flightName="THY"
                                        weight={20}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                    <OfferCard
                                        type="ANSWER"
                                        flightName="THY12"
                                        weight={20}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                    <OfferCard
                                        type="ANSWERED"
                                        flightName="THY12"
                                        weight={25}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                        hasBackFunc={true}
                                        backFunc={this.onPress.bind(this)}
                                    />
                                    <OfferCard
                                        type="NOT_ANSWERED"
                                        flightName="THY12"
                                        weight={25}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                    <OfferCard
                                        type="ACCEPT"
                                        hasBackFunc={true}
                                        backFunc={this.test.bind(this)}
                                        flightName="THY12"
                                        weight={25}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                </ScrollView>
                            </Content>
                        </Tab>
                        <Tab style={{
                            backgroundColor: '#04519c',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                             heading="VERDİĞİM TEKLİFLER"
                             tabStyle={{backgroundColor: '#04519c'}}
                             textStyle={{
                                 fontSize: 12,
                                 textAlign: 'center',
                                 fontWeight: '400',
                                 textDecorationLine: 'underline'
                                 , color: '#fff'
                             }}
                             activeTabStyle={{backgroundColor: '#0074e5'}}
                             activeTextStyle={{
                                 fontSize: 12,
                                 textAlign: 'center',
                                 color: '#fff',
                                 fontWeight: 'normal'
                             }}>
                            <Content
                                scrollEnabled={false}>
                                <ScrollView style={{
                                    flex: 1,
                                    height: 370,
                                }}>
                                    <OfferCard
                                        type="EMPTY"
                                        flightName="THY"
                                        weight={20}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                    <OfferCard
                                        type="ANSWER"
                                        flightName="THY12"
                                        weight={20}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                    <OfferCard
                                        type="ANSWERED"
                                        flightName="THY12"
                                        weight={25}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                        hasBackFunc={true}
                                        backFunc={this.onPress.bind(this)}
                                    />
                                    <OfferCard
                                        type="NOT_ANSWERED"
                                        flightName="THY12"
                                        weight={25}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                    <OfferCard
                                        type="ACCEPT"
                                        hasBackFunc={true}
                                        backFunc={this.test.bind(this)}
                                        flightName="THY12"
                                        weight={25}
                                        baggage={2}
                                        user={{username: 'omer'}}
                                    />
                                </ScrollView>
                            </Content>
                        </Tab>

                        <Tab style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                             heading="MY BILLS"
                             tabStyle={{backgroundColor: '#04519c'}}
                             textStyle={{
                                 fontSize: 12,
                                 textAlign: 'center',
                                 fontWeight: '400',
                                 textDecorationLine: 'underline'
                                 , color: '#fff'
                             }}
                             activeTabStyle={{backgroundColor: '#0074e5'}}
                             activeTextStyle={{
                                 fontSize: 12,
                                 textAlign: 'center',
                                 color: '#fff',
                                 fontWeight: 'normal'
                             }}>
                            <MyBills/>
                        </Tab>
                        <Tab
                            heading="CONTRACTS"
                            tabStyle={{backgroundColor: '#04519c'}}
                            textStyle={{
                                fontSize: 12,
                                textAlign: 'center',
                                fontWeight: '400',
                                textDecorationLine: 'underline'
                                , color: '#fff'
                            }}
                            activeTabStyle={{backgroundColor: '#0074e5'}}
                            activeTextStyle={{
                                fontSize: 12,
                                textAlign: 'center',
                                color: '#fff',
                                fontWeight: 'normal'
                            }}>
                            <Contracts/>
                        </Tab>

                        <Tab
                            heading="SETTINGS"
                            tabStyle={{backgroundColor: '#04519c', flex: 1}}
                            textStyle={{
                                fontSize: 12,
                                textAlign: 'center',
                                fontWeight: '400',
                                textDecorationLine: 'underline'
                                , color: '#fff'
                            }}
                            activeTabStyle={{backgroundColor: '#0074e5'}}
                            activeTextStyle={{
                                fontSize: 12,
                                textAlign: 'center',
                                color: '#fff',
                                fontWeight: 'normal'
                            }}>
                            <SettingsTab/>
                        </Tab>
                    </Tabs>

                    {/*<Grid style={styles.mt}>*/}
                    {/*{this.props.list.map((item, i) =>*/}
                    {/*<Row key={i}>*/}
                    {/*<TouchableOpacity*/}
                    {/*style={styles.row}*/}
                    {/*onPress={() => this.newPage(i)}*/}
                    {/*>*/}
                    {/*<Text style={styles.text}>{item}</Text>*/}
                    {/*</TouchableOpacity>*/}
                    {/*</Row>*/}
                    {/*)}*/}
                    {/*</Grid>*/}
                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        setIndex: index => dispatch(setIndex(index)),
        openDrawer: () => dispatch(openDrawer()),
    };
}

const mapStateToProps = state => ({
    //TODO buraya sonra bakilacak
    //name: state.user.name,
    //list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Settings);
