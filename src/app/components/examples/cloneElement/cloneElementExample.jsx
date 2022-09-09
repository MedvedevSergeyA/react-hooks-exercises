import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
const CloneElementExample = () => {
    const filed = <TextField label="email" name="email" />;
    const handleChange = (target) => {
        console.log("change", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {filed}
            {React.cloneElement(filed, {
                onChange: handleChange,
                label: "cloned email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
