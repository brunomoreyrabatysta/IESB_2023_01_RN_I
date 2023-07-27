import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {

    const [name, setName] = useState<String>('');
    const [mail, setMail] = useState<String>('');
    const [phone, setPhone] = useState<String>('');
    const [address, setAddress] = useState<String>('');

    const save = () => {
        Alert.alert('Sucesso', `Cadastro realizado com sucesso!\n\nNome: ${name}.\ne-mail: ${mail}.\nTelefone: ${phone}.\nEndereço: ${address}.`);
    };

    return (
        <ScrollView style={ styles.container } contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView />
            <View style={ styles.containerOthers }>
                <Text style={ styles.title }>Dados pessoais</Text>
            </View>
            <View style={ styles.containerInputs }>
                
                <TextInput 
                    style={ styles.textInput}
                    placeholder='Nome'
                    placeholderTextColor="yellow"
                    maxLength={100}
                    onChangeText={setName}
                />
                <TextInput
                    style={ styles.textInput}
                    placeholder='E-mail'
                    placeholderTextColor="yellow"
                    keyboardType='email-address'
                    maxLength={100}
                    onChangeText={setMail}
                />
                <TextInput
                    style={ styles.textInput}
                    placeholder='Telefone'
                    placeholderTextColor="yellow"
                    keyboardType='phone-pad'
                    maxLength={20}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={ styles.textInput}
                    placeholder='Endereço'
                    placeholderTextColor="yellow"
                    maxLength={100}
                    onChangeText={setAddress}
                />
            </View>
            <View style={ styles.containerOthers }>
                <TouchableOpacity
                    style={ styles.button }
                    onPress={save}
                    activeOpacity={0.8}>
                    <Text style={ styles.label }>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 26,
        marginTop: 8,
        fontWeight: 'bold', 
        color: 'yellow',
        textAlign: 'center',
    },
    containerInputs: {
        flex: 2,
        justifyContent: 'center',
    },
    containerOthers: {
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderWidth: 0.3,
        borderColor: 'yellow',
        marginTop: 8,
        borderRadius: 5,
        padding: 5,
        color: 'yellow',
    },
    button: {
        height: 45,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        marginTop: 8,
        borderRadius: 5,
    },
    label: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },    
});