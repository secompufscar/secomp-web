'use client'

import Link from 'next/link'

import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"

export const metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js"
}

const Page = () => {
  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <Breadcrumb
          items={[
            { title: "Início", href: "/gestao" }
          ]}
        />
      </div>
    </>
  )
}

export default Page
