import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const SplashScreen=()=> {
  return (
    <View style={styles.container}>
      <Text>is this for real ?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SplashScreen;