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
import AppIntro from 'react-native-app-intro';
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
        const pageArray = [{
            title: 'Page 1',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            backgroundColor: '#fa931d',
            fontColor: '#fff',
            level: 10,
        }, {
            title: 'Page 2',
            description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
            backgroundColor: '#a4b602',
            fontColor: '#fff',
            level: 10,
        }];
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
                        }}>NASIL KULLANILIR</Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>
                    </View>
                </View>
                <Content style={{backgroundColor: '#f6f6f6'}}>
                    <AppIntro
                        onNextBtnClick={this.nextBtnHandle}
                        onDoneBtnClick={this.doneBtnHandle}
                        onSkipBtnClick={this.onSkipBtnHandle}
                        onSlideChange={this.onSlideChangeHandle}
                        pageArray={pageArray}
                    />
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


export default connect(mapStateToProps, bindAction)(Feedback);
