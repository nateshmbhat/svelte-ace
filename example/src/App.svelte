<script lang="ts">
  import { AceEditor } from "svelte-ace";
  import "brace/mode/json";
  import "brace/theme/chrome";

  let text = "";
  let readonly: boolean = false;
  let visible: boolean = true;
</script>

<AceEditor
  on:selectionChange={(obj) => console.log(obj.detail)}
  on:paste={(obj) => console.log(obj.detail)}
  on:input={(obj) => {
    text = obj.detail;
    console.log(obj.detail);
  }}
  on:focus={() => console.log("focus")}
  on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
  on:cut={() => console.log("cut")}
  on:cursorChange={() => console.log("cursor change")}
  on:copy={() => console.log("copy")}
  on:init={(editor) => console.log(editor.detail)}
  on:commandKey={(obj) => console.log(obj.detail)}
  on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
  on:blur={() => console.log("blur")}
  width="100%"
  height="500px"
  lang="json"
  theme="chrome"
  value={text}
  {readonly}
/>

<button
  style="opacity:{readonly ? 1 : 0.5}"
  on:click={(e) => (readonly = !readonly)}>Toggle Readonly</button
>
