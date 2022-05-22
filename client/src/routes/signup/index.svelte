<script lang="ts">
	import { onMount } from 'svelte/internal';
	import TextInput from '$lib/components/TextInput.svelte';
	import { supabase } from '../../supabase/supabaseClient';
	import { User } from '../../types/User';
	import { onSubmit } from './form';
	import { attachRipple } from '../../utils/createRipple';
	import { Datepicker } from 'svelte-calendar';
	import dayjs from 'dayjs';

	let datestore;

	let landlordSelectionButton = null;

	let firstName: string;
	let lastName: string;
	let email: string;
	let password: string;
	let password2: string;
	let invalidCredentials = false;
	let errorDetails: string = '';
	let userType: User;
	let done = false;
	let zipCode: string = '';

	onMount(async () => {
		landlordSelectionButton.addEventListener('click', attachRipple);
	});

	let currentStep = 'step step-primary';
	let nextStep = 'step';

	let step = 0;

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

<h1 class="text-heading text-primary my-5">Sign up</h1>

<ul class="steps steps-horizontal lg:steps-horizontal">
	<li class={step >= 0 ? currentStep : nextStep}>Fill out details</li>
	<li class={step >= 1 ? currentStep : nextStep}>Who you are</li>
	<li class={step >= 2 ? currentStep : nextStep}>Add some details</li>
</ul>

<form on:submit|preventDefault={onSubmit}>
	{#if step === 0}
		<div class="pt-4 px-2">
			<TextInput required={true} placeholder="Joe" label="First Name" bind:value={firstName} />
		</div>
		<div class="pt-4 px-2">
			<TextInput required={true} placeholder="Joe" label="Last Name" bind:value={lastName} />
		</div>
		<div class="pt-4 px-2">
			<TextInput
				required={true}
				placeholder="joesmith@gmail.com"
				label="Email"
				bind:value={email}
			/>
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
		<div class="pt-4 px-2 pb-4">
			<TextInput
				required={true}
				placeholder="Password"
				label="Re-enter Password *"
				type="password"
				bind:value={password2}
			/>
		</div>
		<div class="px-2">
			<button
				type="button"
				hidden={!nextSection}
				on:click={() => step++}
				class="btn btn-primary w-full">Continue</button
			>
		</div>
	{:else if step === 1}
		<h1 class="text-subheading text-primary py-3">Select Your Account</h1>
		<div
			on:click={() => {
				userType = User.Landlord;
				step++;
			}}
			class="aspect-video card bg-base-100 shadow-xl mb-3 cursor"
		>
			<div class="relative">
				<p class="absolute left-1/2 top-2 -translate-x-1/2 text-leading text-primary-dark">
					Landlord
				</p>
			</div>
			<div class="p-4 border-2">
				<figure><img src="/landlord_image.svg" alt="Landlord Image" /></figure>
			</div>
		</div>
		<div
			on:click={() => {
				userType = User.Tenant;
				step++;
			}}
			class="aspect-video card bg-base-100 shadow-xl cursor-pointer"
		>
			<div class="relative">
				<p class="absolute left-1/2 top-2 -translate-x-1/2 text-leading text-primary-dark">
					Tenant
				</p>
			</div>
			<div class="p-4 border-2">
				<figure><img src="/build_home.svg" alt="Tenant searching" class="object-cover" /></figure>
			</div>
		</div>
	{/if}
	{#if userType === User.Landlord && step === 2}
		<div>Hello!</div>
	{/if}
	{#if userType === User.Tenant && step === 2}
		<div class="px-2">
			<TextInput
				minLength={5}
				maxLength={5}
				pattern="[0-9]{5}"
				placeholder="Current Zip Code"
				label="Current Zip Code"
				bind:value={zipCode}
			/>
		</div>
		<div class="px-2">
			<TextInput
				type="tel"
				label="Phone number"
				placeholder="555-555-5555"
				name="phone"
				pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			/>
		</div>
		<div class="px-2 py-4">
			<label>Enter your date of Birth.</label>
			<div class="pt-2">
				<Datepicker bind:store={datestore} />
			</div>
		</div>
	{/if}

	<div hidden={step !== 2} class="px-2">
		<button disabled={!done} type="submit" class="btn btn-primary w-full">Submit</button>
	</div>
	<div>
		<p class="px-2" hidden={!invalidCredentials}>{errorDetails}</p>
	</div>
</form>
