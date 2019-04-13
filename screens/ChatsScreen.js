import React from "react";
import {
  SectionList,
  Icon,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "app/constants/Colors";

export default class DirectChatsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#342E37"
    },
    headerTintColor: "#fff",
    title: "Chats"
  };
  render() {
    var directChats = [
      "Developer",
      "Manager",
      "User",
      "User",
      "User",
      "User",
      "User",
      "User",
      "User",
      "User",
      "User",
      "User",
    ];
    var groupChats = [
      "Development",
      "Accounting",
      "DevOps",
    ];

    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: "Group Chats",
              data: groupChats
            },
            {
              title: "Direct Chats",
              data: directChats
            }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                alert(item);
              }}
              style={styles.itemContainer}
            >
              <Text style={styles.item}>{item}</Text>
              <Text style={styles.subItem}>+382 9232322: Hey, how are you? 👋</Text>
              <Ionicons
                style={styles.arrow}
                size={30}
                name="ios-arrow-forward"
                color={Colors.subtleIcon}
              />
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const itemHeight = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#dedede"
  },
  itemContainer: {
    borderBottomColor: Colors.subtleIcon,
    borderBottomWidth: 0.5
  },
  item: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: "bold",
    height: itemHeight
  },
  subItem: {
    fontSize: 14,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: Colors.subFont
  },
  arrow: {
    position: "absolute",
    right: 10,
    top: itemHeight / 2 - 2,
    justifyContent: "center"
  }
});