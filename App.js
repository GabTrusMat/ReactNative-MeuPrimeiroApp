import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Gabriel Trus</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5198E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#03FFFF'
  }
});
