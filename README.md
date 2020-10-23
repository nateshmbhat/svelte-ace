<p align="center">
  <img src="assets/svelte-icon.png" height="130px">
  <img src="assets/code-icon.png" height="130px">
</p>
<h1 align="center">svelte-ace</h1>
<h2 align="center">Ace Editor for Svelte with TypeScript support</h2>
<br>

Get proper typescript type completions for ace editor in Svelte for both ts and js.

### Install :

```
npm i svelte-ace
```

### Usage :

```svelte
<script lang="ts"> // works without ts too
  import { AceEditor } from "svelte-ace";
  import "brace/mode/json";
  import "brace/theme/chrome";
  let text = "";
</script>

<AceEditor
  on:selectionChange={(obj) => console.log(obj.detail)}
  on:paste={(obj) => console.log(obj.detail)}
  on:input={(obj) => console.log(obj.detail)}
  on:focus={() => console.log('focus')}
  on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
  on:cut={() => console.log('cut')}
  on:cursorChange={() => console.log('cursor change')}
  on:copy={() => console.log('copy')}
  on:init={(editor) => console.log(editor.detail)}
  on:commandKey={(obj) => console.log(obj.detail)}
  on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
  on:blur={() => console.log('blur')}
  lang="json"
  theme="chrome"
  value={text} />

```

### Links : 
https://www.npmjs.com/package/svelte-ace