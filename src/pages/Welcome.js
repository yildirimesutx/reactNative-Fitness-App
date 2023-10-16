import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import Button from '../components/Button/Button'



function Welcome({navigation}){


    const goToSign = ()=>{
        navigation.navigate('MemberSignScreen')
    }



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Kebeb Fitness</Text>
            <Button text="Üye kaydı oluştur" onPress={goToSign} />
        </SafeAreaView>
    )
}

export default Welcome;


const styles = StyleSheet.create({
    container : {flex : 1, alignItems: 'center', justifyContent:'center'},
    text : { fontSize: 40, fontWeight:'bold'}
})