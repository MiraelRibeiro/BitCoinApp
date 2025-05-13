import React, { Fragment } from "react";
import { ScrollView, FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import QuotationsItems from "./QuotationItens";

export default function QuotationsList(props) {

    const daysQuery = props.filterDay;
    return(
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity style={styles.buttonQuerry} onPress={() => daysQuery(7)}>
                    <Text style={styles.textButtonQuerry}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuerry} onPress={() => daysQuery(15)}>
                    <Text style={styles.textButtonQuerry}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuerry} onPress={() => daysQuery(30)}>
                    <Text style={styles.textButtonQuerry}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuerry} onPress={() => daysQuery(90)}>
                    <Text style={styles.textButtonQuerry}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonQuerry} onPress={() => daysQuery(180)}>
                    <Text style={styles.textButtonQuerry}>6M</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <FlatList data={props.listTransactions} renderItem={({item}) => {
                    return <QuotationsItems valor={item.value} data={item.data} />
                    }} />
            </ScrollView>

        </Fragment>
    );
}