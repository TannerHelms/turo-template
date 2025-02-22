import SafeAreaView from '@ui/safe-area-view';
import "../global.css";
import '../gesture-handler';
import SignIn from '@views/sign-in';


export default function App() {
  return (
    <SafeAreaView>
      {/* <Navigator /> */}
      <SignIn />
    </SafeAreaView>
  );
}

