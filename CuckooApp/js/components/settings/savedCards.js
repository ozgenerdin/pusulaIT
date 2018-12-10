import React, {Component} from 'react';
import {TouchableOpacity, Image, AsyncStorage, Dimensions, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Actions, ActionConst} from 'react-native-router-flux';
import appStyles from '../../themes/style';
import IconF from 'react-native-vector-icons/FontAwesome';
const {height, width} = Dimensions.get('window');
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
    List,
    ListItem,
    Tab,
    Tabs,
    Card,
    CardItem,
} from 'native-base';

class savedCards extends Component {

    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <Container style={{
                //TODO burayi spread operator ile appstyles dan es6 compliant sekilde alacagiz
                backgroundColor: 'rgb(4,81,156)',
            }}>

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
                        }}>
                            KAYITLI KREDİ KARTLARIM
                        </Text>
                    </View>
                    <View style={{width: 50, alignItems: 'center'}}>

                    </View>
                </View>
                <Content style={{
                    backgroundColor: '#f6f6f6',
                }}>
                    <ScrollView>
                        <ListItem style={{
                            height:90,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: '#ededed',
                            backgroundColor: 'white',
                            marginHorizontal:5,
                            marginTop:10,
                            paddingVertical: 18,
                            alignItems: 'center'
                        }}>

                            <Left style={{flexDirection: 'row', alignItems: 'center'}}>

                                <IconF size={30} style={{
                                    color:'#fdd309',
                                    paddingLeft:15,

                                }} name='credit-card-alt'/>
                                <View style={{
                                    flexDirection:'column',
                                    justifyContent:'flex-start',
                                    paddingLeft: 10,
                                }} >
                                <Text style={{color: '#04519c', fontWeight: '400',}}>
                                    Bonus Kartım
                                </Text>
                                <Text
                                    style={{color: '#04519c', fontWeight: '400',}}
                                >
                                    5529 **** **** 4920
                                </Text>
                                </View>
                            </Left>

                            <Right style={{flexDirection:'column',justifyContent:'center'}}>
                                <IconF style={{
                                    color: '#dedede',
                                    fontSize: 23,
                                    paddingRight: 10,
                                }} name="trash"/>
                                <Text style={{fontSize:12, color:'#dedede'}}>Kartı Sil</Text>
                            </Right>
                        </ListItem>
                        <ListItem style={{
                            height:90,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: '#ededed',
                            backgroundColor: 'white',
                            marginHorizontal:5,
                            marginTop:10,
                            paddingVertical: 18,
                            alignItems: 'center'
                        }}>

                            <Left style={{flexDirection: 'row', alignItems: 'center'}}>

                                <IconF size={30} style={{
                                    color:'#fdd309',
                                    paddingLeft:15,

                                }} name='credit-card-alt'/>
                                <View style={{
                                    flexDirection:'column',
                                    justifyContent:'flex-start',
                                    paddingLeft: 10,
                                }} >
                                    <Text style={{color: '#04519c', fontWeight: '400',}}>
                                        Paraf
                                    </Text>
                                    <Text
                                        style={{color: '#04519c', fontWeight: '400',}}
                                    >
                                        4631 **** **** 8185
                                    </Text>
                                </View>
                            </Left>

                            <Right style={{flexDirection:'column',justifyContent:'center'}}>
                                <IconF style={{
                                    color: '#dedede',
                                    fontSize: 23,
                                    paddingRight: 10,
                                }} name="trash"/>
                                <Text style={{fontSize:12, color:'#dedede'}}>Kartı Sil</Text>
                            </Right>
                        </ListItem>
                    </ScrollView>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red',
        backgroundColor: 'blue',
    },
});

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

export default connect(mapStateToProps, bindAction)(savedCards);