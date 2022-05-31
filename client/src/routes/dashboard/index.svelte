<!-- <script lang="ts" context="module">
	import { browser } from '$app/env';
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
			if (error && status !== 406) throw error;
			return { data, error };
		} catch (error) {
			return { data: null, error };
		} finally {
			loading = false;
		}
	}

	export async function load({ params, fetch, session, stuff }) {
		if (browser) {
			const { data, error } = await getUserData();
			if (error) {
				return {
					status: 302,
					redirect: '/login'
				};
			}
			return {
				status: 200,
				props: {
					data
				}
			};
		}
		return {
			status: 200,
			props: {
				data: null
			}
		}
	}
</script> -->

<script lang="ts">
	import LandlordDashboard from '$lib/Landlord/LandlordDashboard.svelte';
import TenantDashboard from '$lib/Tenant/TenantDashboard.svelte';
import { User } from '../../types/User';
	export let userType: User = User.Tenant;
</script>

{#if userType === User.Tenant}
<TenantDashboard/>
{:else}
<LandlordDashboard/>
{/if}
