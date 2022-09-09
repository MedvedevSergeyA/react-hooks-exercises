import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run Factorial");
    return factorial(n);
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    }, [buttonColor]);
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>result {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prev) => prev + 10)}
                >
                    Добавить
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prev) => prev - 10)}
                >
                    Убавить
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prev) => !prev)}
                >
                    Сменить цвет
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
