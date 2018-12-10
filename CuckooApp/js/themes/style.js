
import React, { Component } from 'react';
import {
    Platform,
    Dimensions
} from 'react-native';

const { StyleSheet } = React;

const {height, width} = Dimensions.get('window');

export default {
    appBackgroundColor:{
        backgroundColor: 'rgb(4,81,156)',
    },
    yellowColor:{
        color: 'rgb(253,212,9)',
    }

};
