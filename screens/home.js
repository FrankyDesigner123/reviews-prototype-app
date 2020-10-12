import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {


    const [reviews, setReviews] = useState([
        { title: 'The Lord of The Rings', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: '2 Fast 2 Furious', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Superman Begins', rating: 4, body: 'lorem ipsum', key: '3' },
    ]);

    return(
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

