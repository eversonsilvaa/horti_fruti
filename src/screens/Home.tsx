import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, Image, View, ImageBackground } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hortifruti</Text>
            
            <ImageBackground source={require('../../assets/imagem/fotoCapa.jpg')} style={styles.capa}/>
            
            <View  style={styles.botao}>
                <Text style={styles.card}>
                    Produtos Abaixo 👇
                </Text>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    
    container: {
        alignItems: "center",
        justifyContent: "center",

    },
    
    capa:{
    flex: 1,
    resizeMode: 'cover',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'green',
    },

    botao:{
        resizeMode: 'cover',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 50,
        borderRadius: 22,
        backgroundColor: 'green',
        position: 'relative',
        top: 300
        
        },

        card: {
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
        }

        
})