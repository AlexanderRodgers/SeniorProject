<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import Checkbox from '$lib/components/Checkbox/index.svelte';
	import dayjs from 'dayjs';
	import { Datepicker } from 'svelte-calendar';

	let startStore;
	let endStore;

	let start = new Date();
	let end = dayjs().add(1, 'year').toDate();

	const updateBoundaries = (start) => {
		if (!endStore) return;
		endStore.setDay(start);
		endStore.set({ ...$endStore, start });
		endStore.selectDay();
	};

	$: updateBoundaries(start);

	let maxTenantsArr = Array.from({ length: 8 }, (_, i) => i + 1);

	let address: string = '';
	let city: string = '';
	let zipcode: string = '';
	let monthlyRent: number = null;
	let maxTenants: number = 1;
	let backgroundCheck = false;
	let creditCheck = false;

	const onSubmit = () => {
		
	};
</script>

<h1 class="py-8 text-heading">Create a Listing</h1>

<div class="px-2" />

<form on:submit|preventDefault={onSubmit}>
	<div class="px-2">
		<div class="px-2">
			<TextInput required={true} placeholder="Address" label="Property Address" />
		</div>
		<div class="px-2">
			<TextInput required={true} placeholder="City" label="City" />
		</div>
		<div class="px-2">
			<TextInput
				minLength={5}
				maxLength={5}
				pattern="[0-9]{5}"
				required={true}
				placeholder="Zip Code"
				label="Zip Code"
			/>
		</div>
		<div class="px-2 pb-4">
			<TextInput required={true} placeholder="Monthly Rent" label="Monthly Rent" type="number" />
		</div>
		<div class="px-2">
			<label>Select the maximum number of Tenants allowed</label>
			<select
				bind:value={maxTenants}
				on:change={() => {}}
				class="select select-primary w-full max-w-xs"
			>
				<option disabled selected>Maximum Number of Tenants</option>
				{#each maxTenantsArr as val}
					<option value={val}>{val}</option>
				{/each}
			</select>
		</div>
		<div class="px-2 py-4">
			<label>Specify the beginning and end of the lease</label>
			<div id="button-group" class="pt-2 btn-group">
				<Datepicker bind:selected={start} bind:store={startStore} let:key let:send let:receive>
					<button
						class="btn btn-active btn-primary"
						in:receive|local={{ key }}
						out:send|local={{ key }}
					>
						{#if $startStore?.hasChosen}
							{dayjs($startStore.selected).format('ddd MMM D, YYYY')}
						{:else}
							Start Date
						{/if}
					</button>
				</Datepicker>
				<Datepicker bind:store={endStore} bind:selected={end} let:key let:send let:receive>
					<button class="btn btn-primary" in:receive|local={{ key }} out:send|local={{ key }}>
						{#if $endStore?.hasChosen}
							{dayjs($endStore.selected).format('ddd MMM D, YYYY')}
						{:else}
							End Date
						{/if}
					</button>
				</Datepicker>
			</div>
		</div>
		<div class="px-2">
			<Checkbox checked={backgroundCheck} formControl text="Require Background Check" />
			<Checkbox checked={creditCheck} formControl text="Require Credit Check" />
		</div>
		<div class="px-2">
			<button class="btn btn-primary w-full" type="submit">Submit</button>
		</div>
	</div>
</form>
