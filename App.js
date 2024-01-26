import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CharacterStats from './components/character';

export default function App() {
  return (
    <View style={styles.container}>
      <CharacterStats/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//use state es un hook, react permite usar vaiables de estado 