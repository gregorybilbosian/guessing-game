
export function Button (props) {
    return (
        <button type="submit">
            {(props.status === true ) ? "submit" : "play again ?"} 
        </button>
}
export default Button