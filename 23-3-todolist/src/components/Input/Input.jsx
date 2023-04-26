import React, { useState } from "react";
import Input from "./Input";

function MyComponent() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <Input
                name="name"
                value={name}
                placeholder="Введите имя"
                onChange={handleNameChange}
            />
        </div>
    );
}

export default MyComponent;