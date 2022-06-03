<script lang="ts">
	export let formControl = false;
  export let checked = false;
  export let theme: string = "primary"; 
  export let text: string = "";
</script>

{#if formControl}
	<div class="">
		<label class="label justify-start cursor-pointer">
			<input type="checkbox" {checked} class="checkbox checkbox-primary" />
			<span class="label-text ml-4">{text}</span>
		</label>
	</div>
{:else}
	<input type="checkbox" {checked} class="checkbox" />
{/if}
