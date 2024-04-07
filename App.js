import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { mdiAbTesting  } from '@mdi/js';
import { Icon } from '@mdi/react';


const Stack = createNativeStackNavigator();

const exercises = [
  { id: 1, 
  name: 'Выгибание спины', 
  description: 'выполняй упражнение 1-2 раза в день и спина не болеть', 
  image: 'https://sotni.ru/wp-content/uploads/2023/08/urdkhva-mukkha-shvanasana-3.webp' },
  { id: 2, 
  name: 'Поза эмбриона', 
  description: 'выполняй упражнение 1-2 раза в день и спина не болеть', 
  image: 'https://sotni.ru/wp-content/uploads/2023/08/pavana-muktasana-1.webp' },
  { id: 3, 
  name: 'Обратная поза эмбриона', 
  description: 'выполняй упражнение 1-2 раза в день и спина не болеть', 
  image: 'https://sportishka.com/uploads/posts/2022-03/thumbs/1648645032_58-sportishka-com-p-zaryadka-dlya-pozvonochnika-sport-krasivie-70.jpg' },
];

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Упражнения' }}
        />
        <Stack.Screen name="Начало" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Начало', { contact: item })} style={styles.button}>
            <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ProfileScreen = ({ route }) => {
  const { contact } = route.params;

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.text}>{contact.name}</Text>
      <Text style={styles.text}>{contact.description}</Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: contact.image }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  exerciseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  exerciseIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  exerciseText: {
    flex: 1,
    fontSize: 18,
  },
});

export default MyStack;