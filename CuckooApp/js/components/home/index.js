import React, {Component} from 'react';
import {TouchableOpacity, Image, AsyncStorage, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
import IconF from 'react-native-vector-icons/FontAwesome';

import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Cards,
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
import OfferCard from '../common/offerCard';

import i18 from '../../lib/i18';
var I18n = new i18();

import appStyles from '../../themes/style';

const flyData = {
    flightNumber: "THY12",
    fromAirportShort: "IST",
    fromAirport: "Istanbul - Ataturk",
    toAirportShort: "ECN",
    toAirport: "Lefkoşa - Ercan",
    date: "29 Haziran Pzr",
    hour: "23:00",
};

class Home extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
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
                            fontSize: 18
                        }}>{I18n.t('Common.cuckoo').toUpperCase()}</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>

                    </View>

                </View>


                <FlyInfo data={this.state.flyData}/>

                <Tabs onChangeTab={this.handleChangeTab.bind(this)}>
                    <Tab style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}
                         heading="BAVUL TAŞIYICI ARIYORUM"
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
                        <ScrollView>
                            <OfferCard
                                type="OFFER"
                                flightName="THY15"
                                weight={20}
                                baggage={2}
                                hasBackFunc={true}
                                backFunc={() => {

                                }}
                                user={{username: 'omer'}}
                            />
                            <OfferCard
                                type="OFFER"
                                flightName="THY12"
                                weight={20}
                                baggage={2}
                                user={{username: 'omer'}}
                                hasBackFunc={true}
                                backFunc={() => {
                                }}
                            />

                            <OfferCard
                                type="OFFER"
                                flightName="THY12"
                                weight={20}
                                baggage={2}
                                user={{username: 'omer'}}
                                hasBackFunc={true}
                                backFunc={() => {

                                }}
                            />
                        </ScrollView>
                        <View style={{alignItems: 'center', height: 50}}>
                            <Button block style={{flex: 1, width: width, height: 50, backgroundColor: '#005099'}} onPress={() => {
                                Actions.createCarrying({
                                    createType: that.state.selectedTabIndex == 0 ? 'lookingForCarrier' : 'carrier',
                                    flyData: flyData
                                });
                            }}>
                                <Text style={styles.whiteText}>SENDE ILAN VER</Text>
                            </Button>
                        </View>
                    </Tab>
                    <Tab
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                        heading="BAVUL TAŞIMAK İSTİYORUM"
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
                        <ScrollView>
                            <OfferCard
                                type="OFFER"
                                flightName="THY12"
                                weight={20}
                                baggage={2}
                                user={{username: 'omer'}}
                            />
                            <OfferCard
                                type="OFFER"
                                flightName="THY12"
                                weight={20}
                                baggage={2}
                                user={{username: 'omer'}}
                            />
                            <OfferCard
                                type="OFFER"
                                flightName="THY12"
                                weight={20}
                                baggage={2}
                                user={{username: 'omer'}}
                            />
                        </ScrollView>
                        <View style={{alignItems: 'center', height: 50}}>
                            <Button block style={{flex: 1, width: width, backgroundColor: '#005099'}} onPress={() => {
                                Actions.createCarrying({
                                    createType: that.state.selectedTabIndex == 0 ? 'lookingForCarrier' : 'carrier',
                                    flyData: flyData
                                });
                            }}>
                                <Text style={styles.whiteText}>SENDE ILAN VER</Text>
                            </Button>
                        </View>
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

export default connect(mapStateToProps, bindAction)(Home);
