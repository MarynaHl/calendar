import { Link, useNavigate, useParams } from "react-router-dom";

import { MONTHS } from "constants";
import { Container, InputMonth } from "./HeaderFilter.styled";

export default function HeaderFilter() {
    const { year, month } = useParams();
    const navigate = useNavigate();
    const date = new Date();
    const monthIndex = date.getMonth();
    const previousMonth = month ? month - 1 : monthIndex;
    const nextMonth = month ? Number(month) + 1 : monthIndex + 2;

    let previousYear;
    if (year) {
        if (year && previousMonth < 1) {
            previousYear = year - 1;
        } else {
            previousYear = year;
        }
    } else {
        previousYear = date.getFullYear();
    }

    let nextYear;
    if (year) {
        if (year && nextMonth > MONTHS.length) {
            nextYear = Number(year) + 1;
        } else {
            nextYear = year;
        }
    } else {
        nextYear = date.getFullYear();
    }

    function handleChange(e) {
        e.preventDefault();
        navigate(
            `month/${e.target.value.slice(0, 4)}/${Number(
                e.target.value.slice(5, 7)
            ).toString()}`
        );
    }

    return (
        <>
            <Container>
                <Link
                    to={`/Calendar/month/${previousYear}/${
                        previousMonth < 1 ? MONTHS.length : previousMonth
                    }`}
                >
                    &lt;
                </Link>
                {month ? MONTHS[month - 1] : MONTHS[monthIndex]}&nbsp;
                {year ? year : date.getFullYear()}
                <Link
                    to={`/Calendar/month/${nextYear}/${
                        nextMonth > MONTHS.length ? 1 : nextMonth
                    }`}
                >
                    &gt;
                </Link>
            </Container>
            <InputMonth type="month" onChange={handleChange} />
        </>
    );
}
