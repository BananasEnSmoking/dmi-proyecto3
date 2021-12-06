import React from "react";
import { StyledView, StyledText, StyledButton } from "../../styles/StyledComponents";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";


const Profile = () => {

    const navigation = useNavigation();


    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login");
          })
          .catch((error) => {
            alert(error.message);
          });
      };

    return (
    <StyledView>
        <StyledButton title={'Log out'} onPress={handleSignOut}/>
    </StyledView>
    );
};

export default Profile;