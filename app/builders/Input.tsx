export type InputProps = {
  placeholder: string;
  className?: string;
  type?: string;
  name?: string;
  value?: string;
};

export const Input = ({ placeholder, className, type, name, value }: InputProps) => {
  return <input type={type || 'text'} placeholder={placeholder} className={className} name={name} value={value} />;
};
