import React, { useState } from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';

import Input from '../components/Input'
import Button from '../components/Button'




function MemberSign({navigation}){

    const [userName, setUserName] = useState(null)
    const [userSurname, setUserSurname] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const [userHometown, setUserHometown] = useState(null)


    function handleSubmit() {

        if (!userName ||  !userSurname || !userAge ||  !userEmail ||  !userHometown ){
            Alert.alert("Kebap Fitnes Salonu", "Bilgiler başbırakılamaz")
            return
        }
            
        const user ={
            userName,
            userSurname,
            userAge,
            userEmail,
            userHometown
        }

        console.log(user)

        navigation.navigate('MemberResultScreen', {user})

    }


    return(
        <SafeAreaView>
            <Text>Member Sign</Text>
            <Input label='Üye Adı'  placeholder='Üye ismini giriniz..' onChangeText={setUserName}/>
            <Input label='Üye Soyadı' placeholder='Üye soyismi giriniz..' onChangeText={setUserSurname}/>
            <Input label='Üye Yaşı' placeholder='Üye yaşını giriniz..' onChangeText={setUserAge}/>
            <Input label='Üye E-posta' placeholder='Üye mailini giriniz..' onChangeText={setUserEmail}/>
            <Input label='Üye Memleketi' placeholder='Üye memleketii giriniz..' onChangeText={setUserHometown}/>

            <Button text='Kaydını tamamla' onPress={handleSubmit}/>

        </SafeAreaView>
    )
}

export default MemberSign;