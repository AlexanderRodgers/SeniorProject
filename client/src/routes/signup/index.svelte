<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import { supabase } from '../../supabase/supabaseClient';

	let firstName: string;
	let lastName: string;
	let email: string;
	let password: string;
	let password2: string;
	let invalidCredentials = false;
	let errorDetails: string = '';

	$: enableButton = firstName && lastName && email && password && password2;

	const handleSubmit = async (e) => {
		if (password === password2) {
			const { user, error } = await supabase.auth.signUp({
				email: email,
				password: password
			});
			if (user !== null) {

			}
			if (error !== null) {
				if (error.status === 400) {
					invalidCredentials = true;
					errorDetails = error.message;	
				}
			}
			console.log({ user, error })
		}
	};
</script>

<h1>Sign up</h1>

<ul class="steps steps-horizontal lg:steps-horizontal">
  <li class="step step-primary">Fill out details</li>
  <li class="step">Who you are</li>
  <li class="step">Add some details</li>
</ul>

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
		<p class ="px-2" hidden={!invalidCredentials}>{errorDetails}</p>
	</div>
</form>
