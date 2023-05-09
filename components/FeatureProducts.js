import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeaturedRow from './FeaturedRow'
import FeaturedRow1 from './FeaturedRow1'
import FeaturedRow2 from './FeaturedRow2'

const FeatureProducts = () => {
  return (
   <View className="">
       <FeaturedRow id="1" title="Best Restaurant Near You" />
       <FeaturedRow1 id="2" title="Trending Fast Foods" />
       <FeaturedRow2 id="3" title="Available FoodTrucks and Mother-Bet's" />
   </View>
  )
}

export default FeatureProducts