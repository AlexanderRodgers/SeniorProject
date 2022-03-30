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
<div></div>
</div>

<div class="container" style="padding: 50px 0 100px 0;">
    {#if $user}
        <Profile />
    {:else}
        <Auth />
    {/if}
</div>