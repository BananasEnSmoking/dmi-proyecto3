import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { StyledKeyboardAvoidingView, StyledView, StyledImage, StyledTextInput, StyledSecondaryButton, StyledButtonText, StyledPrimaryButton, StyledButton, StyledSecondaryButtonText, StyledText } from "../../styles/StyledComponents";
import logo from "../../media/utags.png";
import { Text, View } from "react-native";
import { auth } from '../../firebase'
import i18n from "../../Localization/i18n";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(()=>{
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsuscribe;
  },[])

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      // then is a fullfilled promise
      const user = userCredentials.user;
      console.log("Logged in with:", user.email);
    })
    .catch((error) => {
      // catch is a rejected promise
      alert(error.message);
    });
  };

  return (
      <StyledKeyboardAvoidingView>
        <StyledView>
          <StyledImage 
            source={ logo } 
            width={ 310 } 
            height={ 225 } 
            bottom={ 10 }
          />
          <StyledText
            max="300px"
            align="center"
            size="16px"
            weight="600"
            top={0}
            bottom={10}
          >
            {i18n.t('Login').saludo}
          </StyledText>
          <StyledTextInput 
            placeholder={i18n.t('Login').email}
            value={ email }
            onChangeText={(text) => setEmail(text)}
          />
          <StyledTextInput
            placeholder={i18n.t('Login').password}
            value={ password }
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <StyledButton title={i18n.t('Login').login} onPress={ handleLogin }/>
          <StyledSecondaryButton 
            onPress={() => navigation.replace("Signup")}
          > 
            <StyledSecondaryButtonText>{i18n.t('Login').signup}</StyledSecondaryButtonText>
          </StyledSecondaryButton>
        </StyledView>
      </StyledKeyboardAvoidingView>
  );
};
export default LoginPage;
