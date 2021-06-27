import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setHistory } from '../store/action';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const DetailsScreen = () => {
	const dispatch = useDispatch();
	const route = useRoute();
	const detail = route.params.detail;

	useEffect(() => {
		dispatch(setHistory(detail));
	}, []);

	return (
		<View style={styles.container}>
			<Card>
				<Card.Content>
					<Title>{detail.name}</Title>
					<Paragraph>Occupation: {detail.occupation}</Paragraph>
					<Paragraph>Status: {detail.status}</Paragraph>
					<Paragraph>Nickname: {detail.nickname}</Paragraph>
					<Paragraph>Appearance: {detail.appearance}</Paragraph>
					<Paragraph>Portrayed: {detail.portrayed}</Paragraph>
					<Paragraph>Category: {detail.category}</Paragraph>
				</Card.Content>
				<Card.Cover source={{ uri: detail.img }} style={styles.imageView} />
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
	},
	imageView: {
		height: 300,
		width: 300,
	},
});

export default DetailsScreen;
