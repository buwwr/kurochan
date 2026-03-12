import { ReactNode } from "react"

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant
  size?: ButtonSize
  onClick?: () => void
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary: "text-zinc-50 hover:text-zinc-100 border-pink-200 bg-pink-600 hover:bg-pink-500", 
  secondary: "text-zinc-800 hover:text-zinc-950 border-blue-200 hover:border-blue-300 hover:bg-blue-200"
}

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm py-2 px-6 border-2",
  md: "text-md py-2 px-10 border-2",
  lg: "text-lg py-2 px-10 border-2",
}

export function Button({ children, type, variant, size, onClick, className  }: ButtonProps ) {
  return (
    <button 
      type={type}
      className={`
        cursor-pointer rounded-lg font-extrabold w-fit
        ${variants[variant ?? "primary"]}
        ${sizes[size ?? "md"]}
        ${className}
      `}
      onClick={onClick}
    >
      {children} 
    </button>
  )
}