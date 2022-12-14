import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);
    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render withOutCallBack: {withOutCallBack.current}</p>
            <p>render withCallBack: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                onChange={handleChange}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
