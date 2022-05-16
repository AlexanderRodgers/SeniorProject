<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import dayjs from 'dayjs';
	import { Datepicker } from 'svelte-calendar';

	let startStore;
	let endStore;

	$: test = console.log($startStore);

	let start = dayjs().add(-1, 'year').toDate();
	let end = start;

	const updateBoundaries = (start) => {
		if (!endStore) return;
		endStore.setDay(start);
		endStore.set({ ...$endStore, start });
		endStore.selectDay();
	};

	$: updateBoundaries(start);

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
		<TextInput required={true} placeholder="Zip Code" label="Zip Code" type="number" />
	</div>
	<div class="px-2 pb-4">
		<TextInput required={true} placeholder="Monthly Rent" label="Monthly Rent" type="number" />
	</div>
	<div class="px-2">
		<label>Select the maximum number of Tenants allowed</label>
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
	<div class="px-2 py-4">
		<label>Specify the beginning and end of the lease</label>
		<div id="button-group" class="pt-2 btn-group">
			<Datepicker bind:selected={start} bind:store={startStore} let:key let:send let:receive>
				<button class="btn btn-active" in:receive|local={{ key }} out:send|local={{ key }}>
					{#if $startStore?.hasChosen}
						{dayjs($startStore.selected).format('ddd MMM D, YYYY')}
					{:else}
						Start Date
					{/if}
				</button>
			</Datepicker>
			<Datepicker bind:store={endStore} bind:selected={end} let:key let:send let:receive>
				<button class="btn" in:receive|local={{ key }} out:send|local={{ key }}>
					{#if $endStore?.hasChosen}
						{dayjs($endStore.selected).format('ddd MMM D, YYYY')}
					{:else}
						End Date
					{/if}
				</button>
			</Datepicker>
		</div>
	</div>
</div>
