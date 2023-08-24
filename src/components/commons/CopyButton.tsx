import { CopyIncon } from "../icons/CopyIcon"

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton =  ({ textToCopy }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button onClick={handleCopy} className="inline-flex justify-center items-center">
      <CopyIncon title="Clique aqui para copiar" className="fill-white"/>
    </button>
  );
};
