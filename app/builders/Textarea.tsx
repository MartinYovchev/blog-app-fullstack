export type TextareaProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  name?: string;
};

export const Textarea = ({ placeholder, value, onChange, className, name }: TextareaProps) => {
  return (
    <textarea
      className={`${className} resize-none outline-none bg-white p-4 rounded-xl`}
      placeholder={placeholder || ''}
      value={value || ''}
      onChange={onChange}
      name={name || ''}
    />
  );
};
