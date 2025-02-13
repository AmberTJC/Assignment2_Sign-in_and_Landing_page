
import { useNavigation } from "expo-router";
import { Linking, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


interface CityLinkProps{
    cityName: string;
    cityURL: string;
}


const CityLink: React.FC<CityLinkProps> = ({cityName, cityURL}) => {
    const goToSite = () => {Linking.openURL(cityURL)};

return(
    <TouchableOpacity onPress={goToSite}>
        <Text>Website for: {cityName}</Text>
    </TouchableOpacity>
);

};



    
       

export default CityLink;
