<script lang="ts">
	import Header from './Header.svelte';
	import { setContext } from 'svelte';
	import './styles.scss';
    import { writable } from 'svelte/store';

	const title = writable("default")
	setContext('my-title', {title})

	export function updateTitle(title: string) {
		$title = title
	}
	setContext('updateTitle', updateTitle)
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	
	<footer>
		<p>This is the footer</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		justify-content: center;
		align-items: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
