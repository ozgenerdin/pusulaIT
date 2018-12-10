const React = require('react-native');

const {StyleSheet, Dimensions} = React;

const {height, width} = Dimensions.get('window');
const deviceHeight = Dimensions.get('window').height;

export default {
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#373c40',
    },
    header: {
        width: width,
        height: 65,
        backgroundColor: '#373c40',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        zIndex: 25,
        overflow: 'visible',

    },
    headerText: {
        color: 'white',
        fontWeight:'bold',
        justifyContent: 'flex-start',
    }


};
