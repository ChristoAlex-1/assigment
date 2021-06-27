import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import styles from './styles';
import { HistoryItem } from '../../types';

export type HistoryItemProps = {
	data: HistoryItem;
};

const ListHistoryItem = (props: HistoryItemProps) => {
	const { data } = props;

	const LeftContent = (props) => (
		<Image source={{ uri: data.img }} style={styles.avatar} />
	);
	return (
		<Card>
			<Card.Title
				title={data.name}
				subtitle={`Last Viewed on ${data.lastViewed}`}
				left={LeftContent}
			/>
		</Card>
	);
};

export default ListHistoryItem;
