<script lang="ts">
	import { onMount } from 'svelte';

	export let label: string = '';
	export let labelUppercase = false;
	export let altLabel: string = '';
	export let altLabelUppercase = false;
	export let altLabel2: string = '';
	export let altLabelUppercase2 = false;
	export let altLabel3: string = '';
	export let altLabelUppercase3 = false;
	export let placeholder: string = '';
	export let type: 'email' | 'password' | 'text' | 'number' = 'text';
	export let value: string | number = '';
	export let width: string = "max-w-sm";
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
	<input bind:this={ref} {placeholder} bind:value class="input input-bordered w-full" />
  {#if altLabel2 || altLabel3}
	<label class="label">
		{#if altLabel2}
			<span class="label-text-alt">{altLabel2 ? altLabel2.toUpperCase() : altLabel2}</span>
		{/if}
		{#if altLabel3}
			<span class="label-text-alt">{altLabel3 ? altLabel3.toUpperCase() : altLabel3}</span>
		{/if}
	</label>
  {/if}
</div>
