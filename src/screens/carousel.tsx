import { StyleSheet, View } from "react-native";
import { storyLineItemHeight, storyLineItemWidth, StoryListItem } from '../components/image-list';
import Animated, { useAnimatedRef, useScrollOffset } from 'react-native-reanimated';
import { Stories } from '../constants/constants';

export default function Carousel() {
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(animatedRef);

  return (
    <View style={styles.container}>
      <View style={{
        height: storyLineItemHeight,
        width: '100%'
      }}
      >
        <Animated.ScrollView
          ref={animatedRef}
          horizontal
          decelerationRate={'fast'}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: storyLineItemWidth * Stories.length,
          }}
        >
          {Stories.map((story, index) => {
            return <StoryListItem
              key={index}
              imageSource={story.image}
              index={index}
              scrollOffset={scrollOffset}
            />
          })}
        </Animated.ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
})