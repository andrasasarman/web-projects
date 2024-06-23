import { useState } from "react";

export function useForm(id, type){
    const [value, setValue] = useState();

    return {
        value,
        type,
        id,
        onchange: (e) => setValue(e.target.value)
    }
}