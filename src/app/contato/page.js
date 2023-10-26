'use client'
import React, { useState } from 'react';
import './style.css';

import FAQComponent from '../../components/FAQ/FaqComponent';
import CustomButton from '../../components/buttons/buttons';
import Line from './line';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Desconto() {
  const [mensagem, setMensagem] = useState('');
  const [telefone, setTelefone] = useState('');

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
  const faqData = [
    {
      titulo: 'Como faço para criar uma conta?',
      texto: 'Para criar uma conta, clique no botão "Registrar" e siga as instruções.'
    },
    {
      titulo: 'Como faço para redefinir minha senha?',
      texto: 'Para redefinir sua senha, vá para a página de login e clique em "Esqueci minha senha".'
    },
    {
      titulo: 'Como entro em contato com o suporte?',
      texto: 'Você pode entrar em contato com nosso suporte técnico através do email support@example.com.'
    },
  ];

  const inputClasses="rounded-full my-6 h-8 border-solid border-4  border-purple focus:outline-none glow px-4 py-7"
  return (
    <>
      <NavBar />

      <main className="p-4 xl:px-12 black-bg bg-img ">
        <div className="bg_img w-full flex flex-col justify-center items-center py-32">
          <p className="text-center text-white text-lg">
            Interessado em ajudar a <br />
            construir a SECOMP XI Ufscar<br /> com a gente
          </p>
          <h1 className="text-4xl text-white mt-8">ENTRE EM CONTATO</h1>
          <CustomButton text_bold="Duvidas?" text="Acesse nosso FAQ" buttonType={1} />

        </div>
        <div className="p-8 mx-auto">
          <form
            action="/processar-formulario"
            method="POST"
            className="flex flex-col w-full h-full justify-evenly md:px-12 "
          >
            <div className="flex flex-col w-full h-full justify-between w-full md:flex-row ">
              <div className="mx-auto flex flex-col justify-evenly w-45">
                <label htmlFor="nome" className="text-2xl text-white">
                  Nome:
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className={inputClasses}
                />

                <label htmlFor="email" className="text-2xl text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={inputClasses}
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
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col w-45 mx-auto">
                <label htmlFor="mensagem" className="text-2xl text-white">
                  Descreva aqui como podemos te ajudar:
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  value={mensagem}
                  onChange={handleMensagemChange}
                  className=" rounded-4xl my-6 h-80 md:h-full py-2 border-solid border-4  border-purple focus:outline-none glow px-4 py-4"
                />
                {/* Input hidden para armazenar o texto */}
                <input
                  type="hidden"
                  name="message"
                  value={mensagem}
                  required
                />
              </div>
            </div>
            <CustomButton text="Enviar" buttonType={0} />
          </form>
        </div>
        <Line text="FAQ" color="white" position="left"/>

        <FAQComponent faqData={faqData}/>
        
        <div className='pb-20'></div>
      </main>

      <Footer />
    </>
  );
}
