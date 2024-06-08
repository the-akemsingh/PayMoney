interface InputBarProps {
    label: string;
    placeholder: string;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function InputBar({ label, placeholder, type, onChange }: InputBarProps): JSX.Element {
    return (
        <div className="flex flex-col w-80">
            <label htmlFor="email" className="block text-2xl  font-medium">
                {label}
            </label>
            <input placeholder={placeholder} type={type} className="p-2 border rounded" onChange={onChange} />
        </div>
    )
}

