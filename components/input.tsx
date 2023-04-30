import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TextInput, StyleSheet, Text, View } from 'react-native';
import PropTyeps from 'prop-types';
// new element


// const TextBox = () => {
//   const [text, onChangeText] = React.useState('Useless Text');

//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//     </SafeAreaView>
//   );
// };
// export default class TextBox extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   // const [text: String, onChangeText: String] = React.useState("Useless Text");

//   render() {
//     return (
//       <SafeAreaView>
//         <TextInput
//           style={styles.input}
//           // onChangeText={onChangeText}
//           // value={text}
//         />
//       </SafeAreaView>
//     );
//   }
// };

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// export default TextBox;
