import React, {Component} from 'react';
import {TouchableOpacity, Image, AsyncStorage, Dimensions, View} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Input,
    Left,
    Item,
    Right,
    Body,
    Card,
    CardItem,
    Picker
} from 'native-base';
const {height, width} = Dimensions.get('window');
import FlyInfo from '../common/flyInfo';
import StarRating from 'react-native-star-rating';

import {openDrawer} from '../../actions/drawer';
import styles from './styles';
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
class changePassword extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            flyData: {},
            price: null
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

    render() {

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
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{
                            color: 'rgb(253,212,9)',
                            fontSize: 18
                        }}>ŞİFREMİ DEĞİŞTİR</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>
                    </View>
                </View>
                <Content padder style={{paddingTop:20,flex: 1, backgroundColor: 'white'}}>
                    <Text style={styles.blueText}>MEVCUT ŞİFRE</Text>
                    <Item underline>
                        <Input style={{color: '#b6b7b6', height: 30, fontSize: 14}}
                               onChangeText={(oldPassword) => this.setState({oldPassword})}
                               value={this.state.mobilePhone}
                               secureTextEntry={true}
                        />
                    </Item>
                    <View style={{paddingBottom: 20}}/>
                    <Text style={styles.blueText}>YENİ ŞİFRE</Text>
                    <Item underline>
                        <Input style={{color: '#b6b7b6', height: 30, fontSize: 14}}
                               onChangeText={(oldPassword) => this.setState({oldPassword})}
                               value={this.state.mobilePhone}
                               secureTextEntry={true}
                        />
                    </Item>
                    <View style={{paddingBottom: 20}}/>
                    <Text style={styles.blueText}>YENİ ŞİFRE(TEKRAR)</Text>
                    <Item underline>
                        <Input style={{color: '#b6b7b6', height: 30, fontSize: 14}}
                               onChangeText={(oldPassword) => this.setState({oldPassword})}
                               value={this.state.mobilePhone}
                               secureTextEntry={true}
                        />
                    </Item>
                </Content>
                <Button
                    rounded
                    block
                    light
                    style={{
                        position: 'absolute',
                        marginHorizontal:10,
                        bottom: 20,
                        right: 0,
                        left: 0,
                        height: 50,
                        backgroundColor: 'rgb(253,212,9)'
                    }}
                    onPress={ () => {
                        Actions.pop()
                    }}
                >
                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight:'500'
                    }}>DEĞİŞTİR</Text>
                </Button>
            </Container>
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


export default connect(mapStateToProps, bindAction)(changePassword);
