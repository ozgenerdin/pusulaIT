
import React, { Component } from 'react';
import {
    Platform,
    Dimensions
} from 'react-native';

const { StyleSheet } = React;

const {height, width} = Dimensions.get('window');

export default {
    container: {
        width:width,
    },
    starStyle: {
        color: '#fcc231',
        backgroundColor: '#e4e3de',
    },
    iconBag: {
        color:'#fdd409',
    },
    profilePic: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 0.6,
        borderColor: 'white',
    },
    profilePicWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70,
        borderWidth: 2,
        borderColor: '#fdd409',
        borderRadius: 35,
    },
    blueText: {
        top:-5,
        color: '#04519c',
        fontWeight: '500',
        fontSize: 14
    },
    grayText: {
        fontWeight:'300',
        fontSize:12,
        color: '#b6b7b6',
    },
    whiteText: {
        fontWeight:'300',
        fontSize:12,
        color: 'white',
    },
    greenText: {
        fontWeight:'bold',
        fontSize:13,
        color: '#00ae00',
    },
    itemArrow: {
        color: 'gray',
        flex: 1,
        fontSize:22,
    },
};
