import 'react-native-get-random-values';

import React from 'react';
import { Provider } from 'react-redux';
// import { StatusBar } from 'expo-status-bar';
import { configureStore } from '@reduxjs/toolkit';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	MapScreen,
	LogInScreen,
	ReportScreen,
	ProfileScreen,
	WelcomeScreen,
	RegisterScreen,
	DeliveryScreen,
	DashboardScreen,
	NewPasswordScreen,
	ConfirmEmailScreen,
	NotificationScreen,
	ForgotPasswordScreen,
	DeliverySummaryScreen,
} from './src/screens';
import styles from './App.styled';
import { NavigationBar } from './src/components';
import rootReducer, { preloadedState } from './src/store';

const stackScreenOptions = {
	animation: 'none',
	headerShown: false,
}

const store = configureStore({
	preloadedState,
	reducer: rootReducer,
});

const Stack = createNativeStackNavigator();

const App = () => {
	const [currentScreen, setCurrentScreen] = React.useState('LogInScreen');

	const [behavior, keyboardVerticalOffset] = React.useMemo(() => ([
		Platform.OS === 'ios' ? 'padding' : 'height',
		Platform.OS === 'ios' ? -64 : 0
	]), [Platform.OS]);

	const onNavigationChange = (navState: any = {}) => {
		if (!navState) return;

		const currentRoute = (navState.routes || []).at(-1);

		if (currentRoute && currentScreen !== currentRoute?.name) {
			setCurrentScreen(currentRoute.name);
		}
	};

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer
					onStateChange={onNavigationChange}
				>
					<KeyboardAvoidingView
						behavior={behavior}
						style={styles.keyboardView}
						keyboardVerticalOffset={keyboardVerticalOffset}
					>
						<Stack.Navigator initialRouteName="LogInScreen">
							<Stack.Screen
								name="WelcomeScreen"
								component={WelcomeScreen}
								options={stackScreenOptions}
							/>
							{/* */}
							<Stack.Screen
								name="DashboardScreen"
								component={DashboardScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="ReportScreen"
								component={ReportScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="DeliveryScreen"
								component={DeliveryScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="DeliverySummaryScreen"
								component={DeliverySummaryScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="NotificationScreen"
								component={NotificationScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="ProfileScreen"
								component={ProfileScreen}
								options={stackScreenOptions}
							/>
							{/* */}
							<Stack.Screen
								name="MapScreen"
								component={MapScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="LogInScreen"
								component={LogInScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="RegisterScreen"
								component={RegisterScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="ForgotPasswordScreen"
								component={ForgotPasswordScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="NewPasswordScreen"
								component={NewPasswordScreen}
								options={stackScreenOptions}
							/>
							<Stack.Screen
								name="ConfirmEmailScreen"
								component={ConfirmEmailScreen}
								options={stackScreenOptions}
							/>
						</Stack.Navigator>
						<NavigationBar
							currentScreen={currentScreen}
						/>
					</KeyboardAvoidingView>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
}

export default App;
