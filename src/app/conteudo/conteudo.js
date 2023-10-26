import { AiFillLock } from 'react-icons/ai'

const h2Styles = (number) => {
  return {
    fontSize: '32px',
    backgroundImage: (number % 2 === 1) ? 'linear-gradient(360deg, rgba(180, 197, 255, 1), rgba(180, 197, 255, 1), rgba(88, 109, 178, 1))' : 'linear-gradient(360deg, #72FFC680 , #72FFC6 )',
    WebkitBackgroundClip: 'text',
    color: (number % 2 === 0) ? 'transparent' : 'transparent', 
  }
};

const products =
  [
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: false
    },
    {
      curso: "Work Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: true
    },
    {
      curso: "Work  Shop",
      texto: "aulas curtas, para troca de conhecimento prático",
      bloqueio: true
    },
  ]
// More products...


export default function Example() {
  return (

    <div className=" bg-black mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-6 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
      {/* Loop para gerar 8 divs internas com fundo preto e borda verde */}
      {products.map((index, number) => (

        {/* Primeiro operador ternario ve se o indice do item do array 'products' é par ou impar para mudar a cor */ },
        (index.bloqueio == true) ? (
          {/* Segundo operador ternario esta apenas dividindo para ver se ele esta bloqueado ou nao */ },
          <div
            key={index}
            className={`flex flex-col w-60 h-80 overflow-hidden rounded-[50px] border-4 lg:aspect-none group-hover:opacity-75  shadow-md 
              ${(number % 2 == 0) ? 'border-[#72FFC6]' : 'border-[#586DB2]'}`
            }
            style={{
              display: 'flex', flexDirection: 'column',
              boxShadow: (number % 2 === 0)
                ? 'inset -2px -8px 10px #72FFC6'
                : 'inset -2px -8px 10px #586DB2'
            }}
          >
            <div
              className="flex items-end justify-center p-4"
              style={{ height: '40%' }}
            >
              <h2
                className={`font-semibold font-montserrat text-center `}
                style={h2Styles(number)}
              >
                BLOQUEADO
              </h2>
            </div>
            <div className={`flex items-start justify-center p-4  ${(number % 2 == 0) ? 'text-[#72FFC6]' : 'text-[#586DB2]'}`} style={{ height: '60%' }}>
              <AiFillLock style={{ height: '70%', width: '70%', }} />
            </div>
            <div style={{ width: "201px", height: "30px", opacity: "0.50", background: "linear-gradient(180deg, #586DB2 0%, #FFFFff 10%, #586DB2 100%)", boxShadow: "70px 70px 70px", filter: "blur(70px)" }}></div>
          </div>

        ) : (

          <div
            key={index}
            className={`flex relative flex-col w-60 h-80 overflow-hidden rounded-[50px] border-4 lg:aspect-none group-hover:opacity-75 shadow-md ${number % 2 === 0 ? 'border-[#72FFC6]' : 'border-[#586DB2]'}`}
            style={{

              boxShadow: (number % 2 === 0)
                ? 'inset 0 0 20px #72FFC6'
                : 'inset 0 0 20px #586DB2'
            }}
          >
            <div className="flex-1 flex items-center justify-center p-4 z-[1]">
              <h2
                className={`font-semibold font-montserrat text-center `}
                style={h2Styles(number)}
              >
                {index.curso}
              </h2>
            </div>
            <div className="flex-1 flex items-center justify-center p-4 text-[#fff] z-[1]">
              <p>{index.texto}</p>
            </div>
            <div className='z-[0] self-center' style={{
              position: 'absolute',
              width: '80%',
              height: '20%',
              background: 'radial-gradient(#586DB2, #000000)',
              boxShadow: '0px 0px 300px 46px rgba(88, 109, 178, 1)',
              borderRadius: '100% 100% 100% 100%',
              bottom: '7px',
              opacity: '0.4', 
            }}></div>          </div>
        )
      )
      )}
    </div>
  )
}
