import { AiFillLock } from 'react-icons/ai'

const h2Styles = (number) => {
    return {
        fontSize: '32px',
        backgroundImage: (number % 2 === 1) ? 'linear-gradient(360deg, rgba(180, 197, 255, 1), rgba(180, 197, 255, 1), rgba(88, 109, 178, 1))' : 'linear-gradient(360deg, #72FFC680 , #72FFC6 )',
        WebkitBackgroundClip: 'text',
        color: (number % 2 === 0) ? 'transparent' : 'transparent',
    }
};



export default function Component({ product, number }) {
    return (
        <div
            className={`flex relative flex-col w-60 h-80 overflow-hidden rounded-[50px] border-4 lg:aspect-none group-hover:opacity-75 shadow-md ${number % 2 === 0 ? 'border-[#72FFC6]' : 'border-[#586DB2]'}`}
            style={{

                boxShadow: (number % 2 === 0)
                    ? 'inset 0 0 20px '
                    : 'inset 0 0 20px '
            }}
        >
            {product.bloqueio ? (
                <>            
                    <div className="flex items-end justify-center p-4" style={{ height: '40%' }}>
                        <h2 className={`font-semibold font-montserrat text-center `} style={h2Styles(number)}>BLOQUEADO</h2>
                    </div>

                    <div className={`flex items-start justify-center p-4  ${(number % 2 == 0) ? 'text-[#72FFC6]' : 'text-[#586DB2]'}`} style={{ height: '60%' }}>
                        <AiFillLock style={{ height: '70%', width: '70%', }} />
                    </div>

                    <div style={{ width: "201px", height: "30px", opacity: "0.50", background: "linear-gradient(180deg, #586DB2 0%, #FFFFff 10%, #586DB2 100%)", boxShadow: "70px 70px 70px", filter: "blur(70px)" }} />
                </>
            ) : (
                <>

                    <div className="flex-1 flex items-center justify-center p-4 z-[1]">
                        <h2 className={`font-semibold font-montserrat text-center `} style={h2Styles(number)}>
                            {product.curso}
                        </h2>
                    </div>

                    <div className="flex-1 flex items-center justify-center p-4 text-[#fff] z-[1]">
                        <p>{product.texto}</p>
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
                    }} />
                </>
            )}
        </div>
    )
}
