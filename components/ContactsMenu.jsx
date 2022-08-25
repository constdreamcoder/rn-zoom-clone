import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const contactsMenuButtons = [
	{
		type: 'starred',
		name: 'Starred',
	},
	{
		type: 'contact',
		name: 'Jessy The',
		photo: require('../assets/JessyThe.png'),
	},
	{
		type: 'contact',
		name: 'Nazariy Dumanskyy',
		photo: require('../assets/NazariyDumansky.png'),
	},
	{
		type: 'contact',
		name: 'Rafeh Qazi',
		photo: require('../assets/RafehQazi.png'),
	},
];

const ContactsMenu = () => {
	return (
		<View style={styles.container}>
			{contactsMenuButtons.map((contact, index) => (
				<View key={index} style={styles.row}>
					{contact.type === 'starred' ? (
						<View style={styles.starredIcon}>
							<AntDesign name="star" size={30} color="#efefef" />
						</View>
					) : (
						<Image source={contact.photo} style={styles.image} />
					)}
					<Text style={styles.text}>{contact.name}</Text>
				</View>
			))}
		</View>
	);
};

export default ContactsMenu;

const styles = StyleSheet.create({
	row: { flexDirection: 'row', marginTop: 20, alignItems: 'center' },
	starredIcon: {
		backgroundColor: '#333333',
		width: 55,
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	text: {
		color: 'white',
		paddingLeft: 15,
		fontSize: 18,
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 20,
	},
});
