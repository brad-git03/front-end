import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../style";

export default function Homepage({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my App</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Register"
                    onPress={() =>navigation.navigate('Register')}/>
            </View>
        </View>
    )
}