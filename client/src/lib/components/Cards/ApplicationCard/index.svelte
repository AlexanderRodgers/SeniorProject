<script lang="ts">
	import Card from '../Card.svelte';

	export let imageUrl =
		'https://images.unsplash.com/photo-1563720223809-b9a3d1694e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
    export let title;
    export let date;
    export let applicants: number;
</script>

<Card cardShape="rounded-xl">
	<div slot="media">
		<a href="#">
			<img
				class="w-full h-64 rounded-md pb-4 object-cover transition hover:bg-cyan-300"
				src={imageUrl}
				alt=""
			/>
		</a>
	</div>
	<div slot="title" class="pb-4">
		<h3 class="text-subheading text-slate-700">{title}</h3>
		<p class="text-sm text-slate-500">Created {date}</p>
	</div>
	<div class="space-y-4">
		<div
			class="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6"
		>
			<span id="price" class="text-slate-700 flex justify-between items-center">
				<svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
					><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
						d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
					/></svg
				>
				Background Check Required
			</span>
			<span class="text-slate-500 flex justify-between items-center select-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-3 w-3 mr-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
						clip-rule="evenodd"
					/>
				</svg>
				3 days left
			</span>
		</div>
		<div class="flex text-sm items-center">
			<div class="avatar-group -space-x-6">
				<div class="avatar">
					<div class="w-12">
						<img src="https://api.lorem.space/image/face?hash=4818" />
					</div>
				</div>
				<div class="avatar">
					<div class="w-12">
						<img src="https://api.lorem.space/image/face?hash=40311" />
					</div>
				</div>
				<div class="avatar">
					<div class="w-12">
						<img src="https://api.lorem.space/image/face?hash=84348" />
					</div>
				</div>
				<div class="avatar placeholder">
					<div class="w-12 bg-neutral-focus bg-cyan-600 text-neutral-content">
						<span>+{applicants - 3}</span>
					</div>
				</div>
			</div>
			<span class="ml-2 text-slate-500"> {applicants} Applicants </span>
		</div>
	</div>
</Card>
