import screen1 from "./screens/screen1"
import screen2 from "./screens/screen2"
import {
  createAppContainer
} from "react-navigation";
import {
  createMaterialTopTabNavigator
} from "react-navigation-tabs";
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';








// async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
//   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//   }
//   await FileSystem.downloadAsync(
//     Asset.fromModule(require(pathToDatabaseFile)).uri,
//     FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
//   );
//   return SQLite.openDatabase('myDatabaseName.db');
// }



// db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
//   console.log('Foreign keys turned on')
// );






const SwipeTabs = createMaterialTopTabNavigator(
  {
    screen1: { screen: screen1},
    screen2: { screen: screen2}
  },
  {
    initialRouteName: "screen1",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: false,
      style: { height: 0 }
    }
  }
);

export default createAppContainer(SwipeTabs);
