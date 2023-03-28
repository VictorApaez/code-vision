import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeBlock({ code }: { code: string }) {
  return (
    <CopyBlock
      text={code}
      language="javascript"
      showLineNumbers="true"
      wrapLines
      theme={dracula}
      textStyles={{ fontSize: "12px" }}
    />
  );
}
