import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MainNavigator from './src/navigation/index';
import { Provider } from 'react-redux';
import stores from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = stores();

export default function App() {
	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			surface: '#F6F8FA',
			primary: '#2196F3',
		},
	};
	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<PersistGate loading={null} persistor={persistor}>
					<MainNavigator />
				</PersistGate>
			</PaperProvider>
		</Provider>
	);
}
