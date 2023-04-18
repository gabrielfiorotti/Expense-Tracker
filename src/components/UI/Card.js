import './Card.css';

// Card is a wrapper component

function Card(props) {
    const cssClasses = 'card ' + props.className;

    return <div className={cssClasses}>{props.children}</div>
}

export default Card;


// children -> it's a built in react prop

// the value of the children prop will always be the content between the opening and closing tags of your others custom components that you put inside these wrapper component.

// these wrapper components (like Card), are important because:
// - avoid code duplication
// - make code clean
