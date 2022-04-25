<script context="module">
import About from "./about.svelte";

  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  export let title;
</script>

<h1>{title} 
</h1>