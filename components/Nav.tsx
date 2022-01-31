import { Text, View, ScrollView, Image,  } from 'react-native';
import styled from 'styled-components'
import { StyleSheet } from 'react-native';
import { Category } from './Select';

import img1 from '../assets/svgtopng/11.png'
import img2 from '../assets/svgtopng/2.png'
import img3 from '../assets/svgtopng/8.png'
import img4 from '../assets/svgtopng/13.png'
import img5 from '../assets/svgtopng/5.png'
import img6 from '../assets/svgtopng/3.png'


export function Nav(){

    return(
        <ScrollView>
        <View style={styles.container} >
        <View style={styles.retangle}>
        <Category title='Lâmpada'icon={img1} icon2={img6}/>
        <Category title='Ventilador'icon={img2} icon2={img5}/>
        </View>

        <View style={styles.retangle}>
        <Category title='Rádio'icon={img3} icon2={img4}/>
        <Category title='Caixa de Som'icon={img4} icon2={img3}/>
        </View>

        <View style={styles.retangle}>
        <Category title='TV'icon={img5} icon2={img2}/>
        <Category title='TV System'icon={img6} icon2={img1}/>
        </View>
            
        </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a8cc0',
        paddingBottom: 50
        
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
        
        borderStyle: 'solid',
        borderRadius: 10,
        marginTop: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
       
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
  