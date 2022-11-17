const Pagination = ({postsPerPage, totalPosts, setCurrentPage}) => {
  
    const pageNumbers = []
   
     for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
     }




 return (
    <nav>
     <ul className="pagination">
        {pageNumbers.map((page) => {
         return  <li onClick={(()=> {setCurrentPage(page)})} key = {page}>
                {page}
           </li>
        })
        }
     </ul>

    </nav>
   )

}

export default Pagination