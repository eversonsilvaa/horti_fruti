import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, Image, View, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
const clickHandler = () =>{
    alert('Adicionado ao Carrinho! 🛒')
  }
export default function Produtos() {
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/imagem/fotoCapa.jpg')} style={styles.fundo}/>
        <View>
        <Text style={styles.title}>
            Produtos
        </Text>
        </View>
        <View style={styles.conteudo}>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/tomate.png')}
         />

         <Text style={styles.nomeProduto}>
            Tomate
         </Text>
         
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/cebola.png')}
         />
         <Text style={styles.nomeProduto}>
            Cebola
         </Text>
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/beterraba.png')}
         />
         <Text style={styles.nomeProduto}>
            Beterraba
         </Text>
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/cenoura.png')}
         />
         <Text style={styles.nomeProduto}>
            Cenoura
         </Text>
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/repolho.png')}
         />
         <Text style={styles.nomeProduto}>
            Repolho
         </Text>
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/pinha.png')}
         />
         <Text style={styles.nomeProduto}>
            Pinha
         </Text>
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/abobora.png')}
         />
         <Text style={styles.nomeProduto}>
            Abobora
         </Text>
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        <View style={styles.item}>
         <Image
         source={require('../../assets/imagem/pimentao.png')}
         />
         <Text style={styles.nomeProduto}>
            Pimentão
         </Text>
         
        </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btCarrinho}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    
    container: {
        alignItems: "center",
        justifyContent: "center",

    },

    fundo:{
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: 500,
        height: 250,
        borderRadius: 150,
        
        },

        title: {
            marginTop: 20,
            fontSize: 20, 
            fontWeight: 'bold',
        },

        item: {
            
            marginTop: 30,
            backgroundColor: 'grey',
            width: 250,
            height: 250,
            borderRadius: 20,
        },

        nomeProduto: {
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center'
        },

        conteudo: {
            
         
        },

        btCarrinho:{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'green',
            marginTop: 20,
           height: 40,
           width: 150,
           marginLeft: 50,
           borderRadius: 50,
           
            
            
          },

          textButton:{
            color: "#ffff",
            justifyContent: "center",
            alignItems: "center",
           
          }
        
  

});