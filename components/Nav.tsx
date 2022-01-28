import { Text, View, ScrollView, Image } from 'react-native';
import styled from 'styled-components'
import { StyleSheet } from 'react-native';



export function Nav(){

    return(
        <ScrollView>
        <View >
            
            <View style={styles.retangle}>

                <View>
                <Text style={styles.text}>Luzes</Text>
                <Image style={{width: 100, height: 100}} source={require('../assets/svgtopng/11.png')}/>
                </View>

                <View>
                <Text style={styles.text2}>Ventilador</Text>
                <Image style={{width: 100, height: 100}} source={require('../assets/svgtopng/2.png')}/>
                </View>
               
              
            
              
            </View>

            <View style={styles.linebox}>
            <View style={styles.box}>
                <Text>Radio</Text>
                <Image style={{width: 100, height: 100}} source={require('../assets/svgtopng/8.png')}/>
            </View>
            <View style={styles.box}>
                <Text>Sistema de Som</Text>
                <Image style={{width: 100, height: 100}} source={require('../assets/svgtopng/13.png')}/>
            </View>
            </View>

            <View style={styles.linebox}>
            <View style={styles.box}>
                <Text>TV</Text>
                <Image style={{width: 100, height: 100}} source={require('../assets/svgtopng/5.png')}/>
            </View>
            <View style={styles.box}>
                <Text>Fire TV</Text>
                <Image style={{width: 100, height: 100}} source={require('../assets/svgtopng/3.png')}/>
            </View>
            </View>
       
        </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    color: 'white',
 
    },
    box:{
        width: 190,
        height: 190,
        backgroundColor: '#00738f',
        marginTop: 35,
        marginBottom: 35,
        borderStyle: 'solid',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    retangle:{
        width: 400,
        height: 200,
        backgroundColor: '#00738f',
        borderStyle: 'solid',
        borderRadius: 10,
        marginTop: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 47
    },
    linebox:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row' 
        
    },
    text:{
        paddingLeft: 30
    },
    text2:{
        paddingLeft: 18
    },
    text0:{
        paddingLeft: 18
    }
  });
  