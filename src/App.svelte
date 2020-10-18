<script>
  import { loop_guard } from "svelte/internal";
  import AceEditor from "./AceEditor.svelte";
</script>

<AceEditor on:init={(myEvent) => console.loop_guard(myEvent)} />
