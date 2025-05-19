import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const produtosInicial = [
  { id: '1', nome: 'Produto A', quantidade: 10, dataFabricacao: '2025-01-01', prazoValidade: '2025-12-31', lote: 'ABC123', codigoBarras: '123456789', estadoOrigem: 'SP' },
  { id: '2', nome: 'Produto B', quantidade: 5, dataFabricacao: '2025-02-15', prazoValidade: '2025-06-30', lote: 'DEF456', codigoBarras: '987654321', estadoOrigem: 'RJ' },
];

export default function ProductListScreen() {
  const [products, setProducts] = useState(produtosInicial);

  const handleAddProduct = (newProduct) => {
    newProduct.id = Date.now().toString(); 
    setProducts([...products, newProduct]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedList = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedList);
  };

  const handleDeleteProduct = (idToDelete) => {
    const newList = products.filter((product) => product.id !== idToDelete);
    setProducts(newList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.nome} - Quantidade: {item.quantidade}</Text>
            <Link href={{ pathname: `/products/edit/${item.id}`, params: { initialProduct: item, onUpdate: handleUpdateProduct, onDelete: handleDeleteProduct } }}>
              <Text style={styles.editButton}>Editar</Text>
            </Link>
          </View>
        )}
      />
      <Link href={{ pathname: "/products/add", params: { onSave: handleAddProduct } }}>
        <Button title="Adicionar Produto" />
      </Link>
    </View>
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
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  editButton: {
    color: 'blue',
  },
});