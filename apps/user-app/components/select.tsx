interface OptionInputBarProps {
    label: string;
    options: { value: string; name: string; redirectUrl: string }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;

}

export function Select({ label, options, onChange }: OptionInputBarProps): JSX.Element {
    return (
        <div className="max-w-sm">
            <label className="block text-2xl  font-medium">
                {label}
            </label>
            <select
                className="w-80 p-2 border rounded"
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
