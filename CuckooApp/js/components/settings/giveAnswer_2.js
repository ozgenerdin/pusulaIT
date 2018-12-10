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

class GiveAnswer_2 extends Component {

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

    onPress(){
        Actions.payment();
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
                        }}>TEKLİFE CEVAP VER</Text>
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
                        <OfferCard
                            type="ACCEPT"
                            flightName="THY"
                            weight={20}
                            baggage={2}
                            user={{username: 'omer'}}
                            style={{backgroundColor: 'white'}}
                            hasBackFunc ={true}
                            backFunc={this.onPress.bind(this)}
                        />
                        <View style={{alignItems: 'center'}}>
                            <Text style={{...styles.grayText, fontSize: 12}}>
                                YADA
                            </Text>
                            <Text style={{...styles.blueText}}>
                                YENİ TEKLİF GÖNDER
                            </Text>
                        </View>
                        <OfferCard
                            type="PRICEOFFER"
                            style={{backgroundColor: 'white'}}
                        />
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

export default connect(mapStateToProps, bindAction)(GiveAnswer_2);
