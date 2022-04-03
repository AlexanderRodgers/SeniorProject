<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';

	let firstName: string;
	let lastName: string;
	let email: string;
	let password: string;
	let password2: string;

  const handleSubmit = (e) => {
    console.log(e)
    const formData: FormData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data);
  }

	const testSubmit = () => {
		console.log('Hello!');
	};
</script>

<h1>Sign up</h1>

<form on:submit|preventDefault={handleSubmit}>
	<div class="pt-4 px-2">
		<TextInput placeholder="Joe" label="First Name" bind:value={firstName}/>
	</div>
	<div class="pt-4 px-2">
		<TextInput placeholder="Joe" label="Last Name" bind:value={lastName}/>
	</div>
	<div class="pt-4 px-2">
		<TextInput placeholder="joesmith@gmail.com" label="Email" bind:value={email}/>
	</div>
	<div class="pt-4 px-2">
		<TextInput placeholder="Password" label="Password *" type="password" bind:value={password}/>
	</div>
	<div class="py-4 px-2">
		<TextInput placeholder="Password" label="Re-enter Password *" type="password" bind:value={password2} />
	</div>
	<div class="px-2">
		<button type="submit" class="btn btn-primary w-full">Submit</button>
	</div>
</form>
