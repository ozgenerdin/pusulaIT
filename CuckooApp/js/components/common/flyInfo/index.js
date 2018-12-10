import React, {Component} from 'react';
import {
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    ActivityIndicator,
    TouchableHighlight,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Alert,
    Platform
} from 'react-native';


import {Container, Content, Item, Input, Button, Icon, View, Text, CheckBox} from 'native-base';


import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

import IconF from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import appStyles from '../../../themes/style';

import i18 from '../../../lib/i18';
var I18n = new i18();

// import {login} from '../../lib/api';
// import {API_SIGNIN} from '../../lib/services';


class FlyInfo extends Component {

    static propTypes = {
        data: React.PropTypes.object,
    }

    constructor(props) {
        super(props);

        // this.state = {
        //     flightNumber: this.props.data.flightNumber ? this.props.data.flightNumber : "",
        //     fromAirportShort: this.props.data.fromAirportShort ? this.props.data.fromAirportShort : "",
        //     fromAirport: this.props.data.fromAirport ? this.props.data.fromAirport : "",
        //     toAirportShort: this.props.data.toAirportShort ? this.props.data.toAirportShort : "",
        //     toAirport: this.props.data.toAirport ? this.props.data.toAirport : "",
        //     date: this.props.data.date ? this.props.data.date : "",
        //     hour: this.props.data.hour ? this.props.data.hour : "",
        // };
    }


    render() {
        console.log(this.props.data.date)


        return (
            <View style={{...styles.container, ...appStyles.appBackgroundColor}}>
                <Container style={{flex: 1, padding: 15}}>
                    <Content scrollEnabled={false}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <View >
                                <Text style={{color: '#fafafa', marginBottom: 5, fontSize: 18}}>UÇUŞ NUMARASI
                                    : {this.props.data.flightNumber}</Text>
                            </View>

                            <View style={{flexDirection: 'row', flex: 1}}>
                                <View style={{flex: 1}}>
                                    <View style={{
                                        height: 35, width: 75, flexDirection: 'row',
                                        alignItems: 'center', justifyContent: 'center'

                                    }}><Image source={require('./../../../../images/ic_kalkis.png')}
                                              style={{fontSize: 25, ...appStyles.yellowColor}}/>

                                        <Text style={{
                                            color: '#fafafa',
                                            fontSize: 25,
                                            fontWeight: '500',
                                            marginLeft: 5
                                        }}>{this.props.data.fromAirportShort}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{
                                            color: '#fafafa',
                                            fontSize: 14
                                        }}>{this.props.data.fromAirport}</Text>
                                    </View>
                                </View>

                                <View style={{alignItems: 'center', justifyContent: 'center', width: 50}}>
                                    <Image source={require('./../../../../images/ic_flight.png')}
                                           style={{fontSize: 18, ...appStyles.yellowColor}}/>
                                </View>

                                <View style={{flex: 1}}>
                                    <View style={{
                                        height: 35,
                                        width: 75,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        alignSelf: 'flex-end',
                                        paddingRight: 10

                                    }}>
                                        <Text style={{
                                            color: '#fafafa',
                                            fontSize: 25,
                                            fontWeight: '500',
                                            marginRight: 5
                                        }}>{this.props.data.toAirportShort}</Text>
                                        <Image source={require('./../../../../images/ic_inis.png')}
                                               style={{fontSize: 25, ...appStyles.yellowColor}}/>
                                    </View>
                                    <View style={{flexDirection: 'row', flex: 1}}>
                                        <Text style={{
                                            textAlign: 'right',
                                            flex: 1,
                                            color: '#fafafa',
                                            fontSize: 14
                                        }}>{this.props.data.toAirport}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{flexDirection: 'row', flex: 1, marginTop: 10}}>
                                <View style={{flexDirection: 'column', flex: 1}}>
                                    <View
                                        style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                                        <Image source={require('./../../../../images/ic_time.png')}
                                               style={{fontSize: 18, ...appStyles.yellowColor}}/>
                                        <Text style={{...appStyles.yellowColor, fontSize: 14}}>Kalkış Tarihi</Text>
                                    </View>

                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 100,
                                        marginLeft: 10
                                    }}>
                                        <Text style={{color: '#fafafa', fontSize: 14}}>{this.props.data.date}</Text>
                                    </View>
                                    <View
                                        style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                                        <Image source={require('./../../../../images/ic_hour.png')}
                                               style={{fontSize: 18, ...appStyles.yellowColor}}/>
                                        <Text style={{...appStyles.yellowColor, fontSize: 14}}>Kalkış Saati</Text>
                                    </View>
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 100,
                                        marginLeft: 10
                                    }}>
                                        <Text style={{color: '#fafafa', fontSize: 14}}>{this.props.data.hour}</Text>
                                    </View>
                                </View>

                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image source={require('./../../../../images/ic_calender.png')}
                                           style={{fontSize: 18, ...appStyles.yellowColor}}/>
                                </View>

                                <View style={{
                                    flex: 1, flexDirection: 'row',
                                    alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end',
                                    marginBottom: 10,
                                }}>

                                    <View style={{flexDirection: 'column', flex: 1}}>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{...appStyles.yellowColor, fontSize: 14}}>Varış Tarihi</Text>
                                            <Image source={require('./../../../../images/ic_time.png')}
                                                   style={{fontSize: 18, ...appStyles.yellowColor}}/>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 100,
                                            marginRight: 20
                                        }}>
                                            <Text style={{color: '#fafafa', fontSize: 14}}>{this.props.data.date}</Text>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{...appStyles.yellowColor, fontSize: 14}}>Varış Saati</Text>
                                            <Image source={require('./../../../../images/ic_hour.png')}
                                                   style={{fontSize: 18, ...appStyles.yellowColor}}/>
                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 100,
                                            marginLeft: 10
                                        }}>
                                            <Text style={{color: '#fafafa', fontSize: 14}}>{this.props.data.hour}</Text>
                                        </View>
                                    </View>

                                    <View style={{alignItems: 'center', justifyContent: 'center'}}>

                                    </View>
                                </View>

                            </View>

                        </View>

                    </Content>
                </Container>

            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (parameters) => dispatch(login(parameters))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FlyInfo);
