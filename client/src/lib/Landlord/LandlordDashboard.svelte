<script lang="ts">
	import ApplicationCard from '$lib/components/Cards/ApplicationCard/index.svelte';
	export let applications = [{ test: 'hello' }];
	let imageUrl =
		'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
</script>

{#if applications.length === 0}
	<div>
		<h2 class="text-subtitle text-primary-dark">No new Applications</h2>
	</div>
	<button class="btn btn-primary">Create Application</button>
{:else}
	<div>
		<div class="pt-4">
			<h2 class="text-subheading text-slate-700">Applications</h2>
		</div>
		<div class="mb-2">
			<ApplicationCard title="870 Islay St." date="May 2nd, 2022" applicants={17} />
		</div>
		<ApplicationCard {imageUrl} title="1 Grand Ave." date="May 23rd, 2022" applicants={5} />
		<!-- <ApplicationCard/> -->
	</div>
{/if}
