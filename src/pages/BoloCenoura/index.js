import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BoloDeCenouraScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpansion}>
        <Image
          source={require('./your_image_path.jpg')} // Replace with your image path
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>BOLO DE CENOURA</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Icon name="star" size={16} color="#FFD700" />
          <Icon name="star" size={16} color="#FFD700" />
          <Icon name="star" size={16} color="#FFD700" />
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>4.6</Text>
        </View>
        <Text style={styles.reviews}>47 / 5 14690 avaliações</Text>
        <TouchableOpacity onPress={toggleExpansion}>
          <Text style={styles.expandButton}>
            {isExpanded ? 'Ocultar Receita' : 'Ver Receita'}
          </Text>
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.recipeContainer}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            <Text style={styles.sectionText}>
              <Text style={styles.subSectionTitle}>Massa</Text>
              <Text>1/2 xícara (chá) de óleo.</Text>
              <Text>3 cenouras médias raladas.</Text>
              <Text>4 ovos.</Text>
              <Text>2 xícaras (chá) de açúcar.</Text>
              <Text>2 e 1/2 xícaras (chá) de farinha de trigo.</Text>
              <Text>1 colher (sopa) de fermento em pó.</Text>
              <Text style={styles.subSectionTitle}>Cobertura</Text>
              <Text>1 colher (sopa) de manteiga.</Text>
              <Text>3 colheres (sopa) de chocolate em pó.</Text>
              <Text>1 xícara (chá) de açúcar.</Text>
              <Text>1 xícara (chá) de leite.</Text>
            </Text>
            <Text style={styles.sectionTitle}>Modo de preparo</Text>
            <Text style={styles.sectionText}>
              <Text style={styles.subSectionTitle}>Massa</Text>
              <Text>-Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.</Text>
              <Text>-Acrescente o açúcar e bata novamente por 5 minutos.</Text>
              <Text>-Em uma tigela ou na batedeira, adicione a farinha de trigo e depois mecha novamente.</Text>
              <Text>-Acrescente o fermento e misture lentamente com uma colher.</Text>
              <Text>-Asse em um forno pré-aquecido a 180° C por aproximadamente 40 minutos.</Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 16,
    color: '#fff',
  },
  reviews: {
    marginTop: 4,
    fontSize: 14,
    color: '#fff',
  },
  expandButton: {
    marginTop: 16,
    fontSize: 16,
    color: '#fff',
  },
  recipeContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
});

export default BoloDeCenouraScreen;
