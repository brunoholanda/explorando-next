const youtube = './icons/youtube.png'
const github = './icons/mini-git-hub.png'

export default function CardHobbie({ id, imagem, titulo, resumo, stacks, video, repositorio }) {

    return (
        <div>
            <div>
            <img src={imagem} alt={titulo} />
                <div>
                    <h3>{titulo}</h3>
                    <h4>{resumo}</h4>
                    <p>Habilidades: {stacks}</p>
                </div>
            </div>
            <div>
                <a href={video} target="_blank">
                    <div>
                        <img src={youtube} alt="icone pequeno de clipe de papel" />
                        <p>Ver Vídeo</p>
                    </div>
                </a>
                <a href={repositorio} target="_blank">
                    <div>
                        <img src={github} alt="icone pequeno do github" ></img>
                        <p>Repositório</p>
                    </div>
                </a>
            </div>
        </div>

    )
}