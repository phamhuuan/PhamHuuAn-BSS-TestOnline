import axios from 'axios';
import {User} from '../interfaces';

export const fetchUsers = async (): Promise<User[]> => {
	try {
		const res = await axios.get(
			'https://random-data-api.com/api/users/random_user?size=10',
		);
		return res.data;
	} catch {
		return [];
	}
};
