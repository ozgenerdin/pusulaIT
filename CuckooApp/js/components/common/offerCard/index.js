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

import {Card, CardItem} from 'native-base';
import StarRating from 'react-native-star-rating';

import {Container, Content, Item, Input, Button, Icon, View, Text, Picker} from 'native-base';

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


class OfferCard extends Component {


    constructor(props) {

        super(props);
        this.state = {
            flightName: this.props.flightName,
            weight: this.props.weight,
            baggageCount: this.props.baggage,
            prevPrice: this.props.prevPrice,
            price: this.props.baggage,
            user: this.props.user,
            backFunc: this.props.hasBackFunc ? this.props.backFunc : null,
            renderTop: true,
            currencyType: '1',

        }

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

    componentDidMount() {
    }

    renderBottom() {
        let bottomType = this.props.type;
        switch (bottomType) {
            case "EMPTY":
                return <View style={{
                    marginTop: 15,
                    left: 15,
                    width: 270
                }}></View>
                break;
            case "OFFER":
                return <View>
                    <View style={{
                        marginTop: 20,
                        left: 15,
                        width: 270
                    }}></View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingBottom: -5,
                        flex: 1,
                    }}>
                        <Button block style={{flex: 1, width: 250}} transparent onPress={() => {
                            if (this.props.hasBackFunc)
                                this.props.backFunc()
                        }}>
                            <Text style={styles.grayText}>TEKLİF VER/ACCEPT</Text>
                        </Button>
                    </View>
                </View>
                break;
            case "ANSWER":
                return <View>
                    <View style={{
                        marginTop: 20,
                        left: 15,
                        width: 270
                    }}></View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingBottom: -5,
                    }}>
                        <Button transparent onPress={() => {
                            this.props.hasBackFunc ? this.props.backFunc() : null;
                        }}>
                            <Text style={styles.grayText}>CEVAP VER</Text>
                        </Button>
                    </View>
                </View>
                break;
            case "ANSWERED":
                return <View>
                    <View style={{
                        marginTop: 20,
                        left: 15,
                        width: 270
                    }}></View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingBottom: -5,
                    }}>
                        <Button transparent onPress={() => {
                            this.props.hasBackFunc ? this.props.backFunc() : null;
                        }}>
                            <Text style={styles.greenText}>CEVAPLANDI</Text>
                        </Button>
                    </View>
                </View>
                break;
            case "NOT_ANSWERED":
                return <View>
                    <View style={{
                        marginTop: 20,
                        left: 15,
                        width: 270
                    }}></View>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingBottom: -5,
                    }}>
                        <Button transparent onPress={() => {
                            this.props.hasBackFunc ? this.props.backFunc() : null;
                        }}>
                            <Text style={styles.grayText}>HENÜZ CEVAPLANMADI</Text>
                        </Button>
                    </View>
                </View>
                break;
            case "ACCEPT":
                return <View>

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
                            onPress={() => {
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
                break;
            case "PRICEOFFER":
                this.state.renderTop = false;
                return <View style={{width: width, marginLeft: 55, marginTop: 20, paddingRight: 40}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.blueText}>
                            FİYAT TEKLİFİN
                        </Text>
                        <Text style={{...styles.grayText, top: -5}}>
                            (valiz fiyatına 5£ cuckoo eklenecektir)
                        </Text>
                    </View>
                    <View style={{

                        marginRight: 12,
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{
                                paddingRight: 5,
                                flex: 0.7,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <Picker
                                    style={{height: 40, width: 260}}
                                    textStyle={{
                                        color: 'gray',
                                        fontSize: 13,
                                        right: -10,
                                    }}
                                    iosHeader="PARA BİRİMİ"
                                    mode="dropdown"
                                    onValueChange={(currencyType) => this.setState({currencyType})}
                                    selectedValue={this.state.currencyType}
                                >
                                    <Picker.Item label="45£" value="1"/>
                                    <Picker.Item label="50£" value="2"/>
                                    <Picker.Item label="55£" value="3"/>
                                </Picker>
                                <View>
                                    <IconF style={{
                                        ...styles.itemArrow,
                                        position: 'absolute',
                                        right: 10,
                                        top: 10,
                                        background: 'transparent'
                                    }} name='angle-down'/>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.8,
                            marginLeft: 10,
                            marginRight: 10
                        }}></View>
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
                                onPress={() => {
                                    this.props.hasBackFunc ? this.props.backFunc() : null;
                                }}
                            >
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '500',
                                    fontSize: 16
                                }}>YENİ TEKLİF GÖNDER</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                break;
        }
        return <View>
            <View style={{
                marginTop: 20,
                left: 15,
                borderWidth: 0.2,
                width: 270
            }}></View>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: -5,
            }}>
                <Button transparent onPress={() => {
                    Actions.offer()
                }}>
                    <Text style={styles.grayText}>TEKLİF VER/ACCEPT</Text>
                </Button>
            </View>
        </View>
    }

    renderTop() {
        if (this.state.renderTop)
            return <View>
                <Text style={{
                    color: '#fdd409',
                    paddingLeft: 20,
                    fontSize: 14,
                }}>UÇUŞ NUMARASI: {this.state.flightName}</Text>
                <View style={{
                    paddingRight: 30,
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        left: 13,
                        top: 5,
                        marginBottom: -5,
                    }}>

                        <View style={styles.profilePicWrapper}
                        >
                            <Image style={styles.profilePic}
                                   source={require('../../../../profile.jpg')}
                            />
                        </View>
                        <View style={{flexDirection: 'column', paddingLeft: 10,}}>
                            <Text style={styles.blueText}>
                                {this.state.user ? this.state.user.username : ""}
                            </Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.rating}
                                starSize={15}
                                selectedStar={(rating) => {
                                    this.setState({rating: rating})
                                }}
                                starColor={styles.starStyle.color}
                                emptyStarColor={styles.starStyle.backgroundColor}
                            />
                        </View>
                        <Image style={{
                            position: 'relative',
                            height: 56,
                            width: 60,
                            alignItems: 'center',
                            marginLeft: 15,
                            backgroundColor: 'transparent',
                        }}
                               source={require('../../../../images/offerCard/ic_suitcase.png')}
                        >
                            <View style={{
                                marginTop: 10,
                                flex: 1,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            >
                                <Text style={{
                                    fontSize: 13,
                                    color: '#04519d',
                                    fontWeight: 'bold',
                                }}>{this.state.weight}KG</Text>
                                <Text style={{fontSize: 12}}>{this.state.baggageCount} Valiz</Text>
                            </View>

                        </Image>

                        <View style={{
                            position: 'relative',
                            height: 70,
                            alignItems: 'center',
                            marginLeft: 15,
                            backgroundColor: 'transparent',
                        }}>

                            <Image style={{
                                position: 'relative',
                                Right: 10,
                                width: 65,
                                height: 70,
                                flexDirection: 'column'
                            }}

                                   source={require('../../../../images/offerCard/ic_money.png')}
                            >
                                <View style={{
                                    marginTop: 20,
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                >
                                    <Text style={{
                                        textDecorationLine: 'line-through',
                                        color: styles.iconBag.color,
                                        fontSize: 14,
                                        fontWeight: '400'
                                    }}>50€</Text>
                                    <Text style={{
                                        color: styles.iconBag.color,
                                        fontSize: 14,
                                        fontWeight: 'bold'
                                    }}>50€</Text>
                                </View>
                            </Image>
                        </View>

                    </View>

                </View>
            </View>
        else
            return <View></View>
    }

    render() {


        return (
            <View style={{...styles.container, ...appStyles.appBackgroundColor}}>
                <Content scrollEnabled={false}>
                    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                        <Card>
                            <CardItem style={{
                                justifyContent: 'center',
                                width: width * 0.87,
                            }}>
                                <View style={{flexDirection: 'column'}}>
                                    {this.renderTop()}
                                    {this.renderBottom()}
                                </View>
                            </CardItem>
                        </Card>
                    </View>

                </Content>

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


export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
