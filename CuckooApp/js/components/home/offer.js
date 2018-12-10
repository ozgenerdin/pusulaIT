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
    Left,
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
class Offer extends Component {

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
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{
                            color: 'rgb(253,212,9)',
                            fontSize: 18
                        }}>TEKLİF VER / ACCEPT</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>

                    </View>

                </View>
                <FlyInfo data={this.state.flyData}/>

                <Content padder style={{backgroundColor: 'white'}}>
                    <Card>
                        <CardItem style={{
                            justifyContent: 'flex-start',
                            width: 300,
                        }}>
                            <View style={{
                                paddingRight: 30,
                                flexDirection: "column",
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                }}>

                                    <View style={{
                                        flexDirection: 'column',
                                    }}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={styles.blueText}>50 TL</Text>
                                            <Text style={styles.blueText}> 2 valiz</Text>
                                        </View>
                                        <StarRating
                                            disabled={false}
                                            maxStars={5}
                                            rating={this.state.starCount}
                                            starSize={15}
                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                            starColor={styles.starStyle.color}
                                            emptyStarColor={styles.starStyle.backgroundColor}
                                        />
                                    </View>

                                </View>

                            </View>

                            <Text>
                            </Text>
                        </CardItem>
                    </Card>
                    <View style={{marginTop: 20, marginLeft: 20}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.blueText}>
                                FİYAT TEKLİFİN
                            </Text>
                            <Text style={{fontSize: 12, color: '#b6b7b6'}}>
                                 (valiz fiyatina 5£ cuckoo ekleyecektir)
                            </Text>
                        </View>
                        <View style={{marginBottom: 10}}
                        >
                            <View style={styles.PickerWrapper}>
                                <Picker
                                    style={{

                                        color: 'black'
                                    }}
                                    textStyle={{
                                        color: 'black',
                                        fontSize: 13,
                                        top: 10,
                                        left: 0,
                                        right: 15,
                                    }}
                                    iosHeader="Select one"
                                    onValueChange={(price) => this.setState({price})}
                                    disabled={true}
                                    enabled={true}
                                    selectedValue={this.state.price}>
                                    <Picker.Item label={'Seciniz'} value={null}/>
                                    <Picker.Item label={'40 TL'} value='1'/>
                                    <Picker.Item label={'50 TL'} value='2'/>
                                </Picker>
                            </View>
                        </View>
                        <View style={{flex: 1, paddingTop: 10,
                        }}>
                            <Button
                                rounded
                                block
                                light
                                style={{height: 50, backgroundColor: 'rgb(253,212,9)', marginTop: height/4}}
                                onPress={ () => {
                                    Actions.pop()
                                }}
                            >
                                <Text style={{
                                    color: '#000',
                                    fontSize: 16
                                }}>TEKLİF GÖNDER</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
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


export default connect(mapStateToProps, bindAction)(Offer);
