import { Outlet } from "react-router-dom";

import CreateEvent from "component/HeaderCreateEvent";
import Filter from "component/HeaderFilter";
import { Container } from "./Header.styled";

function Header() {
    return (
        <>
            <Container>
                <CreateEvent />
                <Filter />
            </Container>

            <Outlet />
        </>
    );
}

export default Header;
