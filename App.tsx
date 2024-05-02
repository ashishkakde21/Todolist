import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import List from './src/list';

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <List text={item} onDelete={() => removeTodo(index)} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});
