
import Link from "next/link";

const NOT_FOUND = '/images/404.png';
export default function NotFound() {


    return (
        <section>
            <image src={NOT_FOUND} alt="imagem da pagina de erro" />
            <div>
                <h1>Ops... Página não encontrada... Clique em voltar!</h1>
                <div >
                    <Link href="/">
                     <button>VOLTAR</button>
                    </Link>
                   
                </div>
            </div>
        </section>
    )
}
