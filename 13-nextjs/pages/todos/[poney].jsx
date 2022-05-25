import Layout from "../../components/Layout";

export default function Todos({ data }) {
  return (
    <Layout title="Todo" currentPage="todos">
      <h1 className="text-4xl">{data.title}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.poney}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
