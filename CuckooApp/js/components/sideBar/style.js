const React = require('react-native');

const {StyleSheet} = React;

export default {
    sidebar: {
        flex: 1,
        padding: 10,
        paddingRight: 0,
        paddingTop: 30,
        backgroundColor: '#04519c',
    },
    listItem: {
      borderBottomWidth: 0,
    },
    itemText: {
        color: 'white',
    },
    icon: {
        color: 'white',
        marginRight:10,
    },
    profileIcon: {
        color: 'white',
        marginLeft:20,
    },
    profilePic:{
        height:80,
        width:80,
        borderRadius:40,
        borderWidth:0.6,
        borderColor:'white',
    },
    profilePicWrapper:{
        justifyContent:'center',
        alignItems:'center',
        height:90,
        width:90,
        borderWidth:2,
        borderColor:'white',
        borderRadius:45,
    },
};
