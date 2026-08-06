import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView 
      style={styles.sefeArea} 
      contentContainerStyle={styles.content}
      >
        <ScrollView style={styles.container}>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Nativo e Expo</Text>
          <Text style={styles.text}>Matheus Felix</Text>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  sefeArea: {
    backgroundColor: "#ffff",
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text:{
    fontSize: 30,
    marginBottom: 20,
     
    
  }
});
