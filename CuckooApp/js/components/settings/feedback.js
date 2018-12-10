import React, {Component} from 'react';
import {TouchableOpacity, Image, AsyncStorage, Dimensions, View} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import StarRating from 'react-native-star-rating';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Card,
    Item,
    Input,
    Picker
} from 'native-base';
const {height, width} = Dimensions.get('window');
import FlyInfo from '../common/flyInfo';

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
class Feedback extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        index: React.PropTypes.number,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            opinion: '',
            feature: '',
            starCount: 3
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
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{
                            color: 'rgb(253,212,9)',
                            fontSize: 18
                        }}>GERİ BİLDİRİM YAP</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>
                    </View>
                </View>
                <Content style={{backgroundColor: '#f6f6f6'}}>
                    <View style={{backgroundColor: 'white', padding: 15, marginBottom: 15, flexDirection: 'row'}}>
                        <Image source={require('./../../../images/ic_fikirlerinizionemsiyoruz.png')}
                               style={{fontSize:18,...appStyles.yellowColor}}/>
                        <View style={{flexDirection: 'column', marginLeft: 10}}>
                        <Text style={styles.blueText}>
                            Fikirlerinizi Onemsiyoruz
                        </Text>
                        <Text style={{color: 'gray'}}>
                            Gorusleriniz bizim icin cok onemli
                        </Text>
                            </View>
                    </View>
                    <View style={{backgroundColor: 'white', padding: 15, marginBottom: 15}}>
                        <Text style={styles.blueText}>
                            Cuckoo Travel Hakkinda ne dusunuyorsunuz?
                        </Text>
                        <View style={{marginBottom: 10}}>
                            <Item underline>
                                <Input style={{color: 'black', height: 30, fontSize: 14}}
                                       onChangeText={(opinion) => this.setState({opinion})}
                                       value={this.state.opinion}
                                       placeholder='yazınız...'
                                />
                            </Item>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', padding: 15, marginBottom: 15}}>
                        <Text style={styles.blueText}>
                            Cuckoo Travel' da gormek istediginiz ozellik var midir?
                        </Text>
                        <View style={{marginBottom: 10}}>
                            <Item underline>
                                <Input style={{color: 'black', height: 30, fontSize: 14}}
                                       onChangeText={(feature) => this.setState({feature})}
                                       value={this.state.feature}
                                       placeholder='yazınız...'
                                />
                            </Item>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', padding: 15, marginBottom: 15}}>
                        <Text style={styles.blueText}>
                            Cuckoo Travel' i degerlendirin
                        </Text>
                        <View style={{marginTop: 10}}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={5}
                                starSize={15}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                starColor={styles.starStyle.color}
                                emptyStarColor={styles.starStyle.backgroundColor}
                            />
                        </View>
                    </View>
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
                    }}>GÖNDER</Text>
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


export default connect(mapStateToProps, bindAction)(Feedback);
