interface ButtonProps {
    name: string;
    onClick: () => void;
}

export  default function Button  ({ name, onClick }: ButtonProps)  {
    return (
        <button type="button" onClick={onClick} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{name}</button>
    )
};