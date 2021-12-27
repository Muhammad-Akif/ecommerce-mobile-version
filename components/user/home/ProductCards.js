import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../../constants/colors';

const Card = ({ data }) => {
  const price = parseInt(Math.random() * (1000 - 200) + 200);
  const prePrice = price - parseInt(Math.random() * (100 - 80) + 80)
  return (
    <View style={styles.cardStyle}>
      <View style={styles.cardHeadingStyle}>
        <Text style={styles.cardHeadingTextStyle}>Featured Products</Text>
        <Text style={{ color: 'green' }}>
          View all &nbsp;
          <Icon name="arrow-right" size={10} color="grey" />
        </Text>
      </View>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 20 }}>
          {data?.hints?.map((item, index) => (
            <View key={item.food.foodId + index} style={styles.card}>
              <TouchableOpacity
                style={styles.button2}
              >
                <Text style={{ color: 'green', fontSize: 12 }}>20% OFF</Text>
              </TouchableOpacity>
              <Image source={{ uri: item.food.image }} style={styles.productImage} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#494949', fontWeight: '200', fontFamily: 'text-bold', fontSize: 16.5 }} adjustsFontSizeToFit={true} numberOfLines={1}>
                  {item.food.label}
                </Text>
              </View>
              <View style={styles.childViewTextStyle}>
                <Text style={{ color: 'grey', fontFamily: 'italic', fontSize: 15 }}>
                  {item.food.categoryLabel}
                </Text>
              </View>
              <Text style={{ color: colors.primary, fontWeight: '200' }}>Rs. {price} <Text style={{ textDecorationLine: 'line-through', color: '#000' }}>Rs. {prePrice}</Text> </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: colors.primary, fontFamily: 'bold' }}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const ProductCard = ({ data }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProductCard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  titleStyle: {
    padding: 16,
    fontSize: 16,
    color: colors.secondary,
    backgroundColor: '#307ecc',
  },
  cardStyle: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    marginTop: 0
  },
  card: {
    marginVertical: 10,
    marginLeft: 15,
    backgroundColor: colors.secondary,
    paddingHorizontal: 8,
    paddingTop: 2,
    elevation: 5,
    width: 150,
    borderRadius: 15,
    paddingBottom: 8
  },
  productImage: {
    width: '100%',
    height: 120,
    marginVertical: 10
  },
  button: {
    backgroundColor: colors.secondary,
    height: 30,
    borderRadius: 5,
    borderWidth: 0.8,
    marginTop: 5,
    borderColor: "gray",
    justifyContent: 'center',
    fontFamily: 'Inter_800ExtraBold',
    alignItems: 'center'
  },
  button2: {
    backgroundColor: colors.secondary,
    height: 20,
    width: 60,
    borderRadius: 5,
    fontFamily: 'Inter_800ExtraBold',
    borderWidth: 0.4,
    marginTop: 5,
    borderColor: "green",
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeadingStyle: {
    paddingHorizontal: 10,
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
