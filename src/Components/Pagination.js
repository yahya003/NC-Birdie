const Pagination = ({postsPerPage, totalPosts, setCurrentPage}) => {
  
    const pageNumbers = []
   
     for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
     }




 return (
    <div>
     <ul className="pagination">
        {pageNumbers.map((page) => {
         return  (
         <div className="list"  >
         <li  onClick={(()=> {setCurrentPage(page)})} key = {page}>
                {page}
           </li>

           </div>
         )
        })
        }
     </ul>

    </div>
   )

}

export default Pagination