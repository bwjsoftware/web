<script setup>
	import navbar from '@/components/navbar.vue';
	import footerbar from '@/components/footer.vue';
	import { RouterView } from 'vue-router';
</script>

<template>
	<navbar />
	<RouterView />
	<footerbar />
</template>
