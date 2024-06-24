import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import estilos from './style.js';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([
    { id: 1, name: 'Bolo de cenoura' },
    { id: 2, name: 'Bolinho de frango' },
    { id: 3, name: 'Sopa de mandioca' },
  ]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Aqui você pode fazer uma requisição para uma API ou filtrar os resultados
    // com base na query de busca
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10,}}
          placeholder="Digite sua pesquisa"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity>
          <Text style={{ fontSize: 24, paddingHorizontal: 10 }}>🔍</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={results}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default App;