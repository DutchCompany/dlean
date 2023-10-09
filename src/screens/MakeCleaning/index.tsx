import { Text, View } from "react-native";
import { styles } from "./styles";
import MapView, { Marker } from "react-native-maps";

export function MakeCleaning(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>MakeCleaning</Text>
            <MapView
                initialRegion={{
                    latitude: -29.84423629677824, 
                    longitude: -50.521062361013435,
                    latitudeDelta: 0,
                    longitudeDelta: 0
                }}
                style={styles.map} 
            >
                <Marker
                    coordinate={{
                        latitude: -29.84423629677824, 
                        longitude: -50.521062361013435
                    }}
                    title={"Minha casa"}
                    description={"Essa é minha casa"}
                />
            </MapView>
        </View>
    )
}