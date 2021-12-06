import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { StyledKeyboardAvoidingView, StyledView, StyledText, StyledImage, StyledTextInput, StyledButton, StyledSecondaryButton, StyledSecondaryButtonText } from "../../styles/StyledComponents";
import logo from "../../media/utags.png";
import { Text, View } from "react-native";
import i18n from "../../Localization/i18n";


const SignUpPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const navigation = useNavigation();

  const handleSignup = () => {
    console.log("signup!");
    navigation.replace("Home");
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
            {i18n.t('Signup').saludo}
          </StyledText>
          <StyledTextInput 
            placeholder={i18n.t('Signup').email}
            value={ email }
            onChangeText={(text) => setEmail(text)}
          />
          <StyledTextInput
            placeholder="Name"
            value={ name }
            onChangeText={(text) => setName(text)}
          />
          <StyledTextInput
            placeholder={i18n.t('Signup').password}
            value={ password }
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <StyledButton title={i18n.t('Signup').signup} onPress={ handleSignup }/>
          <StyledSecondaryButton
            onPress={() => navigation.replace("Login") }
          >
            <StyledSecondaryButtonText>
            {i18n.t('Signup').back}
              </StyledSecondaryButtonText>           
          </StyledSecondaryButton>
      </StyledView>
    </StyledKeyboardAvoidingView>
  );
};

export default SignUpPage;
