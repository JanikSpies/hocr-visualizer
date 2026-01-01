
interface ButtonProps {
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    label?: string;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    type = 'button',
    label,
    icon,
    onClick,
    disabled,
    className = '',
    ariaLabel,
}) => {

    const variantClasses = () => {
        switch (variant) {
            case "primary":
                return 'bg-violet-800 text-white hover:bg-violet-900'
            case "secondary":
                return 'bg-white text-black hover:bg-zinc-100'
        }
    }

    return (
        <button
            onClick={onClick}
            className={`py-2 px-4 rounded-4xl flex items-center justify-center gap-2 hover:cursor-pointer ${variantClasses()} drop-shadow-xl transition active:scale-90 ${label ? '' : 'rounded-full h-12 w-12 !p-2 flex items-center justify-center'} ${className}`}
            disabled={disabled}
            aria-label={ariaLabel}
            type={type}
        >
            {icon}
            {label}
        </button>
    )
}

export default Button;