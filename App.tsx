// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUsScreen from './screens/AboutUsScreen';
import DepartmentsScreen from './screens/DepartmentsScreen';
import StudentSectionScreen from './screens/StudentSectionScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="About Us" component={AboutUsScreen} />
        <Drawer.Screen name="Departments" component={DepartmentsScreen} />
        <Drawer.Screen name="Student Section" component={StudentSectionScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
