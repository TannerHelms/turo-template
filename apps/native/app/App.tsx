import SafeAreaView from '@ui/safe-area-view';
import SignIn from '@views/sign-in';
import "../global.css";
import { Text } from 'react-native';
import { Button, ButtonText } from "@ui/button"
export default function App() {
  return (
    <SafeAreaView>
      <SignIn />
      <Button>
        <ButtonText>Sign In</ButtonText>
      </Button>
    </SafeAreaView>
  );
}

