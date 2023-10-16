import React from 'react';
import { StyleSheet, Text, View} from 'react-native';




const MemberResult = ({route}) =>{


const {user} =route.params

    return(
        <View>
            <Text>Üye Adı: {user.userName} </Text>
            <Text>Üye Soyadı: {user.userSurname}</Text>
            <Text>Üye Yaşı: {user.userAge}</Text>
            <Text>Üye Maili:{user.userEmail} </Text>
            <Text>Üye Memleketi: {user.userHometown}</Text>
            

        </View>
    )
}

export default MemberResult