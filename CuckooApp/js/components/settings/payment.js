import React, {Component} from 'react';
import {TouchableOpacity, Image, AsyncStorage, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
import DatePicker from 'react-native-datepicker'
import IconF from 'react-native-vector-icons/FontAwesome';

import CheckBox from 'react-native-modest-checkbox';

import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Picker,
    Input,
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

import {TextInputMask, TextMask} from 'react-native-masked-text';
import i18 from '../../lib/i18';
var I18n = new i18();
import OfferCard from '../common/offerCard';

import appStyles from '../../themes/style';

import PayPal from 'react-native-paypal-wrapper';

const flyData = {
    flightNumber: "THY12",
    fromAirportShort: "IST",
    fromAirport: "Istanbul - Ataturk",
    toAirportShort: "ECN",
    toAirport: "Lefkoşa - Ercan",
    date: "29.06.2017",
    hour: "23:00",
};

class Payment extends Component {

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
            selectedTabIndex: 0,
            number: '',
            ccv: '',
            mounth: '1',
            rawCardString: '',
            maskedCardString: '',
            year: '1',
            isChecked: true,
        };
    }

    componentDidMount() {
        this.getToken();

        console.log(flyData);

        this.setState({flyData: flyData});

        PayPal.initialize(PayPal.NO_NETWORK, "123456");


    }

    payWithPaypal(){
        PayPal.pay({
            price: '40.70',
            currency: 'TRY',
            description: 'Cuckoo Ödeme Açıklaması',
        }).then(confirm => console.log(confirm))
            .catch(error => console.log(error));
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

    onChangeMask(text) {
        //console.log("text:",text);
        let rawValue = this.refs['cardString'].getRawValue();
        this.state.cardString = rawValue;
        console.log(rawValue);
        //this.fieldValid();
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
                        }}>ÖDEME</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>
                    </View>
                </View>
                <FlyInfo data={this.state.flyData}/>
                <Content style={{backgroundColor: 'white'}}>
                    <Tabs onChangeTab={this.handleChangeTab.bind(this)}>
                        <Tab style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                             heading="KREDİ KARTI"
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
                            <Card>
                                <CardItem style={{
                                    justifyContent: 'center',
                                    width: width * 0.87,
                                }}>
                                    <View>
                                        <View style={{alignItems: 'flex-start', width: width * 0.86, marginLeft: 20}}>
                                            <Text style={styles.blueText}>KREDİ KARTI NUMARASI</Text>
                                        </View>
                                        <View>

                                            <TextInputMask
                                                ref={'cardString'}
                                                type={'cel-phone'}
                                                style={{
                                                    height: 30,
                                                    color: 'gray',
                                                    fontSize: 14,
                                                    marginLeft: 20,

                                                }}
                                                options={{
                                                    dddMask: '9999-9999-9999-9999',
                                                }}
                                                onChangeText={ (setValue) => {
                                                    this.state.maskedCardString = setValue;
                                                    this.setState({maskedCardString: setValue});
                                                    this.onChangeMask(setValue);
                                                }}
                                                maxLength={19}
                                                value={this.state.maskedCardString}
                                            />
                                        </View>
                                        <View style={{
                                            borderBottomWidth: 0.7,
                                            width: width * 0.83,
                                            marginLeft: 20
                                        }}></View>
                                        <View style={{
                                            alignItems: 'flex-start',
                                            width: width * 0.86,
                                            marginLeft: 20,
                                            marginTop: 10
                                        }}>
                                            <Text style={styles.blueText}>SON KULLANMA TARİHİ</Text>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Picker
                                                    style={{height: 40, width: 50}}
                                                    textStyle={{
                                                        color: 'gray',
                                                        fontSize: 13,
                                                        right: -10,
                                                    }}
                                                    iosHeader="AY SECIMI"
                                                    mode="dropdown"
                                                    onValueChange={(mounth) => this.setState({mounth})}
                                                    selectedValue={this.state.mounth}
                                                >
                                                    <Picker.Item label="01" value="1"/>
                                                    <Picker.Item label="02" value="2"/>
                                                    <Picker.Item label="03" value="3"/>
                                                    <Picker.Item label="04" value="4"/>
                                                    <Picker.Item label="05" value="5"/>
                                                    <Picker.Item label="06" value="6"/>
                                                    <Picker.Item label="07" value="7"/>
                                                    <Picker.Item label="08" value="8"/>
                                                    <Picker.Item label="09" value="9"/>
                                                    <Picker.Item label="10" value="10"/>
                                                    <Picker.Item label="11" value="11"/>
                                                    <Picker.Item label="12" value="12"/>
                                                </Picker>
                                                <Text> / </Text>
                                                <Picker
                                                    style={{height: 40, width: 70}}
                                                    textStyle={{
                                                        color: 'gray',
                                                        fontSize: 13,
                                                        right: -10,
                                                    }}
                                                    iosHeader="YIL SECIMI"
                                                    mode="dropdown"
                                                    onValueChange={(year) => this.setState({year})}
                                                    selectedValue={this.state.year}
                                                >
                                                    <Picker.Item label="2017" value="1"/>
                                                    <Picker.Item label="2018" value="2"/>
                                                    <Picker.Item label="2019" value="3"/>
                                                    <Picker.Item label="2020" value="4"/>
                                                    <Picker.Item label="2021" value="5"/>
                                                    <Picker.Item label="2022" value="6"/>
                                                    <Picker.Item label="2023" value="7"/>
                                                    <Picker.Item label="2024" value="8"/>
                                                    <Picker.Item label="2025" value="9"/>
                                                    <Picker.Item label="2026" value="10"/>
                                                    <Picker.Item label="2027" value="11"/>
                                                    <Picker.Item label="2028" value="12"/>
                                                </Picker>
                                            </View>
                                        </View>
                                        <View style={{
                                            borderBottomWidth: 0.7,
                                            width: width * 0.83,
                                            marginLeft: 20
                                        }}></View>
                                        <View style={{
                                            alignItems: 'flex-start',
                                            width: width * 0.86,
                                            marginLeft: 20,
                                            marginTop: 20
                                        }}>
                                            <Text style={styles.blueText}>CCV</Text>
                                        </View>
                                        <View>
                                            <Input style={{color: 'gray', height: 30, fontSize: 14, marginLeft: 20}}
                                                   onChangeText={(ccv) => this.setState({ccv})}
                                                   maxLength={3}
                                                   keyboardType="numeric"
                                                   value={this.state.ccv}
                                            />
                                        </View>
                                        <View style={{
                                            borderBottomWidth: 0.7,
                                            width: width * 0.83,
                                            marginLeft: 20
                                        }}></View>
                                        <View>
                                            <CheckBox
                                                custom
                                                checkedComponent={<Image
                                                    source={require('./../../../images/check.png')}
                                                    style={{alignItems: 'center', width: 30, height: 30}}/>}
                                                uncheckedComponent={<Image
                                                    source={require('./../../../images/checkbox.png')}
                                                    style={{alignItems: 'center', width: 30, height: 30}}/>}
                                                label='kartimi kaydet'
                                                containerStyle={{
                                                    marginTop: 10,
                                                    marginLeft: 20,
                                                    flexDirection: 'row',
                                                    alignItems: 'center'
                                                }}
                                                labelStyle={{
                                                    color: 'gray',
                                                    textDecorationStyle: 'solid',
                                                    textDecorationColor: '#fff',
                                                    fontSize: 14,
                                                    paddingLeft: this.state.isChecked ? 0 : 0
                                                }}
                                                checked={this.state.isChecked}
                                                onChange={(isChecked) => this.setState({isChecked: !this.state.isChecked})}
                                            />
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingBottom: -5,
                                            marginTop: 25,
                                            width: width * 0.87,
                                            marginLeft: 10
                                        }}>
                                            <Button
                                                full
                                                block
                                                light
                                                style={{height: 50, backgroundColor: 'rgb(253,212,9)', flex: 1}}
                                            >
                                                <Text style={{
                                                    color: '#000',
                                                    fontSize: 16
                                                }}>ÖDEME YAP</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </Tab>
                        <Tab
                            heading="PAYPAL"
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

                            <View>
                                <Button
                                    full
                                    block
                                    light
                                    style={{height: 50, backgroundColor: 'rgb(253,212,9)', flex: 1,marginTop:20}}
                                    onPress={() => this.payWithPaypal()}
                                >
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 16
                                    }}>PAYPAL İLE ÖDEME YAP</Text>
                                </Button>
                            </View>

                        </Tab>
                        <Tab
                            heading="HAVALE & EFT"
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
                        </Tab>
                    </Tabs>
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

export default connect(mapStateToProps, bindAction)(Payment);
