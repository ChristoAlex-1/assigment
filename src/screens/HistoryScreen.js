import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import style from '../components/ListViewItem/style';
import HistoryCard from '../components/ListHistoryItem';

const HistoryScreen = () => {
	const history = useSelector((state) => state.root.history);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				style={{ width: '100%' }}
				data={
					history.length > 0
						? history.reduce(function (prev, curr) {
								return prev.concat(curr);
						  })
						: null
				}
				renderItem={({ item }) => <HistoryCard data={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default HistoryScreen;
