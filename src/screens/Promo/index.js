import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { DiscountShape, ArrowRight2, EmptyWallet, ElementPlus, Star1, } from 'iconsax-react-native';
import { menuData } from './data';

const Promo = () => {
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
        <Text style={styles.promo}>Promo</Text>
      </View>
      <ScrollView style={styles.mainContent}>
        <View style={styles.horizontalContainer}>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.heading}>77</Text>
            <View style={styles.arrowContainer}>
              <ArrowRight2 color={'#394867'} variant="Linear" size={25} />
            </View>
            <Text style={styles.subHeading}>Vouchers</Text>
            <Text style={styles.count}>77 Akan hangus</Text>
            <View style={styles.box1}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.heading}>0</Text>
            <View style={styles.arrowContainer}>
              <ArrowRight2 color={'#394867'} variant="Linear" size={25} />
            </View>
            <Text style={styles.subHeading}>Langganan</Text>
            <Text style={styles.count}>Lagi aktif</Text>
            <View style={styles.box2}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Text style={styles.heading}>0</Text>
            <View style={styles.arrowContainer}>
              <ArrowRight2 color={'#394867'} variant="Linear" size={25} />
            </View>
            <Text style={styles.subHeading}>Missions</Text>
            <Text style={styles.count}>Lagi berjalan</Text>
            <View style={styles.box3}></View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.promoContainer}>
          <DiscountShape color={'#ff7300'} variant="Bold" size={25} style={styles.diskon}/>
          <Text style={styles.textKode}>Masukkan Kode Promo</Text>
          <ArrowRight2 color={'#394867'} variant="Linear" size={25} style={styles.arrow}/>
        </TouchableOpacity>
        <Text style={{ 
          fontSize: 18, 
          fontWeight: 'bold', 
          color: 'black',
          padding: 20,}}>
          Promo Menarik Buat Kamu
        </Text>
        <FlatList
          data={menuData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.menuItem,
                focusedItem === item.id && { backgroundColor: 'green' },
              ]}
              onPress={() => handleMenuItemPress(item.id)}
            >
              <Text style={[styles.menuItemText, focusedItem === item.id && { color: 'white' }]}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.gopay}>
          <EmptyWallet color={'#00b3ff'} variant="Bold" size={30} style={styles.diskon}/>
          <Text style={{ 
            fontSize: 25, 
            fontWeight: 'bold', 
            color: 'black',
            marginLeft: 35,
            bottom: 33}}>
            gopay
          </Text>
          <Text style={{ 
            fontSize: 17, 
            fontWeight: 'bold', 
            color: 'black',
            marginLeft: 5,
            bottom: 25}}>
              Promo menarik dari brand populer</Text>
          <Text style={{ 
            fontSize: 15,
            color: 'black',
            marginLeft: 5,
            bottom: 25}}>
              Buat rileks atau produktif, kamu yang tentuin!</Text>
        </View>
        <View style={styles.horizontalContainer2}>
          <TouchableOpacity style={styles.boxx}>
            <View style={styles.cashback}>
              <Text style={{ 
                fontSize: 15, 
                fontWeight: 'bold', 
                color: 'white',
                padding: 10}}>
                Cashback 30%
              </Text>
            </View>
            <Image
              source={require('../../assets/GooglePlay.png')}
              style={styles.googlePlay}
            />
            <Text style={styles.text}>Google Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxx}>
            <View style={styles.cashback}>
              <Text style={{ 
                fontSize: 15, 
                fontWeight: 'bold', 
                color: 'white',
                padding: 10}}>
                Cashback 30%
              </Text>
            </View>
            <Image
                source={require('../../assets/MyTelkomsel.png')}
                style={styles.myTelkomsel}
              />
            <Text style={styles.text}>MyTelkomsel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxx}>
            <View style={styles.cashback}>
              <Text style={{ 
                fontSize: 15, 
                fontWeight: 'bold', 
                color: 'white',
                padding: 10}}>
                Cashback 30%
              </Text>
            </View>
            <Image
                source={require('../../assets/Tokopedia.png')}
                style={styles.tokopedia}
              />
            <Text style={styles.text}>Tokopedia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.plusContainer}>
          <Star1 color={'#ff0000'} variant="Bold" size={30} style={styles.star}/>
          <ElementPlus color={'#ff0000'} variant="Bold" size={30} style={styles.plus}/>
          <Text style={{ 
            fontSize: 30, 
            fontWeight: 'bold', 
            color: 'black',
            marginLeft: 65,
            bottom: 145}}>
            PLUS
          </Text>
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
export default Promo;
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
  promo:{
    padding: 20,
    color: "black",
    fontSize: 28,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    paddingTop: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    height: 100,
  },
  arrowContainer: {
    top: -15,
    alignItems: 'flex-end',
    bottom: 25,
  },
  heading: {
    top: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeading: {
    bottom: 15,
    fontSize: 16,
    fontWeight: 'normal',
    color: '#666',
  },
  count: {
    bottom: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b0b0b0',
    marginBottom: 5,
  },
  box1: {
    bottom: 15,
    margintTop: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#ff7300",
  },
  box2: {
    bottom: 15,
    margintTop: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#ff0000",
  },
  box3: {
    bottom: 15,
    margintTop: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#00b3ff",
  },
  promoContainer: {
    marginLeft: 12,
    borderRadius: 50,
    height: 50,
    width: 380,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'left',
    padding: 10,
  },
  diskon: {
    marginTop: 45,
  },
  textKode: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 40,
    bottom: 22,
  },
  arrow: {
    bottom: 45,
    marginLeft: 330,
  },
  menuItem: {
    marginLeft: 17,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    height: 45,
    width: 80,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  menuItemText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  gopay: {
    padding: 15,
    bottom: 40,
  },
  horizontalContainer2: {
    marginLeft: -15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    width: 500,
  },
  boxx: {
    marginLeft: 15,
    flex: 1,
    bottom: 70,
    alignItems: 'left',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    height: 220,
  },
  cashback:{
    height: 40,
    marginBottom: 10,
    marginLeft: -10,
    marginTop: -10,
    borderRadius: 10,
    backgroundColor: "#ff0000",
    justifyContent: 'center',
    alignItems: 'left',
  },
  text: {
    width: 120,
    height: 150,
    fontSize: 16,
    fontWeight: 'bold',
    color: "black",
  },
  googlePlay: {
    width: 90,
    height: 100,
  },
  myTelkomsel: {
    width: 100,
    height: 100,
  },
  tokopedia: {
    width: 200,
    height: 100,
  },
  plusContainer: {
    padding: 15,
  },
  star: {
    bottom: 80,
  },
  plus: {
    bottom: 109,
    marginLeft: 30,
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