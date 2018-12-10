import React, {Component} from 'react';
import {TouchableOpacity, Image, AsyncStorage, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
import IconF from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'

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
    Card,
    CardItem,
} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';

import {setIndex} from '../../actions/list';
import {openDrawer} from '../../actions/drawer';
import styles from './styles';

import FlyInfo from '../common/flyInfo';
const {height, width} = Dimensions.get('window');

import i18 from '../../lib/i18';
var I18n = new i18();
import OfferCard from '../common/offerCard';

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

class GiveAnswer_4 extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            accessToken: '',
            flyData: {},
            selectedTabIndex: 0
        };
    }

    componentDidMount() {
        this.getToken();

        console.log(flyData);

        this.setState({flyData: flyData});
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
                            Actions.pop()
                        }} activeOpacity={0.8} style={{color: '#fff'}}>
                            <Icon
                                name='ios-arrow-back'
                                style={{color: '#fff'}}
                                size={32}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{
                            ...appStyles.yellowColor,
                            fontSize: 18
                        }}>TARİH & SAAT BELİRLE</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>
                    </View>
                </View>
                <FlyInfo data={this.state.flyData}/>
                <Content style={{backgroundColor: 'white'}}>
                    <ScrollView>
                        <OfferCard
                            type="EMPTY"
                            flightName="THY"
                            weight={20}
                            baggage={2}
                            user={{username: 'omer'}}
                        />
                        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                            <Card>
                                <CardItem style={{
                                    justifyContent: 'center',
                                    width: width * 0.87,
                                }}>
                                    <View>
                                        <View style={{
                                            paddingRight: 30,
                                            flexDirection: "column",
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: width * 0.87,
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'flex-start',
                                            }}>
                                                <View style={styles.profilePicWrapperSmall}
                                                >
                                                    <Image style={styles.profilePicSmall}
                                                           source={require('../../../profile.jpg')}
                                                    />
                                                </View>
                                                <View style={{paddingLeft: 30}}>
                                                    <Text style={styles.blueText}>user34</Text>
                                                </View>
                                            </View>
                                            <DatePicker
                                                style={{width: 150, marginTop: 10, marginRight: 30}}
                                                date={this.state.date}
                                                mode="date"
                                                disabled={true}
                                                format="DD-MM-YYYY"
                                                minDate={new Date()}
                                                confirmBtnText={'TAMAM'}
                                                cancelBtnText={'IPTAL'}
                                                customStyles={{
                                                    dateIcon: {
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: 4,
                                                        marginLeft: 0
                                                    },
                                                    dateInput: {
                                                        marginLeft: 36
                                                    }
                                                    // ... You can check the source to find the other keys.
                                                }}
                                                onDateChange={(date) => {
                                                    this.setState({date: date})
                                                }}
                                            />
                                            <DatePicker
                                                style={{width: 150, marginTop: 20, marginRight: 30}}
                                                date={this.state.time}
                                                mode="time"
                                                disabled={true}
                                                is24Hour={true}
                                                confirmBtnText={'TAMAM'}
                                                cancelBtnText={'IPTAL'}
                                                customStyles={{
                                                    dateIcon: {
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: 4,
                                                        marginLeft: 0
                                                    },
                                                    dateInput: {
                                                        marginLeft: 36
                                                    }
                                                    // ... You can check the source to find the other keys.
                                                }}
                                                onDateChange={(date) => {
                                                    this.setState({time: date})
                                                }}
                                            />
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingBottom: -5,
                                            marginTop: 25,
                                        }}>
                                            <Button
                                                block
                                                full
                                                light
                                                style={{height: 50, flex: 1, backgroundColor: 'rgb(253,212,9)'}}
                                                onPress={ () => {
                                                    this.props.hasBackFunc ? this.props.backFunc() : null;
                                                }}
                                            >
                                                <Text style={{
                                                    color: '#000',
                                                    fontWeight: '500',
                                                    fontSize: 16
                                                }}>KABUL ET / ANLAŞMA YAP</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                        <View style={{alignItems: 'center', marginTop: 15}}>
                            <View>
                                <Text style={{...styles.grayText, alignItems: 'center'}}>
                                    YADA
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.blueText}>
                                    YENİ TARİH TEKLİFİ GÖNDER
                                </Text>
                            </View>
                            <Card style={{marginTop: 15}}>
                                <CardItem style={{
                                    justifyContent: 'center',
                                    width: width * 0.87,
                                    flexDirection: 'column',
                                }}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.blueText}>
                                            OFİSTE BULUŞMAK İÇİN TARİH SEÇ
                                        </Text>
                                        <DatePicker
                                            style={{width: 200, marginTop: 10}}
                                            date={this.state.date}
                                            mode="date"
                                            format="DD-MM-YYYY"
                                            minDate={new Date()}
                                            confirmBtnText={'TAMAM'}
                                            cancelBtnText={'IPTAL'}
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                                // ... You can check the source to find the other keys.
                                            }}
                                            onDateChange={(date) => {
                                                this.setState({date: date})
                                            }}
                                        />
                                    </View>
                                    <View style={{alignItems: 'center', marginTop: 25}}>
                                        <Text style={styles.blueText}>
                                            SAAT SEÇ
                                        </Text>
                                        <DatePicker
                                            style={{width: 200, marginTop: 10}}
                                            date={this.state.time}
                                            mode="time"
                                            is24Hour={true}
                                            confirmBtnText={'TAMAM'}
                                            cancelBtnText={'IPTAL'}
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                                // ... You can check the source to find the other keys.
                                            }}
                                            onDateChange={(date) => {
                                                this.setState({time: date})
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingBottom: -5,
                                        marginTop: 25,
                                    }}>
                                        <Button
                                            block
                                            full
                                            light
                                            style={{height: 50, flex: 1, backgroundColor: 'rgb(253,212,9)'}}
                                            onPress={ () => {
                                                Actions.giveAnswer_5();
                                            }}
                                        >
                                            <Text style={{
                                                color: '#000',
                                                fontWeight: '500',
                                                fontSize: 16
                                            }}>YENİ TEKLİF GÖNDER</Text>
                                        </Button>
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                    </ScrollView>
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
    name: state.user.name,
    list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(GiveAnswer_4);
