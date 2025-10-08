import { View, Text, Button } from "react-native";
// Assuming 'styles' points to your style sheet
import styles from "../style";
import axios from "axios";

export default function ReviewPage({ route, navigation }) {
    // Extracts the formData object from the navigation route parameters
    const { formData } = route.params;

    // In a real app, this function would handle the final API submission
    const handleSubmit = async() => {
        try {
            const response = await axios.post('http://192.168.30.111:8000/registration/api/register/', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Information</Text>
            <Text style={styles.text}>First Name: {formData.first_name}</Text>
            <Text style={styles.text}>Last Name: {formData.last_name}</Text>
            <Text style={styles.text}>Email: {formData.email}</Text>
            <Text style={styles.text}>Gender: {formData.gender}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={handleSubmit} />
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    title="Back to Edit" 
                    onPress={() => navigation.goBack()} 
                />
            </View>
        </View>
    );
}