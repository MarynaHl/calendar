import CellDate from "component/CellDate";
import Event from "component/Event";
import { Container, List } from "./Cell.styled";

export default function Cell({
    day,
    weekDay,
    anotherMonth,
    currentDay,
    events,
}) {
    const colorDay = currentDay === day ? true : null;

    return (
        <Container anotherMonth={anotherMonth} colorDay={colorDay}>
            <CellDate day={day} weekDay={weekDay} />
            <List>
                {events?.map((event, index) => (
                    <Event key={index} event={event}></Event>
                ))}
            </List>
        </Container>
    );
}
