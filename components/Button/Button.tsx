interface Props{
    content: React.ReactNode,
    onClick?: () => void
}

const Button: React.FC<Props> = ({ content, onClick }) => {
    return (
        <button className="" onClick={onClick}>
            {content}
        </button>
    )
}

export default Button;
