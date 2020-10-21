<script>
  import {AceEditor} from "svelte-ace";
  let text = "";
</script>

<AceEditor
  on:textInput={(textString) => text=textString}
  on:selectionChange={(obj) => console.log(obj)}
  on:paste={(text) => console.log('paste : '+text)}
  on:input={(text) => console.log('input : ' + text)}
  on:focus={() => console.log('focus')}
  on:documentChange={(obj) => console.log(`document change : ${obj}`)}
  on:cut={() => console.log('cursor change')}
  on:cursorChange={() => console.log('cursor change')}
  on:copy={() => console.log('copy')}
  on:init={(editor) => console.log(editor)}
  on:commandKey={(error, hashId, keyCode) => console.log(`${error}, ${hashId}, ${keyCode}`)}
  on:changeMode={(obj) => console.log(`change mode : ${obj}`)}
  on:blur={() => console.log('blur')}
  lang={'json'}
  value={text} />
