<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';

	let address: string = '';
	let city: string = '';
</script>

<div class="px-2">
	<div class="px-2">
		<TextInput required={true} placeholder="Address" label="Property Address" />
	</div>
	<div class="px-2">
		<TextInput required={true} placeholder="City" label="City" />
	</div>
	<div class="px-2">
		<TextInput required={true} placeholder="City" label="City" type="number" />
	</div>
	<div class="px-2 pb-4">
		<TextInput required={true} placeholder="Monthly Rent" label="Monthly Rent" type="number" />
	</div>
	<div class="px-2">
		<select class="select select-primary w-full max-w-xs">
			<option disabled selected>Maximum Number of Tenants</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>5+</option>
		</select>
	</div>
</div>
