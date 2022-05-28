<script>
    import { user } from "../stores/sessionStore";
    import { supabase } from "../supabase/supabaseClient";
    import Profile from "../supabase/Profile.svelte";
    import Auth from "../supabase/Auth.svelte";

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
    })
</script>

<!-- <div class="container" style="padding: 50px 0 100px 0;">
    {#if $user}
        <Profile />
    {:else}
        <Auth />
    {/if}
</div> -->

<div>
    <h1 class="text-heading text-primary-dark py-5">Find your fit in seconds.</h1>
    <p class="text-paragraph text-slate-700">We'll help build your credit score, find the right house for you, and make sure that you can move in in no time.</p>
</div>