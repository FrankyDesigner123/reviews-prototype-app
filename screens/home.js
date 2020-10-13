import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard, TouchableWithoutFeedbackComponent } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'The Lord of The Rings', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: '2 Fast 2 Furious', rating: 3, body: 'lorem ipsum', key: '2' },
        { title: 'Superman Begins', rating: 4, body: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return(
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                       <Card>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                       </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f2f2f2',
        padding: 10,
        alignSelf: "center"
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
    }
});