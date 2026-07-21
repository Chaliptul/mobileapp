import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity } from 'react-native';
import { PHOTO } from './src/data';
import { colors } from './src/theme';
import { FlatList } from 'react-native/types_generated/index';

export default function App() {
  return (
    <FlatList data={PHOTO}
    keyExtractor={(item) => item.id}
    numColumns={2}
    columnsWrapprStyle={styles.row}
    contentContainerStyle={styles.list}
    renderItem ={({item})=>
    return (
    >
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: PHOTO[0].uri }}
        />
        <View style={styles.footer}>
          <Text style={styles.title}>{item.title} </Text>
          <TouchableOpacity>
            <Text style={styles.heart}></Text>



          </TouchableOpacity>
        </View>
      </View>
    
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: '48%',
    marginBottom: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  title: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    marginRight: 8,
  },

  heart: {
    fontSize: 24,
    color: colors.muted,
  },

  heartOn: {
    color: colors.heart,
  },
});

