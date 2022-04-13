<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import { supabase } from '../../supabase/supabaseClient';

	let firstName: string;
	let lastName: string;
	let email: string;
	let password: string;
	let password2: string;
	let invalidCredentials = false;

	$: enableButton = firstName && lastName && email && password && password2;

	const handleSubmit = async (e) => {
		if (password === password2) {
			const { user, error } = await supabase.auth.signIn({
				email: email,
				password: password
			});
			if (user === null) {

			}
			if (error === null) {
				invalidCredentials = true;
			}
		}
	};
</script>

<h1>Sign up</h1>

<form on:submit|preventDefault={handleSubmit}>
	<div class="pt-4 px-2">
		<TextInput placeholder="Joe" label="First Name" bind:value={firstName} />
	</div>
	<div class="pt-4 px-2">
		<TextInput placeholder="Joe" label="Last Name" bind:value={lastName} />
	</div>
	<div class="pt-4 px-2">
		<TextInput placeholder="joesmith@gmail.com" label="Email" bind:value={email} />
	</div>
	<div class="pt-4 px-2">
		<TextInput placeholder="Password" label="Password *" type="password" bind:value={password} />
	</div>
	<div class="py-4 px-2">
		<TextInput
			placeholder="Password"
			label="Re-enter Password *"
			type="password"
			bind:value={password2}
		/>
	</div>
	<div class="px-2">
		<button disabled={!enableButton} type="submit" class="btn btn-primary w-full">Submit</button>
	</div>
	<div>
		<p hidden={invalidCredentials}>Invalid Credentials</p>
	</div>
</form>
