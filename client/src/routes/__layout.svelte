<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { session } from '$app/stores';
	import { auth, setAuthCookie, unsetAuthCookie } from '$lib/auth';
	auth.onAuthStateChange(async (event, _session) => {
		if (event !== 'SIGNED_OUT') {
			await setAuthCookie(_session);
			session.set({ user: _session.user, authenticated: !!_session.user });
		} else {
			session.set({ user: undefined, authenticated: false });
			await unsetAuthCookie();
		}
	});
</script>

<html lang="en" data-theme="corporate">
	<Header />

	<main class="px-4">
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</html>

<style global lang="postcss">
	@tailwind base;
	@layer base {
		/* h1 {
			font-weight: bold;
			line-height: 80px;
			font-size: 58px;
			letter-spacing: 0.2px;
		}
		h2 {
			font-weight: bold;
			line-height: 57px;
			font-size: 40px;
			letter-spacing: 0.1px;
		}
		h3 { 
			font-weight: bold;
			line-height: 32px;
			font-size: 24px;
			letter-spacing: 0.1px;
		}
		h4 {
			font-weight: normal;
			line-height: 32px;
			font-size: 24px;
			letter-spacing: 0.2px;
		}
		h5 {
			font-weight: bold;
			line-height: 24px;
			font-size: 16px;
			letter-spacing: 0.1px;
		}
		h6 {
			font-weight: 600;
			line-height: 24px;
			font-size: 14px;
			letter-spacing: 0.2px;
		}
		p {
			font-weight: 500;
			line-height: 26px;
			font-size: 16px;
			letter-spacing: 0.1px;
		}
		.label-text {
			font-size: 12px;
			font-weight: 800;
			line-height: 100%;
			letter-spacing: 1px;
		}
		.btn-text {
			font-weight: 500;
			line-height: 28px;
			font-size: 16px;
			letter-spacing: .2px;
		}
		*/
		.ripple {
			position: absolute;
			border-radius: 50%;
			transform: scale(0);
			animation: ripple 600ms linear;
			background-color: rgba(255, 255, 255, 0.7);
		}
		@keyframes ripple {
			to {
				transform: scale(4);
				opacity: 0;
			}
		}
	}

	@tailwind components;
	.text-heading {
		@apply font-bold leading-10 text-5xl tracking-tight;
	}
	.text-subheading {
		@apply font-bold leading-7 text-2xl tracking-tighter; 
	}
	.text-leading {
		@apply font-bold leading-5 text-xl tracking-tighter;
	}
	.text-paragraph {
		@apply font-semibold leading-4 tracking-tight;
	}
	@tailwind utilities;
</style>
