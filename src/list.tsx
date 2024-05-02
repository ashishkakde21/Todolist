import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {
  text: string;
  onDelete: () => void;
}

const List: React.FC<Props> = ({ text, onDelete }) => {
  return (
    <View style={styles.listItem}>
      <Text>{text}</Text>
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default List;
