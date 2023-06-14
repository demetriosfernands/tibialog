import './Index.css';

export function CardLog(props: any) {
    return (
        <>
            <div className="logCard">
                <span className="hora">{props.hora}</span>
                <span className="info">{props.info}</span>
            </div>
        </>
    );
}
