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
		<img class="float-right m-[15px] bg-black dark:bg-transparent rounded-2xl" src="./assets/img/Logo-no-bg.png" alt="bwjsoftware logo" width="225">
	</div>
	<div class="flow-root ">
		<a href="https://github.com/brett092304" target="_blank" rel="noopener noreferrer">
			<img :src="isDarkMode ? '/img/github-dark-logo.png' : '/img/github-light-logo.png'" :alt="isDarkMode ? 'github logo dark' : 'github logo light'" class="float-left m-[15px]" width="150" />
		</a>
	</div>

</template>
