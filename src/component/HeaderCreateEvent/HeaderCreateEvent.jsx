import { useState } from "react";

import Form from "component/Form";
import { Button, BackDrop } from "./HeaderCreateEvent.styled";

export default function HeaderCreateEvent() {
    const [dropdown, setDropdown] = useState(false);

    function toggleDropdown() {
        setDropdown(!dropdown);
    }

    return (
        <>
            <Button onClick={toggleDropdown}>+</Button>
            <BackDrop onClick={toggleDropdown} dropdown={dropdown} />
            {dropdown && <Form toggleDropdown={toggleDropdown} />}
        </>
    );
}
