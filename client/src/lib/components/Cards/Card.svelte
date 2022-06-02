<script lang="ts">
  export let defaultStyles = "rounded inline-flex flex-col overflow-hidden duration-200 ease-in";
</script>

<div class="{defaultStyles}">
  <slot name="title"/>
  <slot name="media" />
  <slot/>
  <slot name="text"/>
  <slot name="actions"/>
</div>