<script lang="ts">
	import { onMount } from 'svelte';
	import { attachRipple } from '../../../utils/createRipple';
	export let backgroundColor: string = 'bg-primary';
	export let textColor: string = 'text-white';
	export let ripple = true;
	export let outline = false;
	export let width: string = 'w-full';
	export let margin: string = 'm-0';
	let button = null;

	if (ripple) {
		onMount(async () => {
			button.addEventListener('click', attachRipple);
		});
	}
</script>

{#if !outline}
	<button
		bind:this={button}
		class="{c} {backgroundColor} relative overflow-hidden text-white py-2 px-3 rounded btn-text"
	>
		<slot />
	</button>
{:else}
	<button
		bind:this={button}
		class="{c} relative overflow-hidden text-primary py-2 px-3 rounded btn-text border border-primary"
	>
		<slot />
	</button>
{/if}
