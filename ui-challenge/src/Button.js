import './Button.css';

function Button(props) {
  return (
    <div>
        <button className='button' onClick={props.onButtonClick}>Done</button>
    </div>
  );
}

export default Button;