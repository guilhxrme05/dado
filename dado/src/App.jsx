import { useState } from 'react';
import './App.css'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa6";

function App() {

  

  const [dados, setDados] = useState([

    <FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix />
  ])

  const [dados2, setDados2] = useState([

    <FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix />
  ])


  const [frases, setFrases] = useState([

    `Volte 3 casas.`, `Pule 5 casas.`, `+ R$50,00`, `Volte para o início`, `+ R$30,00`, `Pule 2 casas.`, `Jogue denovo`, `Duas rodadas sem jogar.`, `Uma rodada sem jogar.`, `Eliminado do jogo`, 
    `Jogue o dado mais duas vezes`, `- R$50,00`, `Você perdeu todo seu dinheiro`, `Escolha alguém para voltar ao início`, `Todos da partida avançam 2 casas`
   
  ])

  const [frases2, setFrases2] = useState([

    `Volte 3 casas.`, `Pule 5 casas.`, `+ R$50,00`, `Volte para o início`, `+ R$30,00`, `Pule 2 casas.`, `Jogue denovo`, `Duas rodadas sem jogar.`, `Uma rodada sem jogar.`, `Eliminado do jogo`, 
    `Jogue o dado mais duas vezes`, `- R$50,00`, `Você perdeu todo seu dinheiro`, `Escolha alguém para voltar ao início`, `Todos da partida avançam 2 casas`
   
  ])
   

 

 
    function sortearDado(){


    
      let i = Math.floor(Math.random() * dados.length)
      setDado(dados[i])

      let f = i

      f = Math.floor(Math.random() * frases.length)
      setFrase(frases[i])

      sortearDado2()

      

      
  }
  
  function sortearDado2(){


    
    let i2 = Math.floor(Math.random() * dados2.length)
    setDado2(dados2[i2])

    let f2 = i2

    f2 = Math.floor(Math.random() * frases2.length)
    setFrase2(frases2[i2])

    
}



  const [dado, setDado] = useState(<FaDiceOne />)

  const [dado2, setDado2] = useState(<FaDiceOne />)

  const [frase, setFrase] = useState("")

  const [frase2, setFrase2] = useState("")

  const [adicionado, setAdicionado] = useState()

  function adicionarDado(){

    setAdicionado(true)
    
   }

   function removerDado(){
    setAdicionado(false)
   }
     

  
  


 

  


  return (
    <>
    
     <div className="app-container">




      
        <div className="icon-div">

            {dado} {adicionado && dado2}

        </div>

        <div className="frases-div">

           {frase} {adicionado && frase2}

        </div>
        
      

      
     <div className="botoes">
     <button onClick={sortearDado} className='jogar-dado'>JOGAR DADO</button>
     <button onClick={adicionarDado} className='jogar-dado'>ADICIONAR DADO</button>
     <button onClick={removerDado} className='jogar-dado'>REMOVER DADO</button>
     

     </div>




     </div>
     
    </>
  )
}

export default App
