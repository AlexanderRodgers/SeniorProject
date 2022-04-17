<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import { supabase } from '../../supabase/supabaseClient';

	let email: string;
	let password: string;
	let creationError = false;

	$: enableButton = !!email && !!password;

	const createAccount = async () => {
		const { user, error } = await supabase.auth.signIn({
			email,
			password
		});
		if (user === null) {
		}
		if (error === null) {
			creationError = true;
		}
    console.log({ user, error });
	};
</script>

<h1>Log In</h1>

<div class="max-w-sm">
	<form on:submit|preventDefault={createAccount}>
		<div class="pt-4 px-2">
			<TextInput placeholder="yourname@gmail.com" label="Email" bind:value={email} />
		</div>
		<div class="pt-4 pb-2 px-2">
			<TextInput type="password" placeholder="Password" label="Password" bind:value={password} />
		</div>
		<div class="px-2">
			<button disabled={!enableButton} type="submit" class="btn btn-primary w-full">Submit</button>
		</div>
		<div>
			<p hidden={creationError}>Error Creating your account</p>
		</div>
	</form>
</div>
