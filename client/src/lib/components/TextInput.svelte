<script lang="ts">
	import { onMount } from 'svelte';
	import type { ValidatorFn } from '../components/Form/Validators';
	import Icon from '$lib/components/Icon.svelte';

	export let label: string = '';
	export let labelUppercase = false;
	export let altLabel: string = '';
	export let altLabelUppercase = false;
	export let altLabel2: string = '';
	export let altLabelUppercase2 = false;
	export let altLabel3: string = '';
	export let altLabelUppercase3 = false;
	export let placeholder: string = '';
	export let type: 'email' | 'password' | 'text' | 'number' | 'tel' = 'text';
	export let value: string | number = '';
	export let width: string = 'max-w-sm';
	export let required = false;
	export let rules: ValidatorFn[] = null;
	export let icon: string = '';
	export let theme: string = 'primary';
	export let pattern: string = null;
	export let minLength: number = null;
	export let maxLength: number = null;
	export let name: string = '';
	let ref: HTMLInputElement;

	onMount(() => {
		if (ref) {
			ref.type = type;
		}
	});
</script>

<div class="form-control w-full {width}">
	{#if altLabel || label}
		<label aria-label={label ?? 'text-input'} class="label">
			{#if label}
				<span class="label-text">{labelUppercase ? label.toUpperCase() : label}</span>
			{/if}
			{#if altLabel}
				<span class="label-text-alt">{altLabelUppercase ? altLabel.toUpperCase() : altLabel}</span>
			{/if}
		</label>
	{/if}
	<div class="relative w-full inline-flex flex-wrap items-stretch">
		<span
			class="z-10 h-full absolute align-middle text-center bg-transparent rounded text-base items-center justify-center w-8 pl-3"
		>
			{#if icon}
				<Icon color="text-gray-700">{icon}</Icon>
			{/if}
		</span>
		<input
			{name}
			{minLength}
			{maxLength}
			{pattern}
			bind:this={ref}
			{placeholder}
			bind:value
			class="input input-{theme} input-bordered w-full"
			{required}
			data-validators={rules}
		/>
	</div>

	{#if altLabel2 || altLabel3}
		<label class="label">
			{#if altLabel2}
				<span class="label-text-alt">{altLabelUppercase2 ? altLabel2.toUpperCase() : altLabel2}</span>
			{/if}
			{#if altLabel3}
				<span class="label-text-alt">{altLabelUppercase3 ? altLabel3.toUpperCase() : altLabel3}</span>
			{/if}
		</label>
	{/if}
</div>
