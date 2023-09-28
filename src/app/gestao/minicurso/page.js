'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import Table from "../../../components/Tables/Table"

import api from '../../../services/api'

export const metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js"
}

const Page = () => {
  const [data, setData] = useState([])

  console.log(data)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get('/minicurso')
        setData(response.data)
      } catch (error) {

      }
    }

    loadData()
  }, [])

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <Breadcrumb
          items={[
            { title: "Início", href: "/gestao" },
            { title: "Minicurso", href: "/gestao/minicurso" }
          ]}
        />

        <Link href="/gestao/minicurso/novo">
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
            type="submit"
          >
            Novo
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        <Table name="Minicurso" th={["Título", "Requisitos", "Descrição"]}>
          {data.length === 0 && (
            <div
              className="flex justify-center border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            >
              <div className="items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  Não há minicursos cadastrados
                </p>
              </div>
            </div>
          )}

          {data.map(item => (
            <Link href={`/gestao/minicurso/${item.id}`} key={item.id}>
              <div
                className="grid grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
              >
                <div className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">
                    {item.titulo}
                  </p>
                </div>

                <div className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">
                    {item.requisitos}
                  </p>
                </div>

                <div className="col-span-2 hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">
                    {item.descricao}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Table>
      </div >
    </>
  )
}

export default Page
