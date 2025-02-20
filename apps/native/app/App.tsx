import SafeAreaView from '@ui/safe-area-view';
import SignIn from '@views/sign-in';
import "../global.css";
import { Text } from 'react-native';
export default function App() {
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}

