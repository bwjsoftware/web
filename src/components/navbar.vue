<script setup>
	import { RouterLink, useRoute } from 'vue-router';
	
	const isActiveLink = (routePath) => {
		const route = useRoute();
		return rout.path === routePath;
	};
</script>

<template>
	<nav class="bg-secondary p-4">
		<div class="mx-auto flex justify-between items-center">
			<div>
				<RouterLink to="/" class="px-2 text-tertiary text-lg font-semibold">Home</RouterLink>
				<RouterLink to="/projects" class="px-2 text-tertiary text-lg font-semibold">Projects</RouterLink>
				<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="px-2 text-tertiary text-lg font-semibold">Resume</a>
			</div>
			<div class="flex float-right">
				<a href="https://github.com/bwjsoftware" target="_blank" rel="noopener noreferrer" class="px-2">
					<img src='/img/github-dark-logo.png' alt='github logo/link' width='25' />
				</a>
				<a href="mailto:johnson.brett@bwjsoftware.com" target="_blank" rel="noopener noreferrer" class="px-2">
					<img src='../assets/img/mail-letter.png' alt='email icon by Sergei Kokota' width='25' />
				</a>
			</div>
		</div>
	</nav>
</template>
