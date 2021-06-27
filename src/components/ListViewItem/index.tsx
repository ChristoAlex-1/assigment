import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { ListItem } from '../../types';
import styles from './style';

export type ListItemProps = {
	data: ListItem;
};

import { useNavigation } from '@react-navigation/native';

const ListViewItem = (props: ListItemProps) => {
	const { data } = props;
	const navigation = useNavigation();

	const onClick = () => {
		navigation.navigate('Details', { detail: data });
	};

	return (
		<TouchableWithoutFeedback onPress={onClick}>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<Image source={{ uri: data.img }} style={styles.avatar} />

					<View style={styles.midContainer}>
						<Text style={styles.username}>{data.name}</Text>
						<Text numberOfLines={1} style={{ width: 250 }}>
							{data.occupation}
						</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ListViewItem;
