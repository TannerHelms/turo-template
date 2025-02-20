import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from '@views/sign-in';
import SafeAreaView from '@ui/safe-area-view';

export default function App() {
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}

