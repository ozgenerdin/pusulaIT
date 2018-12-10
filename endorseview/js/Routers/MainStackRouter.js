import React, {Component} from "react";
import Login from "../components/login/";
import Home from "../components/home/";
import BlankPage from "../components/blankPage";
import HomeDrawerRouter from "./HomeDrawerRouter";
import SignUp1 from "../components/signUp1";
import SignUp2 from "../components/signUp2";
import SignUp3 from "../components/signUp3";
import SignUp4 from "../components/signUp4";
import SignUp5 from "../components/signUp5";
import GetStarted from "../components/get_started/";
import GetEndorsedDetail from "../components/getEndorsedDetail";
import Add1 from "../components/endorsementAdd/add1";
import Add2 from "../components/endorsementAdd/add2";
import KnowledgeBase from "../components/knowledgeBase/index";
import ContactUs from "../components/contact/index";
import CustomerSupport from "../components/customerSupport/index";
import Profile from "../components/profile/index";
import PersonalInfo from "../components/profile/personalInfo";
import EmailAddresses from "../components/profile/emailAddresses";
import {StackNavigator} from "react-navigation";
import {Header, Left, Button, Icon, Body, Title, Right} from "native-base";

HomeDrawerRouter.navigationOptions = ({navigation}) => ({
    header: null
});
export default (StackNav = StackNavigator({
    Login: {screen: Login},
    Home: {screen: Home},
    BlankPage: {screen: BlankPage},
    SignUp1: {screen: SignUp1},
    SignUp2: {screen: SignUp2},
    SignUp3: {screen: SignUp3},
    SignUp4: {screen: SignUp4},
    SignUp5: {screen: SignUp5},
    GetStarted: {screen: GetStarted},
    GetEndorsedDetail: {screen: GetEndorsedDetail},
    Add1: {screen: Add1},
    Add2: {screen: Add2},
    KnowledgeBase: {screen: KnowledgeBase},
    CustomerSupport: {screen: CustomerSupport},
    Profile: {screen: Profile},
    PersonalInfo: {screen: PersonalInfo},
    EmailAddresses: {screen: EmailAddresses},
    ContactUs: {screen: ContactUs},
}));
