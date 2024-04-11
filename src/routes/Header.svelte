<!-- Header.svelte -->
<script>
	import { getContext} from 'svelte';
    const {title} = getContext('my-title')
</script>

<header>
    <h1>
        {$title}
    </h1>
    <nav class="header-page-items">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/useragent">UserAgent</a>
    </nav>
</header>

<style>
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      background-color: #f2e4f7; /* Light violet tone */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding-inline-start: 10px;
      padding-inline-end: 10px;
    }

    .header-page-items > a{
        margin: 5px;
    }
    h1::before{
        content: "@";
    }
  </style>