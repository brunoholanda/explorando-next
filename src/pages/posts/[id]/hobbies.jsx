import CardHobbie from '@/components/Card';
import { useEffect, useState } from 'react';
const carregando = './images/carregando.gif';

export default function Hobbies() {

    const [hobbies, setHobbies] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/c628efc1-ac35-4a71-a70e-92d4b2e57c43')
            .then(resposta => resposta.json())
            .then(dados => {
                setHobbies(dados)

            })
    }, [])


    return (
        <div>
            <h1>Meus Hobbies</h1>
            <p>Aqui você pode conferir o que gosto de fazer no meu tempo livre</p>
            <h2>Criar coisas que outras pessoas podem usar</h2>
            <p>Em 2013 subi meu primeiro vídeo no Youtube e nele eu mostrava uma fechadura eletrônica feita com sucata de um gravador de DVD.</p>
            <p>Desde então sempre que tenho um tempo livre posto novos vídeos ensinando as pessoas a fazerem algumas engenhocas interessantes, e a seguir você pode conferir algumas delas:</p>
            <div>
            {hobbies.length > 0 ? (
                    hobbies.map((hobbie) => <CardHobbie {...hobbie} key={hobbie.id} />)
                ) : (
                    <img src={carregando} alt="carregando projeto"/>
                )}
            </div>
        </div>
    )
}