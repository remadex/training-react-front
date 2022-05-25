import Layout from "../components/Layout";
import Link from "next/link";

export default function Todos({ data }) {
  return (
    <Layout title="Todos" currentPage="todos">
      <h2 className="pb-8 text-2xl">Listing des todos</h2>
      <ul>
        {data.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-indigo-200 rounded-md py-3 px-2 mb-8"
          >
            {todo.title}
            <Link href={`/todos/${todo.id}`}>Vers le todo</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
