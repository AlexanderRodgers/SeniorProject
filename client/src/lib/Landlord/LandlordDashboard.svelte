<script lang="ts">
import ApplicationCard from '$lib/components/Cards/ApplicationCard/index.svelte';
export let applications = [{test: 'hello'}];
</script>

{#if applications.length === 0}
  <div>
    <h2 class="text-subtitle text-primary-dark">No new Applications</h2>
  </div>
  <button class="btn btn-primary">Create Application</button>
{:else}
<div>
  <ApplicationCard/>
</div>
{/if}