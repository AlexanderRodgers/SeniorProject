<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import { supabase } from '../../supabase/supabaseClient';
	import { User } from '../../types/User';
	import { onSubmit } from './form';
	import { Validators } from '$lib/components/Form/Validators';
	import type { Form } from '../../types/Form';
	import Picker from './Picker.svelte';

	let firstName: string;
	let lastName: string;
	let email: string;
	let password: string;
	let password2: string;
	let invalidCredentials = false;
	let errorDetails: string = '';
	let toUserSection = false;
	let userType: User;
	let done = false;
	
	let form: Form = {
		email: {
			validators: [Validators.requiredInput],
		}
	};

	$: enableButton = !!(firstName && lastName && email && password && password2);
	$: nextSection = enableButton && password === password2;

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
			console.log({ user, error });
		}
	};
</script>

<h1>Sign up</h1>

<ul class="steps steps-horizontal lg:steps-horizontal">
	<li class="step step-primary">Fill out details</li>
	<li class="step">Who you are</li>
	<li class="step">Add some details</li>
</ul>

<form on:submit|preventDefault={onSubmit}>
	<div class="pt-4 px-2">
		<TextInput rules={[Validators.requiredInput]} required={true} placeholder="Joe" label="First Name" bind:value={firstName} />
	</div>
	<div class="pt-4 px-2">
		<TextInput required={true} placeholder="Joe" label="Last Name" bind:value={lastName} />
	</div>
	<div class="pt-4 px-2">
		<TextInput required={true} placeholder="joesmith@gmail.com" label="Email" bind:value={email} />
	</div>
	<div class="pt-4 px-2">
		<TextInput
			required={true}
			placeholder="Password"
			label="Password *"
			type="password"
			bind:value={password}
		/>
	</div>
	<div class="pt-4 px-2">
		<TextInput
			required={true}
			placeholder="Password"
			label="Re-enter Password *"
			type="password"
			bind:value={password2}
		/>
	</div>
	<div class="px-2">
		<h2>Are you a tenant or a landlord? *</h2>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">Tenant</span>
				<input
					required={true}
					type="radio"
					name="radioTenant"
					class="radio checked:bg-red-500"
					bind:group={userType}
					value={User.Tenant}
					checked
				/>
			</label>
		</div>
		<div class="form-control">
			<label class="label cursor-pointer">
				<span class="label-text">Landlord</span>
				<input
					type="radio"
					name="radioLandlord"
					class="radio checked:bg-red-500"
					checked
					bind:group={userType}
					value={User.Landlord}
				/>
			</label>
		</div>
	</div>
	<div class="px-2">
		<button
			hidden={!nextSection}
			on:click={() => {
				toUserSection = true;
			}}
			class="btn btn-primary w-full">Continue</button
		>
	</div>
	{#if toUserSection}
		<Picker />
	{/if}

	<div hidden={!done} class="px-2">
		<button disabled={!done} type="submit" class="btn btn-primary w-full">Submit</button>
	</div>
	<div>
		<p class="px-2" hidden={!invalidCredentials}>{errorDetails}</p>
	</div>
</form>
