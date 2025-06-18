interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string; // 受控输入的值
  defaultValue?: string; // 非受控输入的默认值
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // 输入变化事件
  placeholder?: string; // 占位符
  type?: string; // 输入类型，如 text, password, email 等
  className?: string; // 自定义样式类名
  disabled?: boolean; // 是否禁用
  // 你可以根据需要继续扩展更多属性
}
