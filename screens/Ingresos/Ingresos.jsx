import React from "react";
import { StyledView, StyledText, StyledTextInput, StyledButton} from "../../styles/StyledComponents";
import i18n from "../../Localization/i18n";
import moment from "moment";
import { database,auth} from '../../firebase';
import { FlatList,Text,View,StyleSheet } from "react-native";


const IngresosPage = () => {
  const [description,setDescription] = React.useState("")
  const [mont, setMont] = React.useState("")
  const [total,setTotal] = React.useState("")

  const [ingresosState,setIngresosState] = React.useState(null)

  React.useEffect(()=>{
    const usuario = auth.currentUser.uid;
    const todoRef = database.ref("ingresos");
    todoRef.on("value", (snapshot)=>{
    const ingresos = snapshot.val();
    const ingresosList = [];
    for (let id in ingresos[usuario]){
      ingresosList.push({ id, ...ingresos[usuario][id] });
    }
    
    let sumIngresos=0;
    ingresosList.map((item)=> sumIngresos = ( sumIngresos + parseInt(item.mont)))
    setIngresosState(ingresosList.reverse())
    setTotal(sumIngresos)
  });
  },[])

  const addIngreso =()=>{
    const usuario = auth.currentUser.uid;
    const date = moment().format().substr(0,10);
    const todoRef = database.ref(`ingresos/${usuario}/`)
    todoRef.push({description: `${description}`,mont: `${mont}` ,date: `${date}`  })
  }


    return (
        <StyledView>
          <Text style={styles.total}> {i18n.t('Ingresos').total}: ${total} </Text>
          <StyledTextInput
            placeholder={i18n.t('Ingresos').inputDescription}
            value={ description }
            onChangeText={ (text)=> setDescription(text)}
          />
          <StyledTextInput
          placeholder={i18n.t('Ingresos').inputMont}
          value={ mont }
          onChangeText={ (text)=>setMont(text) }
          />
          <StyledButton 
          title={i18n.t('Ingresos').addIngreso}
          onPress={ addIngreso }
          />

          {ingresosState !== null?
            <FlatList 
            data={ingresosState}
            renderItem={({item})=> <View style={styles.item}>
              <Text>{`${i18n.t('Ingresos').date} ${item.date}`}</Text>
              <Text>{`${i18n.t('Ingresos').mont} $${item.mont}`}</Text>
              <Text>{`${item.description}`}</Text>
              </View>
               }
            />
            :null
          }
      </StyledView>
    );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F8F8FF',
    padding: 15,
    marginVertical: 5,
    width: 350
  },
  total:{
    fontWeight: 'bold',
    fontSize: 30,
  }

});

export default IngresosPage;