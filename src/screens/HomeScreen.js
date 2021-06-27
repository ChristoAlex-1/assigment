import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	FlatList,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getData, searchData } from '../store/action';
import ListViewItem from '../components/ListViewItem';
import { Toolbar } from 'react-native-material-ui';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const [pageLimit, setPageLimit] = useState(10);
	const [refreshing, setRefreshing] = useState(false);
	const data = useSelector((state) => state.root.data);

	useEffect(() => {
		setRefreshing(true);
		dispatch(getData(pageLimit));
		setInterval(function () {
			setRefreshing(false);
		}, 2000);
	}, [pageLimit]);

	const fetchData = async (text) => {
		await dispatch(searchData(text));
	};

	const onScrollHandler = async () => {
		setPageLimit(pageLimit + 10);
	};

	renderFooter = () => {
		try {
			if (refreshing) {
				return <ActivityIndicator size='small' color='#0000ff' />;
			} else {
				return null;
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Toolbar
				style={{
					container: {
						backgroundColor: '#000',
						height: 70,
					},
				}}
				centerElement='Home'
				searchable={{
					placeholder: 'Search by name',
					onChangeText: (text) => fetchData(text),
					onSearchClosed: () => console.log(''),
				}}
			/>
			<FlatList
				style={{ width: '100%' }}
				data={data}
				renderItem={({ item }) => <ListViewItem data={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				onRefresh={() => setPageLimit(10)}
				refreshing={refreshing}
				onEndReached={() => onScrollHandler()}
				onEndReachedThreshold={0.5}
				ListFooterComponent={() => renderFooter()}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
