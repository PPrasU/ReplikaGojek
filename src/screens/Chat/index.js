import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MessageQuestion, MessageAdd, Sms, } from 'iconsax-react-native';
import { chatData } from './data';
import ChatBox  from './ChatBox';

const Chat = () => {
  const [focusedIcon, setFocusedIcon] = useState(null);
  const handleIconPress = (iconName) => {
    setFocusedIcon(iconName);
  };
  const [focusedItem, setFocusedItem] = useState(null);

  const handleMenuItemPress = (itemId) => {
    setFocusedItem(itemId);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pesanan}>Chat</Text>
      </View>
      <ScrollView style={styles.mainContent}>
        <Text style={{ 
          fontSize: 18,
          fontWeight: 'bold', 
          color: 'black',
          marginLeft: 15}}>
          Pilihan Fitur
        </Text>
        <TouchableOpacity style={styles.smsCircle}>
          <Sms color={'white'} variant="Linear" size={32} />
        </TouchableOpacity>
        <Text style={{ 
          fontSize: 16,
          color: 'black',
          marginLeft: 20}}>
          Inbox
        </Text>
        <TouchableOpacity style={styles.messageQCircle}>
          <MessageQuestion color={'white'} variant="Linear" size={32} />
        </TouchableOpacity>
        <Text style={{ 
          fontSize: 16,
          color: 'black',
          marginLeft: 97,
          bottom: 72}}>
          Bantuan
        </Text>
        <Text style={{ 
          fontSize: 18,
          fontWeight: 'bold', 
          color: 'black',
          marginLeft: 15,
          bottom: 40}}>
          Chat Kamu
        </Text>
        {chatData.map((chat) => (
          <ChatBox key={chat.id} name={chat.name} date={chat.date} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.messageAddCircle}>
        <MessageAdd color={'white'} variant="Linear" size={32} />
      </TouchableOpacity>
      {/* <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.footerItem,
            focusedIcon === 'Beranda' ? styles.highlightedFooterItem : null
          ]}
          onPress={() => handleIconPress('Beranda')}
        >
          <Home color={'#394867'} variant="Bold" size={25} />
          <Text style={styles.footerText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerItem,
            focusedIcon === 'Promo' ? styles.highlightedFooterItem : null
          ]}
          onPress={() => handleIconPress('Promo')}
        >
          <DiscountShape color={'#394867'} variant="Bold" size={25} />
          <Text style={styles.footerText}>Promo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerItem,
            focusedIcon === 'Pesanan' ? styles.highlightedFooterItem : null
          ]}
          onPress={() => handleIconPress('Pesanan')}
        >
          <NoteFavorite color={'#394867'} variant="Bold" size={25} />
          <Text style={styles.footerText}>Pesanan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerItem,
            focusedIcon === 'Chat' ? styles.highlightedFooterItem : null
          ]}
          onPress={() => handleIconPress('Chat')}
        >
          <Send2 color={'#394867'} variant="Bold" size={25} />
          <Text style={styles.footerText}>Chat</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
export default Chat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 75,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
  },
  pesanan:{
    padding: 20,
    color: "black",
    fontSize: 28,
    fontWeight: 'bold',
  },
  smsCircle: {
    width: 50,
    height: 50,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: '#ff9100',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageQCircle: {
    width: 50,
    height: 50,
    bottom: 72,
    marginLeft: 100,
    backgroundColor: '#158f00',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageAddCircle: {
    marginLeft: 350,
    width: 50,
    height: 50,
    backgroundColor: '#158f00',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  mainContent: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    marginLeft: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    height: 45,
    width: 120,
  },
  menuItemText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  image: {
    marginTop: 120,
    marginBottom: 20,
    height: 220,
    width: 410,
  },
  textContainer: {
    alignItems: 'center',
  },
  text1: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: "black",
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlightedFooterItem: {
    backgroundColor: 'linear-gradient(135deg, #048d02, #3bce46)',
    borderTopColor: "#00b800", 
    borderTopWidth: 3,
    borderRadius: 10,
  },
});