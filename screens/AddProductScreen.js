import { Picker } from '@react-native-picker/picker';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const estadosBrasil = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export default function AddProductScreen() {
  const { onSave } = useLocalSearchParams();
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [prazoValidade, setPrazoValidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lote, setLote] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');
  const [estadoOrigem, setEstadoOrigem] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCodigoBarras(data);
    console.log(`Código de barras escaneado! Tipo: ${type}, Dados: ${data}`);
  };

  const handleSaveProduct = () => {
    const newProduct = {
      nome,
      dataFabricacao,
      prazoValidade,
      quantidade: parseInt(quantidade),
      lote,
      codigoBarras,
      estadoOrigem,
    };
    onSave(newProduct);
    navigation.goBack();
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Adicionar Novo Produto</Text>

      <Text style={styles.label}>Nome do Produto:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Data de Fabricação:</Text>
      <TextInput style={styles.input} value={dataFabricacao} onChangeText={setDataFabricacao} placeholder="AAAA-MM-DD" />

      <Text style={styles.label}>Prazo de Validade:</Text>
      <TextInput style={styles.input} value={prazoValidade} onChangeText={setPrazoValidade} placeholder="AAAA-MM-DD" />

      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={(text) => setQuantidade(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Lote (Letras e Números):</Text>
      <TextInput style={styles.input} value={lote} onChangeText={setLote} />

      <Text style={styles.label}>Código de Barras:</Text>
      <TextInput style={styles.input} value={codigoBarras} onChangeText={setCodigoBarras} />
      <View style={styles.barcodeScannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Escanear Novamente?'} onPress={() => setScanned(false)} />}
      </View>

      <Text style={styles.label}>Estado de Origem:</Text>
      <Picker
        selectedValue={estadoOrigem}
        style={styles.picker}
        onValueChange={(itemValue) => setEstadoOrigem(itemValue)}
      >
        <Picker.Item label="Selecione o Estado" value="" />
        {estadosBrasil.map((estado) => (
          <Picker.Item key={estado} label={estado} value={estado} />
        ))}
      </Picker>

      <Button title="Salvar Produto" onPress={handleSaveProduct} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  barcodeScannerContainer: {
    height: 200,
    width: '100%',
    marginBottom: 16,
    overflow: 'hidden',
    borderRadius: 4,
  },
});