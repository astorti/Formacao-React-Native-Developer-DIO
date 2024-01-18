import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

type UserScreenProps = {
    route: RouteProp<RootStackParamList, "User">
}

export default function UserScreen({ route }: UserScreenProps) {
    
    const { username } = route.params
    const userContex = useContext(UserContext)
    const nomeDinamico = userContex?.loginName || "Nenhum nome salvo"
    const nomeEstatico = userContex?.nome || "Nenhum nome salvo"
    
    return (
        <View>
            <Text style={{fontSize: 25}}>Nome da Rota: {username}</Text>
            <Text style={{fontSize: 25}}>Nome Estatico: {nomeEstatico}</Text>
            <Text style={{fontSize: 25}}>Nome Dinâmico: {nomeDinamico}</Text>
        </View>
    )
}