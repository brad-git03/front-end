import { View, Text, Button, TextInput} from 'react-native';
// Assuming 'styles' points to your style sheet
import styles from '../style'; 
import { useState } from 'react';

export default function Register({ navigation }) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        password: ''
    });

    // Helper function to update state based on field name
    const handleChange = (name, text) => {
        setFormData({ ...formData, [name]: text });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Page</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Firstname"
                value={formData.first_name}
                onChangeText={(text) => handleChange('first_name', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Lastname"
                value={formData.last_name}
                onChangeText={(text) => handleChange('last_name', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Gender"
                value={formData.gender}
                onChangeText={(text) => handleChange('gender', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
            />
            
            <Button
            title="Register"
            // Passes the formData object to the 'Review' screen
            onPress={() => navigation.navigate('ReviewPage', { formData })}
            />
        </View>
    );
}