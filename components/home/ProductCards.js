import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const App = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.titleStyle}>Get 20% off in yout First Shop at Store</Text> */}
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <SingleRow data={data} />
          <SingleRow data={data} />
          <SingleRow data={data} />
          <SingleRow data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;

const SingleRow = ({ data }) => {

  const price = parseInt(Math.random() * (1000 - 200) + 200);
  const prePrice = price - parseInt(Math.random() * (100 - 80) + 80)
  return (
    <View style={styles.cardStyle}>
      <View style={styles.cardHeadingStyle}>
        <Text style={styles.cardHeadingTextStyle}>Featured Products</Text>
        <Text style={{ color: 'green' }} onPress={() => alert('MORE')}>
          View all &nbsp;
          <Icon name="arrow-right" size={10} color="grey" />
        </Text>
      </View>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data?.hints?.map((item) => (
            <View key={item.food.foodId} style={styles.card}>
              <TouchableOpacity
                style={styles.button2}
              >
                <Text style={{ color: 'green', fontSize: 12 }}>20% OFF</Text>
              </TouchableOpacity>
              <Image
                source={{
                  uri: item.food.image,
                }}
                style={styles.productImage}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{ color: '#494949', fontWeight: '200' }}
                  onPress={() => {
                    alert('Title ' + item.title + ' Clicked');
                  }}>
                  {item.food.label}
                </Text>
                {/* <Text style={{ color: '#228B22' }}>&#8942;</Text> */}
              </View>
              <View style={styles.childViewTextStyle}>
                <Text style={{ color: '#606070', fontWeight: '200' }}>
                  {item.food.categoryLabel}
                </Text>
              </View>
              <Text style={{ color: '#5956E9', fontWeight: '200' }}>Rs. {price} <Text style={{ textDecorationLine: 'line-through', color: '#000' }}>Rs. {prePrice}</Text> </Text>

              <TouchableOpacity
                style={styles.button}
              >
                <Text style={{ color: '#5956E9' }}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    padding: 16,
    fontSize: 16,
    color: 'white',
    backgroundColor: '#307ecc',
  },
  cardStyle: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingTop: 2,
    elevation: 5,
    width: 150,
    borderRadius: 15,

    paddingBottom: 0
  },
  productImage: {
    width: '100%',
    height: 120,
    marginVertical: 10
  },
  button: {
    backgroundColor: 'white',
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 5,
    borderColor: "gray",
    justifyContent: 'center',
    fontFamily: 'Inter_800ExtraBold',
    alignItems: 'center'
  },
  button2: {
    backgroundColor: 'white',
    height: 20,
    width: 60,
    borderRadius: 5,
    fontFamily: 'Inter_800ExtraBold',
    borderWidth: 1,
    marginTop: 5,
    borderColor: "gray",
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeadingStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeadingTextStyle: {
    color: '#606070',
    fontSize: 16,
    fontWeight: 'bold',
  },
  childViewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
