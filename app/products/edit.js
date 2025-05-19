import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const estadosBrasil = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

export default function EditProductScreen() {
  const { initialProduct, onUpdate, onDelete } = useLocalSearchParams();
  const navigation = useNavigation();
  const [nome, setNome] = useState(initialProduct?.nome || '');
  const [dataFabricacao, setDataFabricacao] = useState(initialProduct?.dataFabricacao || '');
  const [prazoValidade, setPrazoValidade] = useState(initialProduct?.prazoValidade || '');
  const [quantidade, setQuantidade] = useState(initialProduct?.quantidade?.toString() || '');
  const [lote, setLote] = useState(initialProduct?.lote || '');
  const [codigoBarras, setCodigoBarras] = useState(initialProduct?.codigoBarras || '');
  const [estadoOrigem, setEstadoOrigem] = useState(initialProduct?.estadoOrigem || '');

  const handleUpdate = () => {
    const updatedProduct = {
      id: initialProduct.id,
      nome,
      dataFabricacao,
      prazoValidade,
      quantidade: parseInt(quantidade),
      lote,
      codigoBarras,
      estadoOrigem,
    };
    onUpdate(updatedProduct);
    navigation.goBack();
  };

  const handleDelete = () => {
    onDelete(initialProduct.id);
    navigation.goBack();
  };

  if (!initialProduct) {
    return <Text>Carregando detalhes do produto...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Produto</Text>

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

      <Button title="Atualizar Produto" onPress={handleUpdate} />
      <View style={styles.separator} />
      <Button title="Excluir Produto" onPress={handleDelete} color="red" />
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
  separator: {
    marginVertical: 10,
  },
});