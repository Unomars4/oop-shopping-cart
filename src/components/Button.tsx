import {FormEvent} from "react";

interface IButton {
    clickHandler: (e: FormEvent<HTMLButtonElement>) => void;
    label: string;
    type: string;
    index?: number;
}

export default function Button({clickHandler, label, type, index}: IButton) {
    return (
        <button type="button" data-index={index} className={type} onClick={clickHandler} >
            {label}
        </button >
    )
}
