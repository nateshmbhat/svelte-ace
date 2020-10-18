<script lang="ts">
  import { createEventDispatcher, tick, onMount, onDestroy } from "svelte";
  import * as ace from "brace";
  import "brace/ext/emmet";

  const dispatch = createEventDispatcher<{
    init: ace.Editor;
    input: string;
    onSelectionChange: any;
    onBlur: void;
    onChangeMode: any;
    onCommandKey: { err: any; hashId: any; keyCode: any };
    onCopy: void;
    onCursorChange: void;
    onCut: void;
    onDocumentChange: any;
    onFocus: void;
    onPaste: string;
    onTextInput: string;
  }>();

  /**
   * translation of vue component to svelte:
   * @link https://github.com/chairuosen/vue2-ace-editor/blob/91051422b36482eaf94271f1a263afa4b998f099/index.js
   **/
  export let value: string; // String, required
  export let lang: string; // String
  export let theme: string; // String
  export let height: string = "100%"; // null for 100, else integer, used as percent
  export let width: string = "100%"; // null for 100, else integer, used as percent
  export let options: any = {}; // Object

  let element: HTMLElement | null = null; // bind this element to variable
  let editor: ace.Editor = null;
  let contentBackup: string = "";

  onDestroy(() => {
    if (editor) {
      editor.destroy();
      editor.container.remove();
    }
  });

  $: watchValue(value);
  function watchValue(val: string) {
    if (contentBackup !== val && editor && typeof val === "string") {
      editor.session.setValue(val);
      contentBackup = val;
    }
  }

  $: watchTheme(theme);
  function watchTheme(newTheme: string) {
    if (editor) {
      editor.setTheme("ace/theme/" + newTheme);
    }
  }

  $: watchMode(lang);
  function watchMode(newOption: any) {
    if (editor) {
      editor.getSession().setMode("ace/mode/" + lang);
    }
  }

  $: watchOptions(options);
  function watchOptions(newOption: any) {
    if (editor) {
      editor.setOptions(newOption);
    }
  }

  const resizeOnNextTick = () =>
    tick().then(() => {
      if (editor) {
        editor.resize();
      }
    });

  $: if (height !== null && width !== null) {
    resizeOnNextTick();
  }

  onMount(() => {
    lang = lang || "text";
    theme = theme || "chrome";

    editor = ace.edit(element);

    dispatch("init", editor);
    editor.$blockScrolling = Infinity;
    // editor.setOption("enableEmmet", true);
    editor.getSession().setMode("ace/mode/" + lang);
    editor.setTheme("ace/theme/" + theme);
    editor.setValue(value, 1);
    contentBackup = value;
    setEventCallBacks();
    if (options) {
      editor.setOptions(options);
    }
  });

  const ValidPxDigitsRegEx = /^\d*$/;
  function px(n: string): string {
    if (ValidPxDigitsRegEx.test(n)) {
      return n + "px";
    }
    return n;
  }

  function setEventCallBacks() {
    editor.onBlur = () => dispatch("onBlur");
    editor.onChangeMode = (err) => dispatch("onChangeMode", err);
    editor.onCommandKey = (err, hashId, keyCode) =>
      dispatch("onCommandKey", { err, hashId, keyCode });
    editor.onCopy = () => dispatch("onCopy");
    editor.onCursorChange = () => dispatch("onCursorChange");
    editor.onCut = () => dispatch("onCut");
    editor.onDocumentChange = (err) => dispatch("onDocumentChange", err);
    editor.onFocus = () => dispatch("onFocus");
    editor.onPaste = (text) => dispatch("onPaste", text);
    editor.onSelectionChange = (err) => dispatch("onSelectionChange", err);
    editor.onTextInput = (text) => dispatch("onTextInput", text);

    editor.on("change", function () {
      const content = editor.getValue();
      dispatch("input", content);
      contentBackup = content;
    });
  }
</script>

<div bind:this={element} style="width:{px(width)};height:{px(height)}" />
