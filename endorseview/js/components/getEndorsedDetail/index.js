import React, {Component} from "react";
import {View, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import {connect} from "react-redux";
import BlankPage2 from "../blankPage2";
import Header from "../header";
import DrawBar from "../DrawBar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const {height, width} = Dimensions.get('window');

import {DrawerNavigator, NavigationActions} from "react-navigation";
import {
    Container,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    H3,
    Body,
    Right
} from "native-base";
import {Grid, Row} from "react-native-easy-grid";

import {setIndex} from "../../actions/list";
import {openDrawer} from "../../actions/drawer";
import styles from "./styles";

class GetEndorsedDetail extends Component {
    static navigationOptions = {
        header: null
    };
    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func
    };

    newPage(index) {
        this.props.setIndex(index);
        Actions.blankPage();
    }

    renderAskingCards() {
        return (<View style={{
                flexDirection: 'row',
                alignSelf: 'center',
            }}
            >
                <View style={{
                    position: 'absolute',
                    left: -45,
                    zIndex: 1,
                    height: 90,
                    width: 90,
                    borderRadius: 45,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#f7f7f7',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#00f083',
                        fontWeight: 'bold',
                        backgroundColor: 'transparent'
                    }}>UNLOCKD</Text>
                </View>

                <View style={{
                    height: 160,
                    width: 270,
                    borderRadius: 10,
                    backgroundColor: '#f7f7f7',
                }}>
                    <View style={{
                        flex: 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        paddingLeft: 60,
                    }}>
                        <Text>{`Senior Software Engineer`}</Text>
                        <Text>{`Unlockd`}</Text>
                        <Text style={{
                            color: '#a4a5a6',
                        }}>{`Melbourne, AUS`}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'center',
                        borderTopWidth: 1,
                        borderColor: 'white',
                    }}>
                        <Button transparent full>
                            <Text style={{
                                color: '#e30000',
                                fontWeight: '500',
                            }}>Revoke</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }

    renderAskedCards() {
        return (<View style={{
            backgroundColor: '#f7f7f7',
            flex: 1,
            marginTop: 20,
        }}>
            <Text style={{
                paddingVertical: 15,
                fontWeight: 'bold',
                fontSize: 22,
                textAlign: 'center',
                backgroundColor: 'transparent',
                color: '#373d40',
            }}>People asking for endorsement:</Text>
            {this.renderCard("FY", "Ferhat Yaban", "ferhatyaban@gmail.com")}
            {this.renderCard("İY", "İbrahim Yıldız", "ferhatyaban@gmail.com")}
        </View>)
    }

    renderCard(circleText, Title, Content) {
        return (
            <View style={{marginVertical: 25}}>
                <View style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignSelf: 'center',
                }}
                >
                    <View style={{
                        position: 'absolute',
                        left: -45,
                        zIndex: 1,
                        height: 90,
                        width: 90,
                        borderRadius: 45,
                        backgroundColor: '#008f44',
                        borderWidth: 1,
                        borderColor: '#f7f7f7',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 32,
                            fontWeight: '400',
                            backgroundColor: 'transparent'
                        }}>{circleText}</Text>
                    </View>

                    <View style={{
                        height: 160,
                        width: 270,
                        borderRadius: 10,
                        backgroundColor: 'white',
                    }}>
                        <View style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            paddingLeft: 60,
                        }}>
                            <Text>{Title}</Text>
                            <Text>{Content}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            flex: 1,
                            justifyContent: 'center',
                            borderTopWidth: 1,
                            borderColor: 'white',
                        }}>
                            <Button transparent full>
                                <Text style={{
                                    color: '#e30000',
                                    fontWeight: '500',
                                }}>Completed</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <ScrollView style={styles.container}>

                    <View style={{
                        backgroundColor: '#373c40',
                        width: width,
                        height: 45,
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',

                        zIndex: 25,
                        left: 0,
                        overflow: 'visible',
                        shadowColor: 'black',
                        shadowOpacity: .2,
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                    }}>
                        <View style={{width: 50, alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => {
                                // this.props.navigation.navigate.pop();
                                this.props.navigation.navigate('DrawerOpen')
                            }} activeOpacity={0.8} style={{color: '#fff'}}>
                                <Icon
                                    name='ios-menu'
                                    style={{color: '#fff'}}
                                    size={32}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18
                            }}>ENDORSEVIEW</Text>
                        </View>
                        <View style={{width: 50, alignItems: 'center'}}>

                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            height: 250,
                            backgroundColor: '#373c40',
                        }}>
                            <View style={{
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <H3 style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 23,
                                }}>
                                    GREAT KNOWS GREAT
                                </H3>
                                <Text style={{
                                    color: 'white',
                                    marginHorizontal: 10,
                                    textAlign: 'center',
                                }}>
                                    A QUALITY ENDORSEMENT CAN BE THE
                                    DIFFERENCE BETWEEN GETTING HIRED AND
                                    GETTING OVERLOOKED. YOUR CURRENT ENDORSERS
                                    CAN BE VIEWED BELOW. IS ANYONE MISSING?
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>
                                <Button onPress={ ()=> navigate('Add1')}
                                    style={{
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    backgroundColor: '#c9d579',
                                }}
                                        onPress={() => {
                                            this.props.navigation.navigate('Add1')
                                        }}>
                                    <Text>GET ENDORSED</Text>
                                </Button>
                            </View>

                        </View>
                        <View style={{
                            flexDirection: 'column',
                            backgroundColor: 'white',
                        }}>
                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                paddingTop: 30,
                                paddingBottom: 10,

                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 22,
                                    textAlign: 'center',
                                    backgroundColor: 'transparent',
                                    color: '#373d40',
                                }}>People asking for endorsement:</Text>
                                <Text style={{
                                    color: '#aaabac',
                                    textAlign: 'center',
                                    paddingTop: 15,
                                }}
                                >You need more endorsements before you can review the results and share with the
                                    hirer</Text>
                            </View>
                        </View>
                        <View style={{
                            FlexDirection: 'row',
                            marginHorizontal: 10,
                            marginVertical: 25,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 21,
                                color: '#393f42',
                            }}>People you asked for endorsement</Text>
                        </View>
                    </View>
                    {this.renderAskingCards()}
                    {this.renderAskedCards()}
                    <View style={{backgroundColor:'#f7f7f7'}}>
                        <View style={{
                            flexDirection: 'row',
                            alignContent: 'flex-end',
                            marginVertical: 15,
                            left: 15,
                        }}>
                            <View
                                style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#bccb53',
                                    borderRadius: 40,
                                    zIndex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Text style={{
                                    backgroundColor: 'transparent',
                                    color: 'white',
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                }}>
                                    +
                                </Text>
                            </View>
                            <View style={{
                                position: 'relative',
                                right: 45,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 80,
                                width: 270,
                                borderRadius: 10,
                                backgroundColor: 'white',
                            }}>
                                <Text style={{color: '#bccb53', fontWeight: 'bold', left: 15}}>Get more
                                    endorsement</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        setIndex: index => dispatch(setIndex(index)),
        openDrawer: () => dispatch(openDrawer())
    };
}

const mapStateToProps = state => ({
    name: state.user.name,
    list: state.list.list
});

const HomeSwagger = connect(mapStateToProps, bindAction)(GetEndorsedDetail);
const DrawNav = DrawerNavigator(
    {
        Home: {screen: HomeSwagger},
        BlankPage2: {screen: BlankPage2}
    },
    {
        contentComponent: props => <DrawBar {...props} />
    }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({navigation}) => {
    DrawerNav = navigation;
    return {
        header: null
    };
};
export default DrawNav;
