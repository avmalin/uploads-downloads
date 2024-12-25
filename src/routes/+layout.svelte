<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	let showSidebar = $state(false);
	const toggleSidebar = () => {
		console.log("click")
		showSidebar = !showSidebar;
	};
</script>

<div class="flex h-screen flex-col">
	<Navbar toggleSidebar={toggleSidebar} />
	<div class="flex flex-1">
		{#if showSidebar}
			<Sidebar/>
		{/if}
		<main class="flex-1 overflow-y-auto bg-gray-50 p-6">
			{@render children()}
		</main>
	</div>
	<Footer/>
</div>
