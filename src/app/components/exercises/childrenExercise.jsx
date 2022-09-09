import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const List = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return (
            <div className="d-flex">
                <span className="mx-3">{i + 1}</span>
                <span>{child}</span>
            </div>
        );
    });
};
List.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <List>
                <Component />
                <Component />
                <Component />
            </List>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
