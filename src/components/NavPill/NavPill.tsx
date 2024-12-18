import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

import styles from './NavPill.styled';
import { IOptions, INavPillProps } from './NavPill.controller';

const NavPill: React.FC<INavPillProps> = ({
    options = [],
    currentItem = '',
    onChange = () => {},
}) => {
    const [activeItem, setActiveItem] = React.useState('');
    const [items, setItems] = React.useState<IOptions[]>([]);

    React.useEffect(() => {
        if (!options || !options?.length) return;

        if (!currentItem || !currentItem.length) {
            const [{ key: firstKey }] = options;
            setActiveItem(firstKey);
        } else {
            setActiveItem(currentItem);
        }

        setItems(options);
    }, [currentItem, options]);

    const onItemClick = (currentItem: string) => {
        if (currentItem !== activeItem) {
            onChange(currentItem);
            setActiveItem(currentItem);
        }
    };

    return (
        <FlatList
            horizontal
            data={items}
            style={styles.listStyle}
            keyExtractor={({ key }) => key}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    onPress={() => onItemClick(item.key)}
                >
                    <Text 
                        style={[
                            styles.textStyle, 
                            activeItem === item.key && styles.active
                        ]}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavPill;