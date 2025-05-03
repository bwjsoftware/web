<script setup>
	import { ref, onMounted } from 'vue';

	const isDarkMode = ref(false);

	onMounted(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		isDarkMode.value = mediaQuery.match;

		mediaQuery.addEventListener('change', (e) => {
			isDarkMode.value = e.matches;
		});
	});
</script>

<template>
	<div class="flow-root">
		<h1 class="text-4xl font-semibold text-black dark:text-white float-left m-[15px]">Welcome</h1>
		<img class="float-right m-[15px]" src="./assets/img/Logo.png" alt="bwjsoftware logo" width="225">
	</div>
	<div class="flow-root ">
		<a href="https://github.com/brett092304" target="_blank" rel="noopener noreferrer">
			<img v-if="isDarkMode" class="float-left m-[15px]" src="./assets/img/github-dark-logo.png" alt="github logo" width="100">
			<img v-else class="float-left m-[15px]" src="./assets/img/github-light-logo.png" alt="github logo" width="100">
		</a>
	</div>

</template>
