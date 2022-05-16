import { Button, StyleSheet, Image, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function FirstScreen({ navigation }) {
    return (
    <View style={styles.imgbox}>
        <Image source={require('../assets/car.jpeg')}/>
    </View>
);

};

const styles = StyleSheet.create({
imgbox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});
export default FirstScreen;
