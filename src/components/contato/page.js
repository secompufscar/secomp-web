'use client'
import React, { useState } from 'react';
import SweetAlert from "sweetalert2"
import { useRouter } from 'next/navigation'

import FAQComponent from '../../components/FAQ/FaqComponent';
import CustomButton from '../../components/buttons/buttons';
import Line from '../../components/line';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import emailjs from '@emailjs/browser';

export default function Desconto() {
  const [mensagem, setMensagem] = useState();
  const [telefone, setTelefone] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  // Manipulador de evento para o textarea
  const handleMensagemChange = (event) => {
    const texto = event.target.value;
    setMensagem(texto); // Atualiza o estado com o texto do textarea
  };
  const handleTelefoneChange = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length <= 2) {
      value = `${value.substring(0, 2)}`;
    }
    else if (value.length <= 6) {
      value = `(${value.substring(0, 2)})${value.substring(2, 6)}`;
    }
    else if (value.length <= 10) {
      value = `(${value.substring(0, 2)})${value.substring(2, 6)}-${value.substring(6, 10)}`;
    } else {
      value = `(${value.substring(0, 2)})${value.substring(2, 7)}-${value.substring(7, 11)}`;
    }
    setTelefone(value); // Atualize o estado com o telefone formatado
  };

  const handleForm = async (event) => {
    event.preventDefault()
    setLoading(true)

    const templateParams = {
      from_name: nome,
      to_name: "Anderson",
      message: `
        Nome: ${nome},
        Telefone: ${telefone},
        Email: ${email},
        Mensagem: ${mensagem}
      `
   };

    try {
      const response = await emailjs.send('service_8ktmui8', 'template_qew553j', templateParams, 'C15_EcUVTGOfq-b6n')

      await SweetAlert.fire({
        title: "Sucesso!",
        text: `Seu email foi enviado com sucesso, ${nome}!`,
        icon: "success"
      })

      setNome("")
      setEmail("")
      setTelefone("")
      setMensagem("")

      router.push("/#home")
    } catch(error) {
      await SweetAlert.fire({
        title: "Erro!",
        text: `Não foi possível enviar seu email, ${nome}!`,
        icon: "error"
      })
    }

    setLoading(false)
  }

  return (
    <>

      <main className="p-4 xl:px-12 ">
        <div className="bg_img w-full flex flex-col justify-center items-center  mt-20 md:mt-50">
          <p className="text-center text-white text-3xl">
            Interessado em ajudar a <br />
            construir a SECOMP XI Ufscar<br /> com a gente
          </p>

          <h1 className="text-6xl text-white mt-20 mb-10 text-center">ENTRE EM CONTATO</h1>

          <CustomButton text_bold="Duvidas?" text="Acesse nosso FAQ" href="#faq" buttonType={1} />
        </div>

        <div className=" mt-20 md:mt-50 pt-8 pb-8 mx-auto w-full max-w-screen-xl">
          <form onSubmit={handleForm} method='POST' action='/'
            className="flex flex-col  m-auto h-full justify-evenly md:px-12 md:w-full "
          >
            <div className="flex flex-col w-full h-full justify-between md:flex-row ">
              <div className="mx-auto flex flex-col justify-evenly w-full mr-20 " >
                <label htmlFor="nome" className="text-2xl text-white">
                  Nome:
                </label>

                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={event => setNome(event.target.value)}
                  required
                  className="rounded-full my-6 h-8 border-4 border-solid border-purple focus:outline-none px-4 py-7 whitespace-pre-wrap break-words items-top bg-black text-white "
                  style={{
                    boxShadow: '0px 0px 8px #586DB2 inset',
                    borderColor: '#586DB2',
                    borderRadius: '2rem',
                    fontSize: "1.8rem"
                  }}
                />

                <label htmlFor="email" className="text-2xl text-white">
                  Email:
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                  className="rounded-full my-6 h-8 border-4 border-solid border-purple focus:outline-none px-4 py-7 whitespace-pre-wrap break-words items-top bg-black text-white "
                  style={{
                    boxShadow: '0px 0px 8px #51B795 inset',
                    borderColor: '#586DB2',
                    borderRadius: '2rem',
                    fontSize: "1.8rem"
                  }}
                />

                <label htmlFor="telefone" className="text-2xl text-white">
                  Telefone:
                </label>

                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  placeholder="(XX)XXXXX-XXXX"
                  pattern='\(\d{2}\)\d{4,5}-\d{4}'
                  value={telefone}
                  onChange={handleTelefoneChange}
                  className="rounded-full my-6 h-8 border-4 border-solid  border-purple focus:outline-none px-4 py-7 whitespace-pre-wrap break-words items-top bg-black text-white "
                  style={{
                    boxShadow: '0px 0px 8px #51B795 inset',
                    borderColor: '#586DB2',
                    borderRadius: '2rem',
                    fontSize: "1.8rem"
                  }}
                />
              </div>

              <div className="flex flex-col mx-auto w-full" >
                <label htmlFor="mensagem" className="text-2xl text-white">
                  Descreva aqui como podemos te ajudar:
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  value={mensagem}
                  onChange={handleMensagemChange}
                  className=" my-6 h-80 md:h-full py-2 border-4 border-solid border-purple focus:outline-none  px-4 whitespace-pre-wrap break-words items-top bg-black text-white "
                  style={{
                    boxShadow: '0px 0px 8px #51B795 inset',
                    borderColor: '#586DB2',
                    borderRadius: '2rem',
                    fontSize: "1.8rem"
                  }}
                />

              </div>


            </div>

            <div className='flex justify-end'>
              <input type='submit' disabled={loading} value={loading ? "..." : "Enviar"} className='w-50' style={{ cursor: "pointer", backgroundColor: "#586db2", marginTop: "2rem", height: "50px", borderRadius: "12px", color: "#fff", fontWeight: "bold", fontSize: "2rem" }} />
            </div>
          </form>
        </div>
      </main>


    </>
  );
}
