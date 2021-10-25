import React from 'react'

const Header = ({money, total}) => {
    return (
        <div className="header">
             {total === 0 &&(
              <>
              <div>harcamak için $ {money}  paranız var!</div>
              </>
          )}  
          {total > 0 && money -total !== 0 &&(
              <>
              <div>harcayacak $ {money-total}  paranız kaldı!</div>
              </>
          )}  
       
          {money-total === 0 &&(
              <>
              <div>Paran bitti israf haramdır</div>
              </>
          )}  
        
        </div>
    )
}

export default Header
