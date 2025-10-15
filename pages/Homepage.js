import React from "react";
import {View, Text, Button} from 'react-native';
import styles from "../style";

export default function Homepage({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my App</Text>
            <View style={styles.containerButton} >
                <Button title = "Register" 
                onPress={() => navigation.navigate('Register')}/>
                <Button title = "View All Users"
                onPress={() => navigation.navigate('UserListPage')}/>
            </View>
        </View>
    );
}