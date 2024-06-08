import React, {useState, useMemo} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useDebouncedSearch} from '../utils/useDebouncedSearch';

type Item = {id: number; name: string};

interface MyComponentProps {
  data: Item[];
}

interface ListItemProps {
  onPress(id: number): void;
  item: Item;
  isSelected: boolean;
}

interface ClearProps {
  onPress(): void;
}

const ListItem = ({item, onPress, isSelected}: ListItemProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(item.id)}>
      <Text>{item.name}</Text>
      <Text>{isSelected ? 'Selected' : 'Not selected'}</Text>
    </TouchableOpacity>
  );
};

const Clear = ({onPress}: ClearProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Clear</Text>
    </TouchableOpacity>
  );
};

const MyComponent = ({data}: MyComponentProps) => {
  const [selected, setSelected] = useState<Record<number, boolean>>({});
  const [search, debounced, setSearch] = useDebouncedSearch();

  const dataSource = useMemo(() => {
    if (!debounced) {
      return data;
    }

    return data.filter(item => item.name.includes(debounced.toLowerCase()));
  }, [data, debounced]);

  const handleSelect = (id: number) => {
    setSelected(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.inner]}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={setSearch}
          value={search}
        />
        <Clear onPress={() => setSearch('')} />
        <FlatList
          data={dataSource}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({item}) => (
            <ListItem
              onPress={handleSelect}
              isSelected={selected[item.id]}
              item={item}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  inner: {padding: 12, gap: 16},
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#E2E2E2',
  },
  button: {
    backgroundColor: '#E3F1B2',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {gap: 6},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
  },
});

export default MyComponent;
