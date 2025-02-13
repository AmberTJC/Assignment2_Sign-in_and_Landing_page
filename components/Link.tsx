
import { useNavigation } from "expo-router";
import { Linking, Text , StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


interface CityLinkProps{
    cityName: string;
    cityURL: string;
}


const CityLink: React.FC<CityLinkProps> = ({cityName, cityURL}) => {
    const goToSite = () => {Linking.openURL(cityURL)};

return(
    <TouchableOpacity onPress={goToSite}>
        <Text style = {styles.link}>Website for: {cityName}</Text>
    </TouchableOpacity>
);

};

const styles = StyleSheet.create({
    
  link:{
    textAlign: "center",
    textDecorationLine: "underline",
    color: "blue"
  },

});


    
       

export default CityLink;
