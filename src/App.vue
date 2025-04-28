<script setup>
	import { useDark } from '@vueuse/core';
	const toggleDark = () => {document.documentElement.classList.toggle('dark');}

</script>

<template>
	<div class="flow-root">
		<h1 class="text-4xl font-semibold text-black dark:text-white float-left m-[15px]">Welcome</h1>
		<button class="text-xl bg-black dark:bg-white dark:text-black text-white float-right m-[15px] rounded"  @click="toggleDark">Toggle Darkmode</button>
	</div>
</template>
