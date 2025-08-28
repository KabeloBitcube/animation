import { useSharedValue } from "react-native-reanimated";
import { DropdownItemType, DropdownListItem } from "./drop-down-list";

type DropdownProps = {
    options: DropdownItemType[];
    header: DropdownItemType;
}

const Dropdown: React.FC<DropdownProps> = ({ options, header }) => {
    const dropdownItems = [header, ...options];
    const isExpanded= useSharedValue(false);

    return (
        <>
            {dropdownItems.map((item, index) => {
                return (
                    <DropdownListItem 
                        key={index} 
                        index={index} 
                        {...item} 
                        isExpanded={isExpanded}
                        dropdownItemsCount={dropdownItems.length}
                    />
                );
            })}
        </>
    )
};

export { Dropdown };