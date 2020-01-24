import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation: { getParam } }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(blog => blog.id === getParam("id"));
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation: { navigate, getParam } }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigate("Edit", { id: getParam("id") })}
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
