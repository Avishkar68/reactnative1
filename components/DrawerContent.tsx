// DrawerContent.tsx
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent: React.FC<any> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="About Us" onPress={() => props.navigation.navigate('About Us')} />
      <DrawerItem label="Departments" onPress={() => props.navigation.navigate('Departments')} />
      <DrawerItem label="Student Section" onPress={() => props.navigation.navigate('Student Section')} />
      <DrawerItem label="Contact Us" onPress={() => props.navigation.navigate('Contact Us')} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
