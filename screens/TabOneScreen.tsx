import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { Nav } from '../components/Nav';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen() {
  return (
    <ScrollView>
   

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <Nav />
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a8cc0',
    height: "100%"
  },
  title: {

  },
  separator: {

  },
});
