<script setup>
	import { RouterLink, useRoute } from 'vue-router';
	
	const isActiveLink = (routePath) => {
		const route = useRoute();
		return rout.path === routePath;
	};
</script>

<template>
	<nav class="bg-secondary p-4">
		<div class="container mx-auto flex justify-between items-center">
			<RouterLink to="/" class="text-fg text-lg font-semibold">Home</RouterLink>
		</div>
	</nav>
</template>
