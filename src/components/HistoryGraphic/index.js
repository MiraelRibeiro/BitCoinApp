import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";

export default function HistoryGraphic(props) {
    return(
        <View style={styles.contentGraphic}>
            <LineChart data={{
                datasets:[{
                    data: props.infoDataGraphic
            }]
            }}
            width={Dimensions.get("window").width}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            withVerticalLines={false}
            yLabelsOffset={1}
            withVerticalLabels={false}
            chartConfig={{
                backgroundColor: "#000000",
                backgroundGradientFrom: "#232323",
                backgroundGradientTo: "#3F3F3F",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
                propsForDots: {
                    r: "1",
                    strokeWidth: "1",
                    stroke: "#f50b41"
                }
            }}
            bezier
            />
            
        </View>
    );
}