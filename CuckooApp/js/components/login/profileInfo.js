import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
    View,
    Dimensions,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {
    Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Input, Item, Picker
} from 'native-base';
import {TextField} from 'react-native-material-textfield';


const {height, width} = Dimensions.get('window');
import styles from './styles';
import DatePicker from 'react-native-datepicker'

import {openDrawer} from '../../actions/drawer';

class ProfileInfo extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            userName: '',
            mobilePhone: '',
            gender: null,
            country: null,
            city: null,
            date: '',
            adress: '',
        };
    }

    onDateChange(date) {
        var dates = date.split("-");
        var formatedDate = dates[2] + "-" + dates[1] + "-" + dates[0];

        var d = new Date(formatedDate).getTime() + 24192000000;
        var date1 = new Date(d);
        var n = ("0" + date1.getDate()).slice(-2) + "-" + ("0" + (date1.getMonth() + 1)).slice(-2) + "-" + date1.getFullYear();

        this.setState({
            date: date,
        });
    }

    componentDidMount() {
        var user = AsyncStorage.getItem('user').then((res) => {
            user = JSON.parse(res);
            this.setState({user: user});
            this.setState({
                userName: user.userName,
                mobilePhone: user.mobilePhone,
                date: user.date,
                gender: user.gender,
                country: user.country,
                city: user.city,
                adress: user.adress,
            })
        });
    }

    saveProfile(){

        var user = AsyncStorage.getItem('user').then((res) => {
            user = JSON.parse(res);
            user.userName = this.state.userName;
            user.mobilePhone = this.state.mobilePhone;
            user.date = this.state.date;
            user.gender = this.state.gender;
            user.country = this.state.country;
            user.city = this.state.city;
            user.adress = this.state.adress;
            this.setState({user: user});
            let userKey = JSON.stringify(user);
            AsyncStorage.setItem('user', userKey, () => {
                console.log('saved');
            });
            console.log(user);

        });



        Actions.home();
    }
    render() {
        const {props: {name, index, list}} = this;
        return (
            <View style={styles.container}>
                <Container style={styles.container}>
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
                    }}>
                        <View style={{width: 50, alignItems: 'center'}}>

                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{
                                color: 'rgb(253,212,9)',
                                fontSize: 18
                            }}>PROFİL BİLGİLERİ</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => {
                                Actions.home()
                            }} activeOpacity={0.8} style={{color: '#fff'}}>
                                <Icon
                                    name='ios-arrow-forward'
                                    style={{color: '#fff'}}
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Content padder>
                        <View style={{marginLeft: 20, marginRight: 20}}>
                            <View>
                                <Text style={{
                                    color: '#b6b7b6'
                                }}>
                                    NAME SURNAME
                                </Text>
                                <View style={{marginBottom: 10}}
                                >
                                    <Item underline>
                                        <Input style={{color: 'white', height: 30, fontSize: 14}}
                                               onChangeText={(userName) => this.setState({userName})}
                                               value={this.state.userName}
                                               />
                                    </Item>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    color: '#b6b7b6'
                                }}>
                                    MOBILE PHONE
                                </Text>
                                <View style={{marginBottom: 10}}
                                >
                                    <Item underline>
                                        <Input style={{color: 'white', height: 30, fontSize: 14}}
                                               onChangeText={(mobilePhone) => this.setState({mobilePhone})}
                                               value={this.state.mobilePhone}
                                        />
                                    </Item>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    color: '#b6b7b6'
                                }}>
                                    BIRTHDAY
                                </Text>
                                <View style={{marginBottom: 10, borderBottomWidth: 1, borderBottomColor: 'white'}}
                                >
                                    <DatePicker
                                        style={{width: 200, color: 'white'}}
                                        date={this.state.date}
                                        mode="date"
                                        format="DD-MM-YYYY"
                                        showIcon={false}
                                        placeholder={"choose"}
                                        placeholderTextColor='white'
                                        confirmBtnText="OKEY"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateInput: {
                                                fontSize: 13,
                                                borderWidth: 0,
                                                right: 60,
                                            },
                                            dateText: {
                                                color: 'white',
                                            },
                                            placeholderText: {
                                                color: 'white'
                                            }
                                        }}
                                        onDateChange={(date) => {
                                            // this.setState({date: date});
                                            this.onDateChange(date)
                                        }}
                                    />
                                </View>
                                <View>
                                    <Text style={{
                                        color: '#b6b7b6'
                                    }}>
                                        GENDER
                                    </Text>
                                    <View style={{marginBottom: 10}}
                                    >
                                        <View style={styles.PickerWrapper}>
                                            <Picker
                                                style={{

                                                    color: 'white'
                                                }}
                                                textStyle={{
                                                    color: 'white',
                                                    fontSize: 13,
                                                    top: 10,
                                                    left: 0,
                                                    right: 15,
                                                }}
                                                iosHeader="Select one"
                                                onValueChange={(gender) => this.setState({gender})}
                                                disabled={true}
                                                enabled={true}
                                                selectedValue={this.state.gender}>
                                                <Picker.Item label={'Seciniz'} value={null}/>
                                                <Picker.Item label={'Erkek'} value='1'/>
                                                <Picker.Item label={'Kadın'} value='2'/>
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{
                                        color: '#b6b7b6'
                                    }}>
                                        COUNTRY
                                    </Text>
                                    <View style={{marginBottom: 10}}
                                    >
                                        <View style={styles.PickerWrapper}>
                                            <Picker
                                                style={{

                                                    color: 'white'
                                                }}
                                                textStyle={{
                                                    color: 'white',
                                                    fontSize: 13,
                                                    top: 10,
                                                    left: 0,
                                                    right: 15,
                                                }}
                                                iosHeader="Select one"
                                                onValueChange={(country) => this.setState({country})}
                                                disabled={true}
                                                enabled={true}
                                                selectedValue={this.state.country}>
                                                <Picker.Item label={'Seciniz'} value={null}/>
                                                <Picker.Item label={'Turkey'} value='1'/>
                                                <Picker.Item label={'Germany'} value='2'/>
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{
                                        color: '#b6b7b6'
                                    }}>
                                        CITY
                                    </Text>
                                    <View style={{marginBottom: 10}}
                                    >
                                        <View style={styles.PickerWrapper}>
                                            <Picker
                                                style={{

                                                    color: 'white'
                                                }}
                                                textStyle={{
                                                    color: 'white',
                                                    fontSize: 13,
                                                    top: 10,
                                                    left: 0,
                                                    right: 15,
                                                }}
                                                placeholder="asd"
                                                iosHeader="Select one"
                                                onValueChange={(city) => this.setState({city})}
                                                disabled={true}
                                                enabled={true}
                                                selectedValue={this.state.city}>
                                                <Picker.Item label={'Seciniz'} value={null}/>
                                                <Picker.Item label={'Istanbul'} value='1'/>
                                                <Picker.Item label={'Izmir'} value='2'/>
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{
                                        color: '#b6b7b6'
                                    }}>
                                        ADDRESS
                                    </Text>
                                    <View style={{marginBottom: 10}}
                                    >
                                        <Item underline>
                                            <Input style={{color: 'white', height: 30, fontSize: 14}}
                                                   onChangeText={(adress) => this.setState({adress})}
                                                   value={this.state.adress}
                                            />
                                        </Item>
                                    </View>
                                </View>
                                <View style={{flex: 1, paddingTop: 10}}>
                                    <Button
                                        rounded
                                        block
                                        light
                                        style={{height: 50, backgroundColor: 'rgb(253,212,9)'}}
                                        onPress={ () => {
                                            this.saveProfile();
                                        }}
                                    >
                                        <Text style={{
                                            color: '#000',
                                            fontSize: 16
                                        }}>SAVE</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Content>
                </Container>
            </View>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
    };
}

const mapStateToProps = state => ({
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(ProfileInfo);
