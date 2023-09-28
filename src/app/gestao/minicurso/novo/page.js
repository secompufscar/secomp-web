'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Breadcrumb from "../../../../components/Breadcrumbs/Breadcrumb"
import Spinner from "../../../../components/Spinner"

import alert from '../../../../utils/alert'

import api from '../../../../services/api'

export const metadata = {
    title: "Tables Page | Next.js E-commerce Dashboard Template",
    description: "This is Tables page for TailAdmin Next.js"
}

const Page = () => {
    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()
    const [requisitos, setRequisitos] = useState()

    const [isSaving, setIsSaving] = useState(false)

    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSaving(true)

        try {
            await api.post("/minicurso", {
                titulo,
                descricao,
                requisitos
            })

            await alert({
                title: 'Sucesso!',
                text: 'Minicurso cadastrado com sucesso.',
                icon: 'success'
            })

            router.push("/gestao/minicurso")
        } catch (error) {
            await alert({
                title: 'Erro!',
                text: error.message,
                icon: 'error'
            })
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <>
            <div className="mb-6 flex justify-between items-center">
                <Breadcrumb
                    items={[
                        { title: "Início", href: "/gestao" },
                        { title: "Minicurso", href: "/gestao/minicurso" },
                        { title: "Novo", href: "/gestao/minicurso/novo" }
                    ]}
                />
            </div>

            <div className="col-span-5 xl:col-span-3">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4.5 px-4 dark:border-strokedark py-6 px-4 md:px-6 xl:px-7.5">
                        <h4 className="text-xl font-semibold text-black dark:text-white">
                            Minicurso
                        </h4>
                    </div>

                    <div className="p-7">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5.5">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="emailAddress"
                                >
                                    Título
                                </label>

                                <div className="relative">
                                    <span className="absolute left-4.5 top-4">
                                        <svg
                                            className="fill-current"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.8">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                                                    fill=""
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                                                    fill=""
                                                />
                                            </g>
                                        </svg>
                                    </span>

                                    <input
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        type="text"
                                        required={true}
                                        name="emailAddress"
                                        id="emailAddress"
                                        placeholder="Qual o título?"
                                        onChange={(event) => setTitulo(event.target.value)}
                                        value={titulo}
                                    />
                                </div>
                            </div>

                            <div className="mb-5.5">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="Username"
                                >
                                    Pré-requisitos
                                </label>

                                <input
                                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="text"
                                    required={true}
                                    name="Username"
                                    id="Username"
                                    placeholder="Quais os requisitos mínimos?"
                                    onChange={(event) => setRequisitos(event.target.value)}
                                    value={requisitos}
                                />
                            </div>

                            <div className="mb-5.5">
                                <label
                                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                                    htmlFor="Username"
                                >
                                    Descrição
                                </label>

                                <div className="relative">
                                    <span className="absolute left-4.5 top-4">
                                        <svg
                                            className="fill-current"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.8" clipPath="url(#clip0_88_10224)">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                                                    fill=""
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                                                    fill=""
                                                />
                                            </g>
                                            
                                            <defs>
                                                <clipPath id="clip0_88_10224">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>

                                    <textarea
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        name="bio"
                                        id="bio"
                                        rows={6}
                                        placeholder="Informe uma breve descrição"
                                        onChange={(event) => setDescricao(event.target.value)}
                                        value={descricao}
                                        required={true}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4.5">
                                <button
                                    disabled={isSaving}
                                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                                    type="submit"
                                >
                                    {isSaving ? <Spinner /> : "Salvar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
