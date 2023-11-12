import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { User } from 'iconsax-react-native';

const ChatBox = ({ name, date }) => {
  return (
    <TouchableOpacity style={styles.chatBox}>
      <View style={styles.userCircle}>
        <User color={'black'} variant="Bold" size={32} />
      </View>
      <View style={styles.chatContent}>
        <Text style={styles.chatName}>{name}</Text>
        <Text style={styles.chatDate}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    chatBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        bottom: 30,
      },
      chatContent: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      chatName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
      chatDate: {
        fontSize: 14,
        color: 'black',
        textAlign: 'right',
        marginLeft: 270,
        bottom: 22
      },
});

export default ChatBox;
