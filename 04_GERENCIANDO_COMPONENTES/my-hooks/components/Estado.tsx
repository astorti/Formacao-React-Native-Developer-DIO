import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function Estado() {

    const [quantity, setQuantity] = useState<number>(1)
    const [price, setPrice] = useState<number>(10.90)
    const basePrice: number = 10.90

    useEffect(() => {
        console.log("Quantity alterado")
    }, [quantity])

    const removeNumber = () => {
        setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1
        console.log(newQuantity)
        setPrice(newQuantity * basePrice)
        return newQuantity
        })
    }

    const addNumber = () => {
        setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + 1
        console.log(newQuantity)
        setPrice(newQuantity * basePrice)
        return newQuantity
        })
    }

    return (
        <View>
            <View style={styles.buttonRow}>
                <Button title='-' onPress={removeNumber}/>
                <Text style={styles.textLabel}>{quantity}</Text>
                <Button title='+' onPress={addNumber}/>
            </View>
            <Text style={styles.textLabel}>R$ { price }</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    textLabel: {
        fontSize: 22
    },
    buttonRow: {
        flexDirection: 'row',
    }
});
