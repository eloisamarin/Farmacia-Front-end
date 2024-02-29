import { Link } from "react-router-dom"

function Navbar() {

    return (
      
      <>
       <div className='w-full bg-red-600 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
              <div className='text-2xl font-bold uppercase'>Farmácia FarmaVida</div>
  
              <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
                <div className='hover:underline'>Produto</div>
                <Link to='/categoria' className='hover:underline'>Categoria</Link>
              <Link to='/editarCategoria/2' className='hover:underline'>Cadastrar Categoria</Link>
              </div>
            </div>
          </div>
      </>
    )
  }
  
  
  export default Navbar