
  
import React, {useState} from 'react'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import{ Text, View, Image, Button, TouchableOpacity, Input } from 'react-native'
import {SvgProps} from 'react-native-svg'

import { LinearGradient } from 'expo-linear-gradient'
import {styles} from './styles'



type Props= RectButtonProps & {
    title: string;
    icon: Image;
    icon2: Image;
    checked?: boolean;
    hasCheckBox?: boolean;

}


export function Category({
    title,
    icon: Icon,
    icon2: Icon2,
    checked= false,
    hasCheckBox = false,
    ...rest
}: Props){
    const [active, setActive] = useState("2")
  function shot(){
    ()=> setActive("3")
  }

    return(
       
        <RectButton{...rest}>
       
        <LinearGradient 
        style={styles.container}
        colors={["transparent", "transparent"]}
       
        >
             
             <LinearGradient 
             style={[styles.content, 
             {opacity: checked ? 1 : 0.6}]}
             colors={[checked ? "#0896c7":"#00504b", "#00a69c" ]}
             
             >
                 {/* {
                    hasCheckBox && <View style={checked ? styles.checked : styles.check}/>
                 } */}
               
                
                
                 {active === "2" &&     <Image style={{width: 100, height: 100}} source={Icon}/>}
              {active === "3" &&    <Image style={{width: 100, height: 100}} source={Icon2}/> }
             
                    
                       
                      
                    

                 
                 <Text style={styles.title}>
                     {title}
                 </Text>
             </LinearGradient>
            
        </LinearGradient>
       
        </RectButton>
       
    )
}