import { Dimensions, Image, ImageSourcePropType } from "react-native"
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

export const storyLineItemWidth = Dimensions.get('window').width * 0.8;
export const storyLineItemHeight = (storyLineItemWidth / 3) * 2;

type StoryListItemProps = {
    imageSource: ImageSourcePropType
    index: number,
    scrollOffset: SharedValue<number>
}

export const StoryListItem: React.FC<StoryListItemProps> = ({ imageSource, index, scrollOffset }) => {
    const animatedStyle = useAnimatedStyle(() => {
        const activeIndex = scrollOffset.value / storyLineItemWidth;

        const translateX = interpolate(
            activeIndex,
            [index - 2, index - 1, index, index + 1],
            [60, 30, 0, -storyLineItemWidth],
            Extrapolation.CLAMP
        );

        return {
            transform: [{ translateX: scrollOffset.value + translateX }],
        }
    });

    return (
        <Animated.View
            style={[{
                zIndex: -index,
            },
                animatedStyle
            ]}>
            <Image
                source={imageSource}
                style={
                    {
                        height: storyLineItemHeight,
                        width: storyLineItemWidth,
                        borderRadius: 20,
                        position: 'absolute'
                    }
                }
                resizeMode="cover"
            />
        </Animated.View>
    )
}