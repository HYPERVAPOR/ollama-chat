import React from "react";

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      className={className}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={rows}
    />
  );
};

export default InputBox;
