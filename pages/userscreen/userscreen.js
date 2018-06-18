import {FlatList, View, StyleSheet, Alert} from "react-native";
import React, {Component} from "react";
import {fetchUserList} from "../../utility/networking";
import ListItem from "react-native-elements/src/list/ListItem";

export default class UserScreen extends Component<{}> {
    state = {
        users: [],
    };
    counter = 1;

    componentDidMount() {
        this.fetchUserList();
    }

    fetchUserList() {
        fetchUserList(this.counter).then((data) => {
            this.setState({
                users: this.state.users.concat(data.data)
            })
        })
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({item}) => (
        <ListItem
            title={item.first_name}
            roundAvatar
            avatar={{uri: item.avatar}}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.users}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    onEndReached={() => {
                        if (this.counter < 10) {
                            this.counter++
                            this.fetchUserList(1)
                        } else {
                            Alert.alert("There are no more users to load")
                        }
                    }}
                    onEndReachedThreshold={0.5}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    email: {
        color: 'red'
    }

});