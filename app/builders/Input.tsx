export type InputProps = {
  placeholder: string;
  className?: string;
};

export const Input = ({ placeholder, className }: InputProps) => {
  return <input type="text" placeholder={placeholder} className={className} />;
};
