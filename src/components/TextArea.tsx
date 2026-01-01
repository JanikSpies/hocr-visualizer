interface Props {
    label?: string
    placeholder?: string
    error?: string
    required?: boolean
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextArea: React.FC<Props> = ({
    label,
    placeholder,
    error,
    required = true,
    value,
    setValue
}) => {
    return (
        <label className="form-control w-full">
            {label &&
                <div>
                    {label} {required && <span className="text-violet-600">*</span>}
                </div>
            }
            <textarea
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className={`p-4 rounded-2xl border border-slate-300 w-full h-full focus:outline-0`}
            />
            <div className="label">
                <span className="label-text-alt text-red-700">{error}</span>
            </div>
        </label>
    )
}

export default TextArea;