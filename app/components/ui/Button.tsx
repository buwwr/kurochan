import { ReactNode } from "react"

type ButtonVariant = 'primary' | 'secondary' | 'skeleton';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children?: ReactNode,
  type?: 'button' | 'submit' | 'reset',
  variant?: ButtonVariant,
  size?: ButtonSize,
  onClick?: () => void,
  disabled?: boolean,
  className?: string,
}

const variants: Record<ButtonVariant, string> = {
  primary: "w-fit text-zinc-50 hover:text-zinc-100 border-pink-200 bg-pink-600 hover:bg-pink-500", 
  secondary: "w-fit text-zinc-800 hover:text-zinc-950 border-blue-200 hover:border-blue-300 hover:bg-blue-200",
  skeleton: "h-[40px] w-[60px] border-skeleton bg-skeleton animate-pulse",
}

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm py-2 px-6 border-2",
  md: "text-md py-2 px-10 border-2",
  lg: "text-lg py-2 px-10 border-2",
}

export function Button({ children, type, variant, size, className, onClick, disabled }: ButtonProps ) {
  return (
    <button 
      type={type}
      className={`
        cursor-pointer rounded-lg font-extrabold
        disabled:opacity-50
        ${variants[variant ?? "primary"]}
        ${sizes[size ?? "md"]}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children} 
    </button>
  )
}