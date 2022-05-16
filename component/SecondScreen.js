import { Button, StyleSheet, Image, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SecondScreen({navigation}){
    return (
    <View style={styles.txtbox}>
            <Text>You are Here</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    txtbox: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SecondScreen;