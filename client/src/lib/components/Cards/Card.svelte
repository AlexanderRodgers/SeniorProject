<script lang="ts">
	export let defaultStyles = 'overflow-hidden duration-200 ease-in';
	export let cardShadow = 'shadow-lg';
	export let cardPadding = 'p-4';
	export let cardShape = 'rounded';
	export let cardLayout = 'inline-flex';
	export let cardDirection = 'flex-col';
	export let cardWidth = 'w-full';
</script>

<div
	class="{defaultStyles} {cardWidth} {cardShadow} {cardPadding} {cardShape} {cardLayout} {cardDirection}"
>
	<slot name="media" />
	<slot name="title" />
	<slot />
	<slot name="text" />
	<slot name="actions" />
</div>
