const GreetingComponent1 = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    );
};

const GreetingComponent2 = ({name, age=15, majeur, fn}) => {
    return (
        <div>
            <h1>Welcome to my app {name} {age} {majeur} {fn("tintin")}!</h1>
        </div>
    );
};

import PropTypes from 'prop-types';

export default function Greetings(props) {
    console.log(props);
    return (
     <h1>io all { props.name }</h1>
    );
  }

Greetings.propTypes = {
    name: PropTypes.string.isRequired
};
GreetingComponent2.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    majeur: PropTypes.bool.isRequired,
    fn: PropTypes.func.isRequired
};

export { GreetingComponent1, GreetingComponent2 };