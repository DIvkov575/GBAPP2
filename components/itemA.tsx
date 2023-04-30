import React, {Component} from 'react';
import {StyleSheet,TextInput, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';


interface Props {
    title: string;
    other: string;

}
export default class Item extends Component<Props> {
    size: number = 0;
    // id: number;

    constructor(props: any) {
        super(props);
        // this.title = props.title;
        // this.other = props.other;
    }
    onPress = () => {
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onPress} >
                <SafeAreaView style={styles.wrapper}>
                    <Text>title: {this.props.title}</Text>
                    <Text>other: {this.props.other}</Text>
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
