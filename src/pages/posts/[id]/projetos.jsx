import { useRouter } from "next/router";
import Link from 'next/link';

export default function Projeto() {
    const router = useRouter();

    return (
        <div>
            ID do post atual: {router.query.id}

            <Link href="/">
                Ir para a Home
            </Link>
        </div>
    )
}