<p align="center">
  <img src="./assets/icon.png" height="130px">
</p>

<h1 align="center">svelte-ace</h1>
<h2 align="center">Ace Editor for Svelte with TypeScript support</h2>

<p align="center">
<a href="https://www.npmjs.com/package/svelte-ace"><img src="https://img.shields.io/npm/v/svelte-ace" alt="Svelte Ace"/>
<a href="https://github.com/nateshmbhat/svelte-ace"><img src="https://img.shields.io/badge/builtWith-svelte-red" alt="Made with Svelte"/>
<a href="https://github.com/nateshmbhat/svelte-ace/blob/main/LICENSE"><img src="https://img.shields.io/github/license/nateshmbhat/svelte-ace" alt="License"></a>
<a href="https://img.shields.io/github/languages/top/nateshmbhat/svelte-ace">
 <img src="https://img.shields.io/github/languages/top/nateshmbhat/svelte-ace" alt="Discord Badge"></a>
</p>

<br>

### Get proper typescript type completions for ace editor in Svelte.

### Install :

```
npm i svelte-ace
```

### Usage :

```svelte
<script lang="ts">
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
  width='100%'
  height='300px'
  lang="json"
  theme="chrome"
  value={text} />
```

### Links :

- NPM : [npmjs/svelte-ace](https://www.npmjs.com/package/svelte-ace)

- Home : [github/svelte-ace](https://github.com/nateshmbhat/svelte-ace)

<br>

---

## Explore

- Check out my [svelte-electron-typescript](https://github.com/nateshmbhat/svelte-electron-ts-starter) starter pack.

- Check out my [electron-react-typescript](https://github.com/nateshmbhat/electron-react-ts-starter) starter pack.
