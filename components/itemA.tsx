import React, {Component} from 'react';
import {StyleSheet,TextInput, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


// interface Props {
//     title: string;
//     brand: string;
//     date: string;
//     variant: string;
//     location: string;
//     note: string;
//     rating: number;

// }
export default class Item extends Component<Props> {
    size: number = 0;

    constructor(props: any) {super(props);}

    onPress = () => {

    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress} >
                <SafeAreaView style={styles.wrapper}>
                    <Text>title: {this.props.title}</Text>
                    <Text>brand: {this.props.brand}</Text>
                    <Text>date: {this.props.date}</Text>
                    <Text>variant: {this.props.variant}</Text>
                    <Text>location: {this.props.location}</Text>
                    <Text>note: {this.props.note}</Text>
                    <Text>rating: {this.props.rating}</Text>
                </SafeAreaView>
            </TouchableOpacity>
        );
    };


}


const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
