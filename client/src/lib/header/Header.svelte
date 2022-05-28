<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
</script>

<header>
	<nav class="bg-primary">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="hidden md:relative md:flex items-center h-16">
				<div class="ml-4 mr-4 text-white"><h3>RentRight</h3></div>
				<div class="flex-grow text-white" />
				<div class="ml-4 mr-4 text-white"><h5>About</h5></div>
				<div class="ml-4 mr-4 text-white"><h5>Blog</h5></div>
				<div class="ml-4 mr-4 text-white"><h5>Sign In</h5></div>
				<div class="ml-4 mr-4 text-white"><h5>Sign Up</h5></div>
			</div>
		<div class="flex flex-col md:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <Icon color="text-white">menu</Icon>
          <div class="flex-grow">
            <h5 class="text-subheading text-white">
              RentRight
            </h5>
          </div>
          <a href="/login">
            <Icon color="text-white">person</Icon>
          </a>
        </button>
      </div>	
		</div>
	</nav>
</header>
