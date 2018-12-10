import React, {Component} from 'react';
import {TouchableOpacity, AsyncStorage, Dimensions, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import {Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, View, Picker} from 'native-base';
import {Grid, Row} from 'react-native-easy-grid';
import IconF from 'react-native-vector-icons/FontAwesome';

import {TextField} from 'react-native-material-textfield';

import {setIndex} from '../../actions/list';
import {openDrawer} from '../../actions/drawer';

import FlyInfo from '../common/flyInfo';
const {height, width} = Dimensions.get('window');

import i18 from '../../lib/i18';
var I18n = new i18();
import CheckBox from 'react-native-modest-checkbox';

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

class CarryingCreate extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            offerType: '1',
            weight: '1',
            luggageCount: '1',
            price: '1',
            photo: '',
            isChecked: true,
        };
    }

    componentDidMount() {
        console.log("createType", this.props.createType);
        console.log("flyData", this.props.flyData);

    }


    getForm() {
        if (this.props.createType == "carrier") {
            return (
                <View style={{}}>
                    <View style={styles.inputWrapSignUp}>
                        <TextField
                            autoFocus={false}
                            autoCorrect={false}
                            ref='weight'
                            fontSize={14}
                            labelFontSize={18}
                            textColor={'black'}
                            baseColor={'#0000cc'}
                            tintColor={'#0000cc'}
                            errorColor={'#fff'}
                            autoCapitalize='none'
                            returnKeyType='next'
                            onChangeText={(weight) => this.setState({weight})}
                            enablesReturnKeyAutomatically={true}
                            placeholderTextColor={'#333'}
                            value={this.state.weight}
                            label={I18n.t('Carrying.weight').toUpperCase()}
                            allowFontScaling={false}
                        />
                    </View>

                    <View style={styles.inputWrapSignUp}>
                        <TextField
                            autoFocus={false}
                            autoCorrect={false}
                            ref='email'
                            fontSize={14}
                            labelFontSize={18}
                            textColor={'black'}
                            baseColor={'#0000cc'}
                            tintColor={'#0000cc'}
                            errorColor={'#fff'}
                            autoCapitalize='none'
                            returnKeyType='next'
                            onChangeText={(luggageCount) => this.setState({luggageCount})}
                            enablesReturnKeyAutomatically={true}
                            keyboardType='numeric'
                            placeholderTextColor={'#333'}
                            value={this.state.luggageCount}
                            // label='Kullanıcı Adı (Email Adresiniz)'
                            label={I18n.t('Carrying.luggageCount').toUpperCase()}
                            allowFontScaling={false}
                            onEndEditing={() => {
                                //this.onFinishedEditing('email')
                            }}
                        />
                    </View>

                    <View style={styles.inputWrapSignUp}>
                        <TextField
                            autoFocus={false}
                            autoCorrect={false}
                            ref='price'
                            fontSize={14}
                            labelFontSize={18}
                            textColor={'black'}
                            baseColor={'#0000cc'}
                            tintColor={'#0000cc'}
                            errorColor={'#fff'}
                            autoCapitalize='none'
                            returnKeyType='next'
                            onChangeText={(price) => this.setState({price})}
                            enablesReturnKeyAutomatically={true}
                            keyboardType='numeric'
                            placeholderTextColor={'#333'}
                            value={this.state.price}
                            // label='Kullanıcı Adı (Email Adresiniz)'
                            label={I18n.t('Carrying.price').toUpperCase()}
                            allowFontScaling={false}
                            onEndEditing={() => {
                                //this.onFinishedEditing('email')
                            }}
                        />
                    </View>

                </View>
            );
        } else {
            return (
                <View style={{}}>
                    <View style={styles.inputWrapSignUp}>
                        <View>
                            <Text style={styles.blueText}>
                                İLAN SEÇENEĞİ
                            </Text>
                            <View style={{
                                justifyContent: 'space-between',
                                paddingRight: 5,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Picker
                                    style={{height: 30}}
                                    textStyle={{
                                        color: 'gray',
                                        fontSize: 13,
                                        right: 0,
                                    }}
                                    iosHeader="Ilan seçeneği"
                                    mode="dropdown"
                                    onValueChange={(offerType) => this.setState({offerType})}
                                    selectedValue={this.state.offerType}
                                >
                                    <Picker.Item label="Bavul tasıyıcı arıyorum" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                </Picker>
                                <IconF style={{
                                    ...styles.itemArrow,
                                    position: 'absolute',
                                    right: 10,
                                    top: 10,
                                    color: 'gray',
                                    background: 'transparent'
                                }} name='angle-down'/>
                            </View>
                            <View
                                style={{borderBottomWidth: 0.7, width: width * 0.86, borderBottomColor: 'gray'}}></View>
                        </View>

                    </View>
                    <View style={styles.inputWrapSignUp}>
                        <View style={{marginTop: 15}}>
                            <Text style={styles.blueText}>
                                {I18n.t('Carrying.weight').toUpperCase()}
                            </Text>
                        </View>
                        <View style={{
                            justifyContent: 'space-between',
                            paddingRight: 5,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Picker
                                style={{height: 30}}
                                textStyle={{
                                    color: 'gray',
                                    fontSize: 13,
                                    right: 0,
                                }}
                                iosHeader="Agirlik"
                                mode="dropdown"
                                onValueChange={(weight) => this.setState({weight})}
                                selectedValue={this.state.weight}
                            >
                                <Picker.Item label="20" value="1"/>
                                <Picker.Item label="30" value="2"/>
                                <Picker.Item label="40" value="3"/>
                            </Picker>
                            <Text style={{...styles.grayText, alignItems: 'center', paddingRight: 20}}>kg</Text>
                            <IconF style={{
                                ...styles.itemArrow,
                                position: 'absolute',
                                right: 10,
                                top: 10,
                                color: 'gray',
                                background: 'transparent'
                            }} name='angle-down'/>
                        </View>
                        <View style={{borderBottomWidth: 0.7, width: width * 0.86, borderBottomColor: 'gray'}}></View>

                        {/*
                         <TextField
                         autoFocus={false}
                         autoCorrect={false}
                         ref='weight'
                         fontSize={14}
                         labelFontSize={18}
                         textColor={'#fff'}
                         baseColor={'#0000cc'}
                         tintColor={'#0000cc'}
                         errorColor={'#fff'}
                         autoCapitalize='none'
                         returnKeyType='next'
                         onChangeText={(weight) => this.setState({weight})}
                         enablesReturnKeyAutomatically={true}
                         placeholderTextColor={'#333'}
                         value={this.state.weight}
                         //label={I18n.t('Carrying.weight').toUpperCase()}
                         allowFontScaling={false}
                         />
                         */}
                    </View>

                    <View style={styles.inputWrapSignUp}>
                        <View style={{marginTop: 15}}>
                            <Text style={styles.blueText}>
                                {I18n.t('Carrying.luggageCount').toUpperCase()}
                            </Text>
                            <View style={{
                                justifyContent: 'space-between',
                                paddingRight: 5,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Picker
                                    style={{height: 30}}
                                    textStyle={{
                                        color: 'gray',
                                        fontSize: 13,
                                        right: 0,
                                    }}
                                    iosHeader="Valiz Sayisi"
                                    mode="dropdown"
                                    onValueChange={(luggageCount) => this.setState({luggageCount})}
                                    selectedValue={this.state.luggageCount}
                                >
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                </Picker>
                                <Text style={{...styles.grayText, alignItems: 'center', paddingRight: 20}}>kg</Text>
                                <IconF style={{
                                    ...styles.itemArrow,
                                    position: 'absolute',
                                    right: 10,
                                    top: 10,
                                    color: 'gray',
                                    background: 'transparent'
                                }} name='angle-down'/>
                            </View>
                            <View
                                style={{borderBottomWidth: 0.7, width: width * 0.86, borderBottomColor: 'gray'}}></View>
                        </View>
                        {/*
                         <TextField
                         autoFocus={false}
                         autoCorrect={false}
                         ref='email'
                         fontSize={14}
                         labelFontSize={18}
                         textColor={'#fff'}
                         baseColor={'#0000cc'}
                         tintColor={'#0000cc'}
                         errorColor={'#fff'}
                         autoCapitalize='none'
                         returnKeyType='next'
                         onChangeText={(luggageCount) => this.setState({luggageCount})}
                         enablesReturnKeyAutomatically={true}
                         keyboardType='numeric'
                         placeholderTextColor={'#333'}
                         value={this.state.luggageCount}
                         // label='Kullanıcı Adı (Email Adresiniz)'
                         //label={I18n.t('Carrying.luggageCount').toUpperCase()}
                         allowFontScaling={false}
                         onEndEditing={() => {
                         //this.onFinishedEditing('email')
                         }}

                         />
                         */}
                    </View>

                    <View style={styles.inputWrapSignUp}>
                        <View style={{marginTop: 15}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.blueText}>
                                    {I18n.t('Carrying.price').toUpperCase()}
                                </Text>
                                <Text style={{...styles.grayText}}>
                                    (valiz fiyatına 5£ cuckoo eklenecektir)
                                </Text>
                            </View>
                            <View style={{
                                justifyContent: 'space-between',
                                paddingRight: 5,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Picker
                                    style={{height: 30}}
                                    textStyle={{
                                        color: 'gray',
                                        fontSize: 13,
                                        right: 0,
                                    }}
                                    iosHeader="Fiyat"
                                    mode="dropdown"
                                    onValueChange={(price) => this.setState({price})}
                                    selectedValue={this.state.price}
                                >
                                    <Picker.Item label="50 TL" value="1"/>
                                    <Picker.Item label="60 TL" value="2"/>
                                    <Picker.Item label="70 TL" value="3"/>
                                </Picker>
                                <Text style={{...styles.grayText, alignItems: 'center', paddingRight: 20}}>kg</Text>
                                <IconF style={{
                                    ...styles.itemArrow,
                                    position: 'absolute',
                                    right: 10,
                                    top: 10,
                                    color: 'gray',
                                    background: 'transparent'
                                }} name='angle-down'/>
                            </View>
                            <View
                                style={{borderBottomWidth: 0.7, width: width * 0.86, borderBottomColor: 'gray'}}></View>
                        </View>
                        {/*
                         <TextField
                         autoFocus={false}
                         autoCorrect={false}
                         ref='price'
                         fontSize={14}
                         labelFontSize={18}
                         textColor={'#fff'}
                         baseColor={'#0000cc'}
                         tintColor={'#0000cc'}
                         errorColor={'#fff'}
                         autoCapitalize='none'
                         returnKeyType='next'
                         onChangeText={(price) => this.setState({price})}
                         enablesReturnKeyAutomatically={true}
                         keyboardType='numeric'
                         placeholderTextColor={'#333'}
                         value={this.state.price}
                         // label='Kullanıcı Adı (Email Adresiniz)'
                         //label={I18n.t('Carrying.price').toUpperCase()}
                         allowFontScaling={false}
                         onEndEditing={() => {
                         //this.onFinishedEditing('email')
                         }}
                         />
                         */}
                    </View>

                    <View style={styles.inputWrapSignUp}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.blueText}>
                                {I18n.t('Carrying.photo').toUpperCase()}
                            </Text>
                            <Text style={styles.grayText}>(bavulunuzu dıştan çekebilirsiniz.)</Text>
                            {/*
                             <TextField
                             autoFocus={false}
                             autoCorrect={false}
                             ref='photo'
                             fontSize={14}
                             labelFontSize={18}
                             textColor={'#fff'}
                             baseColor={'#0000cc'}
                             tintColor={'#0000cc'}
                             errorColor={'#fff'}
                             autoCapitalize='none'
                             returnKeyType='next'
                             onChangeText={(photo) => this.setState({photo})}
                             enablesReturnKeyAutomatically={true}
                             keyboardType='numeric'
                             placeholderTextColor={'#333'}
                             value={this.state.photo}
                             // label='Kullanıcı Adı (Email Adresiniz)'
                             //label={I18n.t('Carrying.photo').toUpperCase()}
                             allowFontScaling={false}
                             onEndEditing={() => {
                             //this.onFinishedEditing('email')
                             }}
                             />
                             */}
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View>
                            <CheckBox
                                custom
                                checkedComponent={<Image source={require('./../../../images/check@2x.png')}
                                                         style={{alignItems: 'center', width: 30, height: 30}}/>}
                                uncheckedComponent={<Image source={require('./../../../images/checkbox@2x.png')}
                                                           style={{alignItems: 'center', width: 30, height: 30}}/>}
                                label='Yasaya aykırı bir madde olmadığını kabul ediyorum'
                                containerStyle={{
                                    marginTop: 10,
                                    marginLeft: 0,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                                labelStyle={{
                                    color: 'gray',
                                    textDecorationStyle: 'solid',
                                    textDecorationColor: '#fff',
                                    fontSize: 12,
                                    paddingLeft: this.state.isChecked ? 0 : 0
                                }}
                                checked={this.state.isChecked}
                                onChange={(isChecked) => this.setState({isChecked: !this.state.isChecked})}
                            />
                        </View>
                    </View>

                </View>
            );
        }
    }

    getHeaderText() {
        if (this.props.createType == "carrier") {
            return I18n.t('Carrying.carrierHeaderText').toUpperCase();
        } else {
            return I18n.t('Carrying.lookingForCarrierHeaderText').toUpperCase();
        }
    }

    render() {
        var that = this;

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
                        <Text style={{...appStyles.yellowColor, fontSize: 18}}>{this.getHeaderText()}</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>
                    </View>
                </View>

                <FlyInfo data={this.props.flyData}/>

                <Content>
                    <View style={styles.content}>
                        <ScrollView>
                            {this.getForm()}
                            <View style={{flex: 1, paddingTop: 10}}>
                                <Button
                                    rounded
                                    block
                                    light
                                    style={{height: 45, backgroundColor: 'rgb(253,212,9)'}}
                                    onPress={ () => {
                                        //this.save()
                                        Actions.pop();
                                    }}
                                >
                                    <Text style={{
                                        color: '#000',
                                        fontWeight: 'bold',
                                        fontSize: 16
                                    }}>{I18n.t('Carrying.add').toUpperCase()}</Text>
                                </Button>
                            </View>
                        </ScrollView>
                    </View>
                </Content>
            </Container>
        );
    }
}

var styles = {
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        isScroll: false,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'rgb(4,81,156)',
        // alignItems: 'center',
    },
    content: {
        flex: 1,
        height: height - 250,
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#fafafa'
        //alignItems: 'center'
    },
    blueText: {
        color: '#04519c',
        fontWeight: '500',
        fontSize: 14
    },
    grayText: {
        fontWeight: '300',
        fontSize: 12,
        color: '#b6b7b6',
    },
    inputWrap: {
        marginTop: 5,
        //marginTop: -20,
    },
    inputWrapSignUp: {
        marginTop: 0
    },
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

export default connect(mapStateToProps, bindAction)(CarryingCreate);
