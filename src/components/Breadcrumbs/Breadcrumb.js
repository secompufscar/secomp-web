import Link from "next/link"

export default function Component({ items }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-2">
      <nav>
        <ol className="flex items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href}>
              <Link className="font-medium" href={`${item.href}`}>
                {item.title} {index < items.length - 1 ? "/" : ""}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
