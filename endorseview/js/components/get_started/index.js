import React, {Component} from "react";
import {View, TouchableOpacity, Dimensions} from "react-native";
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

class GetStarted extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kutu: 0,
        };
    }

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

    kutu() {
        this.setState({
            kutu: this.state.kutu+1,
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log(DrawNav, "786785786");
        return (
            <Container>
                <View style={styles.container}>
                    <View style={{flexDirection: 'column', flex: 1, backgroundColor: 'gray'}}>
                        <View style={{height: 150}}></View>
                        <Text style={{height: 40, color: 'blue'}}>sdfsdf</Text>
                        <Text
                            style={{height: 40, color: 'white', backgroundColor: 'black'}}>{this.state.kutu}</Text>
                        <Button block onPress={() => this.kutu()}></Button>
                    </View>
                </View>
            </Container>
        );
    }
}

function

bindAction(dispatch) {
    return {
        setIndex: index => dispatch(setIndex(index)),
        openDrawer: () => dispatch(openDrawer())
    };
}

const
    mapStateToProps = state => ({
        name: state.user.name,
        list: state.list.list
    });

const
    HomeSwagger = connect(mapStateToProps, bindAction)(GetStarted);
const
    DrawNav = DrawerNavigator(
        {
            Home: {screen: HomeSwagger},
            BlankPage2: {screen: BlankPage2}
        },
        {
            contentComponent: props => <DrawBar {...props} />
        }
    );
const
    DrawerNav = null;
DrawNav
    .navigationOptions = ({navigation}) => {
    DrawerNav = navigation;
    return {
        header: null
    };
};
export default DrawNav;
