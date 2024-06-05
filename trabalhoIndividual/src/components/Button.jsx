import styles from "./button.module.css";

export function Botao({ valor, onclick, title }){
    return (
        <>
        <button
        title={title}
        id="button"
        className={styles.botaoBase}
        onClick={onclick}
        >
            {valor}
        </button>
        </>
    )
}