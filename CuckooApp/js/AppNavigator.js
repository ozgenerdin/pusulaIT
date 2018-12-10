import React, {Component} from 'react';
import {StatusBar, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Drawer} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';

import {closeDrawer} from './actions/drawer';

import Login from './components/login/';
import SignUp from './components/login/signUp';
import ProfileInfo from './components/login/profileInfo';
import TermsOfUsage from './components/login/termsOfUsage';
import ForgetPassword from './components/login/forgetPassword';
import Home from './components/home/';
import Offer from './components/home/offer';
import BlankPage from './components/blankPage';
import SideBar from './components/sideBar';
import Settings from './components/settings/index';
import ChangePassword from './components/settings/changePassword';
import Feedback from './components/settings/feedback';
import About from './components/settings/about';
import MyBills from './components/settings/mybills';
import Contracts from './components/settings/contracts';
import GiveAnswer from './components/settings/giveAnswer';
import GiveAnswer_2 from './components/settings/giveAnswer_2';
import GiveAnswer_3 from './components/settings/giveAnswer_3';
import GiveAnswer_4 from './components/settings/giveAnswer_4';
import GiveAnswer_5 from './components/settings/giveAnswer_5';
import HowToUse from './components/settings/howToUse';
import Payment from './components/settings/payment';
import SavedCards from './components/settings/savedCards';
import CreateCarrying from './components/carrying/create';
import {statusBarColor} from './themes/base-theme';

const SideMenu = require('react-native-side-menu');


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

    static propTypes = {
        drawerState: React.PropTypes.string,
        closeDrawer: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            edgeHitWidth: 120
        };

    }


    componentDidUpdate() {
        if (this.props.drawerState === 'opened' && !this.state.isOpen) {
            this.setState({isOpen: true});

        }

        if (this.props.drawerState === 'closed' && this.state.isOpen) {
            this.setState({isOpen: false});
        }
    }


    openDrawer() {
        this.setState({isOpen: true});
        DismissKeyboard();
    }

    closeDrawer() {
        if (this.props.drawerState === 'opened') {
            this.props.closeDrawer();
        }
    }

    onChange(isOpen) {
        if (this.props.drawerState === 'opened' && !isOpen) {
            this.props.closeDrawer();
        }
    }

    _renderScene(props) {
        this.props.closeDrawer();
        switch (props.scene.route.key) {
            case 'login':
                return <Login />;
            case 'home':
                return <Home />;
            case 'blankPage':
                return <BlankPage />;
            case 'signUp':
                return <SignUp />;
            case 'termsOfUsage':
                return <TermsOfUsage />;
            case 'forgetPassword':
                return <ForgetPassword />;
            case 'profileInfo':
                return <ProfileInfo />;
            case 'createCarrying':
                return <CreateCarrying />;
            case 'offer':
                return <Offer />;
            case 'settings':
                return <Settings />;
            case 'changePassword':
                return <ChangePassword />;
            case 'feedback':
                return <Feedback />;
            case 'about':
                return <About />;
            case 'myBills':
                return <MyBills />;
            case 'contracts':
                return <Contracts />;
            case 'giveAnswer':
                return <GiveAnswer />;
            case 'giveAnswer_2':
                return <GiveAnswer_2 />;
            case 'giveAnswer_3':
                return <GiveAnswer_3 />;
            case 'giveAnswer_4':
                return <GiveAnswer_4 />;
            case 'giveAnswer_5':
                return <GiveAnswer_5 />;
            case 'howToUse':
                return <HowToUse />;
            case 'payment':
                return <Payment />
            case 'savedCards':
                return <SavedCards />
            default :
                return <Login />;
        }
    }

    render() {

        const menu = <SideBar/>;
        return (

            <SideMenu menu={menu}
                      ref={(ref) => {
                          this._drawer = ref;
                      }}
                      isOpen={this.state.isOpen}
                      onChange={(isOpen) => this.onChange(isOpen)}
                      edgeHitWidth={150}
                      openMenuOffset={Dimensions.get('window').width * 0.8}
            >

                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle="default"
                />
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="login" component={Login} hideNavBar initial/>
                        <Scene key="home" component={Home}/>
                        <Scene key="blankPage" component={BlankPage}/>
                        <Scene key="signUp" component={SignUp}/>
                        <Scene key="termsOfUsage" component={TermsOfUsage}/>
                        <Scene key="forgetPassword" component={ForgetPassword}/>
                        <Scene key="profileInfo" component={ProfileInfo}/>
                        <Scene key="createCarrying" component={CreateCarrying}/>
                        <Scene key="offer" component={Offer}/>
                        <Scene key="settings" component={Settings}/>
                        <Scene key="changePassword" component={ChangePassword}/>
                        <Scene key="feedback" component={Feedback}/>
                        <Scene key="about" component={About}/>
                        <Scene key="myBills" component={MyBills}/>
                        <Scene key="contracts" component={Contracts}/>
                        <Scene key="giveAnswer" component={GiveAnswer}/>
                        <Scene key="giveAnswer_2" component={GiveAnswer_2}/>
                        <Scene key="giveAnswer_3" component={GiveAnswer_3}/>
                        <Scene key="giveAnswer_4" component={GiveAnswer_4}/>
                        <Scene key="giveAnswer_5" component={GiveAnswer_5}/>
                        <Scene key="howToUse" component={HowToUse}/>
                        <Scene key="payment" component={Payment}/>
                        <Scene key="savedCards" component={SavedCards}/>
                    </Scene>
                </RouterWithRedux>
            </SideMenu>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
    };
}

const mapStateToProps = state => ({
    drawerState: state.drawer.drawerState,
    navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
