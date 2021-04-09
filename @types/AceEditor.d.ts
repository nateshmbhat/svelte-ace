type LocalSvelteProps = {
  children?: any;
  class?: string;
} & Record<string, any>;

/**
 * Local svelte class for adding typescript definitions for svelte components
 *
 */
export declare class SvelteComponent<Props = {}> {
  constructor(props: Props & LocalSvelteProps);
  $on<T = any>(event: string, callback: (event: CustomEvent<T>) => void): () => void;
  $$prop_def: Props & LocalSvelteProps;
  render: undefined;
  context: undefined;
  setState: undefined;
  forceUpdate: undefined;
  props: undefined;
  state: undefined;
  refs: undefined;
}

interface AceEditorProps {
  value?: string; // String, required
  lang?: string; // String
  theme?: string; // String
  height?: string; // null for 100, else integer, used as percent
  width?: string; // null for 100, else integer, used as percent
  options?: any; // Ob
  readonly?: boolean;
}

declare class AceEditor extends SvelteComponent<AceEditorProps> { }
export default AceEditor;
