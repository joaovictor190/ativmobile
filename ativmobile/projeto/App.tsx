import { Text, View,} from 'react-native';
import { styles } from './styles';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <Register/>
      </View>

    
  );
}



