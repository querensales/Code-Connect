import Image from "next/image"

export const Avatar = ({name, imageSrc}) =>{
    return(
        <ul>
            <li>
                <Image src={imageSrc} width={32} height={32} 
                alt={`imagem do(a) ${name.Avatar}`} />
            </li>
            <li>
               @{name}
            </li>
        </ul>
    )
}