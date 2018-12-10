import React, {Component} from "react";
import {Image, Dimensions, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {
    Container,
    Content,
    Item,
    Input,
    Button,
    Icon,
    Left,
    Body,
    Right,
    View,
    Text
} from "native-base";
import {setUser} from "../../actions/user";
import styles from "./styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const background = require("../../../images/shadow.png");
const {height, width} = Dimensions.get('window');

class Header extends React.Component {

    static defaultProps = {
        hasRightIcon: true,
        hasBackIcon: false,
        noIcon: false
    };
    static propTypes = {
        setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",

        };
    }

    renderLeft() {
        if (this.props.hasBackIcon) {
            return (
                <TouchableOpacity onPress={() => {
                    this.props.hasBackFunc ? this.props.backFunc() : this.props.navigation.goBack()
                }} activeOpacity={0.8} style={{paddingLeft: 10}}>
                    <FontAwesome
                        name='chevron-left'
                        style={{color: '#fff'}}
                        size={20}
                    />
                </TouchableOpacity>

            );
        }
    }

    renderBody() {
        if (this.props.headerText) {
            return (
                <Body>
                <Text style={styles.headerText}>{this.props.headerText}</Text>
                </Body>
            )
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    {this.renderLeft()}
                    {this.renderBody()}

                </View>
            </View>
        )

    }
}
export default Header;
