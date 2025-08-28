import { useWindowDimensions } from "react-native"
import Animated, { useAnimatedStyle, SharedValue, withSpring } from "react-native-reanimated";

type DropdownItemType = {
    label: string;
    iconName: string;
}

type DropdownListItemProps = DropdownItemType & {
    index: number;
    dropdownItemsCount: number;
    isExpanded?: SharedValue<boolean>;
};


const DropdownListItem: React.FC<DropdownListItemProps> = ({
    label, iconName, index, isExpanded, dropdownItemsCount }) => {
    const { width: windowWidth } = useWindowDimensions();
    const dropdownListItemHeight = 80;
    const margin = 10;

    const fullDropdownHeight = dropdownItemsCount * (dropdownListItemHeight + margin);
    const collapsedTop = fullDropdownHeight / 2 - dropdownListItemHeight / 2;
    const expanedTop = (dropdownListItemHeight + margin) * index;

    const expandedScale = 1;
    const collapsedScale = 1 - index * 0.08;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            top: withSpring(isExpanded?.value ? expanedTop : collapsedTop, { damping: 15, stiffness: 150 }),
            transform: [
                {
                    scale: withSpring(isExpanded?.value ? expandedScale : collapsedScale, { damping: 15, stiffness: 150 })
                },
                {
                    translateY: fullDropdownHeight / 2
                },
            ]
        }
    })

    return (
        <Animated.View
            onTouchEnd={() => {
                isExpanded!.value = !isExpanded?.value
            }}
            style={[{
                width: windowWidth * 0.95,
                height: dropdownListItemHeight,
                backgroundColor: '#030303ff',
                borderRadius: 10,
                position: 'absolute',
            },
                animatedStyle
            ]}
        />
    )
}

export { DropdownListItem }
export type { DropdownItemType }