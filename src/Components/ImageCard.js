const ImageCard = ({birdie, identity}) => {
    return (
        <li>
         <img src ={birdie}/>
         <p>{identity}</p>
        </li>
        
    )
 
}

export default ImageCard