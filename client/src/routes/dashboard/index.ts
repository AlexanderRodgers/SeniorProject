import { supabase } from '../../supabase/supabaseClient';

export async function get({ request }) {
	async function getUserData() {
		try {
			const user = supabase.auth.api.getUserByCookie(request);
      console.log(user);
			const { data, error, status } = await supabase
				.from('User')
				.select()
				.eq('user', user.id)
				.single();
			if (error && status !== 406) throw error;
			return { data, error };
		} catch (error) {
			return { data: null, error };
		}
	}

	const load = async () => {
		const { data, error } = await getUserData();
		if (error) {
			return {
				status: 302,
				redirect: '/login'
			};
		}
		return {
			status: 200,
      body: {
        data
      }
		};
	};

	return await load();
}
