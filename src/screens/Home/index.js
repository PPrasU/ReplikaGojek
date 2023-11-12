import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { User, SearchNormal, Wallet, ArrowUp, Clock, Category, CloseCircle, Star1, Home, Car, Cake, Briefcase, ShoppingCart, Airpod, Bill, } from 'iconsax-react-native';

const HomePage = () => {
  const [focusedIcon, setFocusedIcon] = useState(null);
  const handleIconPress = (iconName) => {
    setFocusedIcon(iconName);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <SearchNormal color="black" variant="Linear" style={styles.SearchNormal} />
          <TextInput
            placeholder="Cari Layanan, Tujuan, & Makanan"
            placeholderTextColor="black"
            style={styles.input}
          />
        </View>
        <View style={styles.userIcon}>
          <View style={styles.userCircle}>
            <User size={30} color="green" variant="Bold" />
          </View>
        </View>
      </View>
      <Image
        source={require('../../assets/Sprite.png')}
        style={styles.headerImage}
      />
      <View style={styles.Wallet}>
        <Wallet color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: 1 }} />
        <View style={styles.walletItem1}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold', color: 'black' }}>Rp200.584 </Text>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>0 Coins </Text>
        </View>
        <View style={styles.walletItem}>
          <ArrowUp color={'#279EFF'} variant="Bold" size={25} />
          <Text style={styles.walletItemText}>Bayar</Text>
        </View>
        <View style={styles.walletItem}>
          <Clock color={'#279EFF'} variant="Bold" size={25} />
          <Text style={styles.walletItemText}>Riwayat</Text>
        </View>
        <View style={styles.walletItem}>
          <Category color={'#279EFF'} variant="Bold" size={25} />
          <Text style={styles.walletItemText}>Lainnya</Text>
        </View>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.iconRow}>
          <View style={[styles.iconContainer]}>
            <Category color="black" variant="Linear" size={50} style={{backgroundColor: '#dbface'}} />
            <Text style={styles.iconText}>GoRide</Text>
          </View>
          <View style={[styles.iconContainer]}>
            <Car color="black" variant="Linear" size={50} style={{backgroundColor: '#dbface'}} />
            <Text style={styles.iconText}>GoCar</Text>
          </View>
          <View style={[styles.iconContainer]}>
            <Cake color="black" variant="Linear" size={50} style={{backgroundColor: '#ffe0de'}} />
            <Text style={styles.iconText}>GoFood</Text>
          </View>
          <View style={[styles.iconContainer]}>
            <Briefcase color="black" variant="Linear" size={50} style={{backgroundColor: '#dbface'}} />
            <Text style={styles.iconText}>GoSend</Text>
          </View>
        </View>
        <View style={styles.iconRow}>
          <View style={[styles.iconContainer]}>
            <ShoppingCart color="black" variant="Linear" size={50} style={{backgroundColor: '#ffe0de'}} />
            <Text style={styles.iconText}>GoMart</Text>
          </View>
          <View style={[styles.iconContainer]}>
            <Bill color="black" variant="Linear" size={50} style={{backgroundColor: '#caf5fc'}} />
            <Text style={styles.iconText}>GoBill</Text>
          </View>
          <View style={[styles.iconContainer]}>
            <Airpod color="black" variant="Linear" size={50} style={{backgroundColor: '#ffe0de'}} />
            <Text style={styles.iconText}>GoShop</Text>
          </View>
          <View style={[styles.iconContainer]}>
            <Category color="black" variant="Linear" size={50} style={{backgroundColor: '#dbface'}} />
            <Text style={styles.iconText}>Lainnya</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Kasih rating dulu, yuk!</Text>
        <View style={styles.contentBox}>
          <Car color={'green'} variant="Bold" size={22} style={styles.car}/>
          <Text style={styles.driverName}>gocar</Text>
          <CloseCircle color={'green'} variant="Bold" size={23} style={styles.closeIcon} />
          <Image
            source={require('../../assets/Driver.png')}
            style={styles.driverImage}
          />
          <Text style={styles.ratingPrompt}>Kasih rating ke driver?</Text>
          <Text style={styles.storeName}>Diomino's Pizza - Dinoyo Malang</Text>
          <Text style={styles.dateTime}>08 Okt 19:27</Text>
          <View style={styles.starContainer}>
            <Star1 style={styles.star} size={28} variant="TwoTone" color='#9BA4B5' />
            <Star1 style={styles.star1} size={28} variant="TwoTone" color='#9BA4B5' />
            <Star1 style={styles.star2} size={28} variant="TwoTone" color='#9BA4B5' />
            <Star1 style={styles.star3} size={28} variant="TwoTone" color='#9BA4B5' />
            <Star1 style={styles.star4} size={28} variant="TwoTone" color='#9BA4B5' />
          </View>
        </View>
      </View>
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
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchBar: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SearchNormal: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  userIcon: {
    marginRight: 10,
  },
  userCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    padding: 5,
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  Wallet: {
    position: 'absolute',
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 15,
    height: 55,
    borderRadius: 30,
    width: 390,
    bottom: 520,
  },
  walletItem1: {
    marginLeft: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    paddingRight: 100,
  },
  walletItem: {
    marginLeft: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  walletItemText: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  headerImage: {
    width: 412,
    height: 200,
  },
  content: {
    flex: 1,
    alignItems: 'left',
  },
  contentTitle: {
    marginTop: 1,
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: 19,
    color: 'black',
  },
  contentBox: {
    flex: 1,
    margin: 5,
    position: 'absolute',
    top: 35,
    left: 15,
    paddingHorizontal: 18,
    elevation: 3,
    width: '90%',
    height: '70%',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  car: {
    bottom: -9,
  },
  driverName: {
    marginHorizontal: '9%',
    bottom: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  closeIcon: {
    position: 'absolute',
    right: '5%',
    top: '5%',
  },
  driverImage: {
    top: '3%',
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  ratingPrompt: {
    marginHorizontal: '27%',
    bottom: 22,
    fontWeight: 'bold',
    fontSize: 15,
    width: 300,
    top: '-42%',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
  },
  storeName: {
    marginHorizontal: '27%',
    bottom: 22,
    fontWeight: 'normal',
    fontSize: 15,
    width: 300,
    top: '-42%',
    color: '#333333',
    fontSize: 14,
  },
  dateTime: {
    marginHorizontal: '27%',
    bottom: 22,
    fontWeight: 'normal',
    fontSize: 15,
    width: 300,
    top: '-42%',
    color: '#333333',
    fontSize: 14,
  },
  starContainer: {
    marginHorizontal: '27%',
    bottom: 65,
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: 2,
  },
  star1: {
    marginHorizontal: 2,
  },
  star2: {
    marginHorizontal: 2,
  },
  star3: {
    marginHorizontal: 2,
  },
  star4: {
    marginHorizontal: 2,
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