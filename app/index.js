import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const desenvolvedores = ["Fernando Fontes RM555317, Guilherme Jardim RM556814"];
//foi oque consegui prof ;(
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedores:</Text>
      {desenvolvedores.map((dev, index) => (
        <Text key={index} style={styles.listItem}>{dev}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});