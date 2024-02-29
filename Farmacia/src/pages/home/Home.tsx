import homeLogo from '../../assets/LogoFarmaVida.jpg'
import './Home.css';




function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde FramaVida!</h2>
              <p className='text-xl'>Saúde em cada dose, cuidado em cada escolha</p>
  
              
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        
      </>
    );
}

export default Home;