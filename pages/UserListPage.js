import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import styles  from '../style'; 

export default function UserListPage() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        axios
            .get('http://192.168.30.111:8000/registration/api/users/')
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View>
                <ActivityIndicator screenReaderFocusable={true} size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={styles.title}>View All Users</Text>
            <FlatList style={styles.table}
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.users}>
                        <Text>{item.last_name} {item.first_name}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.gender}</Text>
                        <Button
                        title="Edit"
                        color={"#2fb846ff"}/>
                        <Button
                        title="Delete"
                        color={"#ff3b3bff"}/>
                    </View>
                )}
            />
        </View>
    );
}