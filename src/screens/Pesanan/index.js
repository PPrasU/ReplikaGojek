import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { ImportCurve } from 'iconsax-react-native';
import { menuData } from './data';

const Pesanan = () => {
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
        <Text style={styles.pesanan}>Pesanan</Text>
        <TouchableOpacity>
          <ImportCurve color={'#394867'} variant="Linear" size={25} style={styles.down} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainContent}>
      <FlatList
          data={menuData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.menuItem,
                focusedItem === item.id && { borderBottomColor: "#00b800", borderBottomWidth: 3, },
              ]}
              onPress={() => handleMenuItemPress(item.id)}
            >
              <Text style={[styles.menuItemText, focusedItem === item.id && { color: 'black', fontWeight: 'bold', }]}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <Image
          source={require('../../assets/Tampilan.jpg')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Pesan Gojek, Yuk!</Text>
          <Text style={styles.text2}>Driver kami akan dengan senang hati</Text>
          <Text style={styles.text2}>membantumu</Text>
        </View>
      </ScrollView>
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
export default Pesanan;
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
  down: {
    marginRight: 15,
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