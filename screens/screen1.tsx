import Item from '../components/itemA'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet,TextInput, Text, View, SafeAreaView } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require(pathToDatabaseFile)).uri,
    FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
  );
  return SQLite.openDatabase('myDatabaseName.db');
}

export default function homeScreen() {
  // const [searchBar, onChangeSearchBar] = React.useState('Useless Text');
  return (
    <SafeAreaView>
      <Text>{"screen1"}</Text>
      <TextInput
      style={styles.inputA}
          // value={number}
    placeholder="Search"
     />
    <Item
      title="a"
      other="b"
    />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputA : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
