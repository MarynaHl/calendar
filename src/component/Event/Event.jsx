import { useState, memo } from "react";

import Form from "component/Form";
import { BackDrop, Title } from "./Event.styled";

export default memo(function EventInner({ event }) {
    const [dropdown, setDropdown] = useState(false);

    function toggleDropdown() {
        setDropdown(!dropdown);
    }

    return (
        <>
            <BackDrop onClick={toggleDropdown} dropdown={dropdown} />
            <Title onClick={toggleDropdown}>{event.title}</Title>
            {dropdown && (
                <Form
                    toggleDropdown={toggleDropdown}
                    event={event}
                    edit={true}
                />
            )}
        </>
    );
});
