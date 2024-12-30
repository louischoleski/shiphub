
import React from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

import styles from './Tab.styled';
import { ITabComponentProps } from './Tab.controller';

const TabComponent: React.FC<ITabComponentProps> = ({
  defaultTab,
  onTabSelect,
  options = [],
}) => {
  const [width, setWidth] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);

  const translateX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const { width: dimensionWidth } = Dimensions.get('window');
    setWidth(dimensionWidth);

    // Trigger animation for defaultTab
    const defaultIndex = options.findIndex(({ key }) => key === defaultTab);
    if (defaultIndex >= 0) {
      Animated.spring(translateX, {
        toValue: defaultIndex * (dimensionWidth / options.length),
        useNativeDriver: true,
      }).start();
    }
  }, [defaultTab, options]);

  const TAB_WIDTH = React.useMemo(() => (
    width / options?.length
  ), [width, options]);

  const handleTabPress = (index: number) => {
    setActiveTab(index);

    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();

    if (onTabSelect) {
      onTabSelect(options[index].key);
    }
  };

  if (!options || !options.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={option.key}
            style={styles.tab}
            onPress={() => handleTabPress(index)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}
            >
              {option.component}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.View
        style={[
          styles.indicator,
          { width: TAB_WIDTH, transform: [{ translateX }] },
        ]}
      />
    </View>
  );
};

export default TabComponent;
