import Item from '../components/itemA'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet,TextInput, Text, View, SafeAreaView } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';


interface Props {
    title: string;
    brand: string;
    date: string;
    variant: string;
    location: string;
    note: string;
    rating: number;
}

  const addItems = () => {
    const db = SQLite.openDatabase('itemList');
    db.transaction(tx => {
      tx.executeSql('INSERT INTO items (title, brand, date, variant, location, note, rating) values (?, ?, ?, ?, ?, ?, ?)', ['a', 'a', 'a', 'a', 'a', 'a', 5])
        // (txObj, resultSet) => this.setState({ data: this.state.data.concat(
        //   { id: 0, title: 'a', brand: 'a' }) }),
        // (txObj, error) => console.log('Error', error))
    })
    console.log("execution additems")
  }
  // addItems() {
  //   const db = SQLite.openDatabase('itemList');
  //   db.transaction(tx => {
  //     tx.executeSql('INSERT INTO items (title, brand) values (?, ?)', ['a', 'a'],
  //       (txObj, resultSet) => this.setState({ data: this.state.data.concat(
  //           { id: resultSet.insertId, title: 'a', brand: 'a' }) }),
  //       (txObj, error) => console.log('Error', error))
  //   })
  //   console.log("execution additems")
  // }

  const fetchItems = () => {
    const db = SQLite.openDatabase('itemList');
    let error: String = "";

    db.transaction(tx => {
      tx.executeSql('SELECT * FROM items', null,
        // ((txObj, { rows: { _array } }) => this.setState({ data: _array })),
        ((txObj, { rows: { _array } }) =>  {return _array} )),
        ((txObj:any, error:any) => console.log('(fetchItems) Error ', error))
      )})
  }
export default class homeScreen extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {data: null}

    const db = SQLite.openDatabase('itemList');
    db.transaction(tx => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT,
              title TEXT,
              brand TEXT,
              date TEXT,
              variant TEXT,
              location TEXT,
              note TEXT,
              rating INTEGER  )`
          )
        });

    this.addItems();
    let output = this.fetchItems();
    console.log(output);

    // console.log(this.state.data)

  }

  render() {
    return (
      <SafeAreaView>
        <Text>{"screen1"}</Text>
        <TextInput
        style={styles.inputA}
        placeholder="Search"
      />
      <Item
        title="a"
        brand="b"
        date="b"
        variant="b"
        location="b"
        note="b"
        rating={5}
      />

      </SafeAreaView>
    );
    }

  }

const styles = StyleSheet.create({
  inputA : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
