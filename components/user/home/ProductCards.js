import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import colors from '../../../constants/colors';
import { Card } from '../../Card'

const ProductCard = ({ data, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {
            data.map((item, index) => <Card key={index} item={item} isAdmin={false} navigation={navigation} />)
          }
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
});
