<script lang="ts" context="module">
	import { supabase } from '../../supabase/supabaseClient';

	let loading = true;

	async function getUserData() {
		try {
			loading = true;
			const user = supabase.auth.user();
			let { data, error, status } = await supabase
				.from('User')
				.select()
				.eq('user', user.id)
				.single();
			if (error && status !== 406)
				return {
					status: 302,
					redirect: '/login'
				};
			if (data) {
				return data;
			}
		} catch (error) {
			return {
				status: 302,
				redirect: '/login'
			};
		} finally {
			loading = false;
		}
	}

	export async function load({ params, fetch, session, stuff }) {
		let userData;
		try {
			userData = await getUserData();
		} catch (error) {
			console.log(error);
		}
		return {
			status: 200,
			props: {
				userData
			}
		};
	}
</script>

<script lang="ts">
	export let userData;
	console.log(userData);
</script>

<div>Hello.</div>
