import React, {useState} from "react"
import {Button, RefreshControl, ScrollView, SectionList, Text, View} from "react-native"
import styles from "./styles/styles";

const App = () => {
    const [sample, setSample] = useState(0)
    const [refreshState, setRefreshState] = useState(false);
    const testCases = [
        {key: 0, name: "alwin"},
        {key: 1, name: "alwin"},
        {key: 2, name: "alwin"},
        {key: 3, name: "alwin"},
        {key: 4, name: "alwin"},
        {key: 5, name: "alwin"},
        {key: 6, name: "alwin"},
        {key: 7, name: "alwin"},
        {key: 8, name: "alwin"},
        {key: 9, name: "alwin"},
        {key: 10, name: "alwin"}
    ]

    const sectionListData = [
        {
            title: "test",
            data: ["item1", "item2", "item3"]
        },
        {
            title: "test",
            data: ["item1", "item2", "item3"]
        },
        {
            title: "test",
            data: ["item1", "item2", "item3"]
        },
        {
            title: "test",
            data: ["item1", "item2", "item3"]
        },
        {
            title: "test",
            data: ["item1", "item2", "item3"]
        },
    ]
    return (
        <ScrollView
            horizontal={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshState}
                    onRefresh={(e) => {
                        setRefreshState(!refreshState)
                    }}
                    colors={["#000000", "#ffffff"]}
                />
            }
            style={{
                width: "100%"
            }}
        >

            <View style={styles.mainView}

            >
                <Text style={styles.text}
                >
                    This here is a test {sample}
                </Text>

                {/*section list*/}
                <SectionList
                    keyExtractor={(item, index) => index.toString()+item}
                    sections={sectionListData}
                    renderItem={({item}) => (
                        <View>
                            <Text style={styles.loopText}>{item}</Text>
                        </View>
                    )}
                    renderSectionHeader={({section})=> (
                        <Text style={{
                            color:"red",
                            textAlign:"center"
                        }}>
                            {section.title}
                        </Text>
                    )}
                />


                {/*<ScrollView*/}
                {/*    horizontal={false}*/}
                {/*    refreshControl={*/}
                {/*        <RefreshControl*/}
                {/*            refreshing={refreshState}*/}
                {/*            onRefresh={(e) => {*/}
                {/*                setRefreshState(!refreshState)*/}
                {/*            }}*/}
                {/*            colors={["#000000", "#ffffff"]}*/}
                {/*        />*/}
                {/*    }*/}
                {/*    style={{*/}
                {/*        width: "100%"*/}
                {/*    }}>*/}


                {/*{*/}
                {/*    testCases.map((item, index) => {*/}
                {/*        return <Text*/}
                {/*            key={item.key}*/}
                {/*            style={styles.loopText}*/}
                {/*        >{item.name}</Text>*/}
                {/*    })*/}
                {/*}*/}

                {/*flatlist component*/}
                {/*<FlatList*/}
                {/*    horizontal*/}
                {/*    inverted*/}
                {/*    data={testCases}*/}
                {/*    keyExtractor={(item, index) => index.toString()}*/}
                {/*    renderItem={({item}) => (*/}
                {/*        <View>*/}
                {/*            <Text style={styles.loopText}>{item.name}</Text>*/}
                {/*        </View>*/}
                {/*    )}*/}
                {/*/>*/}

                {/*</ScrollView>*/}
                <Button
                    style={styles.button}
                    title={"CLick me"}
                    accessibilityLabel={"Click here for details"}
                    onPress={() => {
                        // Linking.openURL("https://www.instagram.com/");
                        setSample(data => (data + 1));
                    }}
                >
                </Button>
            </View>
        </ScrollView>
    )
}


export default App;