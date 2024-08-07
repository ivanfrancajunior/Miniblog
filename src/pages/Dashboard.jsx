import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContetxt";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useDeleteDocument } from "../hooks/useDeleteDocument";
import Loader from "../components/Loader";
import Button from "../components/Button";
const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;
    const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

    const { deleteDocument } = useDeleteDocument("posts");

    if (loading) <Loader />;

    return (
        <div className="flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto">
            <h2 className="my-8 text-5xl">Dashboard</h2>
            <p className="my-8 text-4xl font-bold">Gerencie seus Posts </p>
            {posts && posts.length === 0 ? (
                <div className="flex flex-col gap-5 items-center justify-center">
                    <p>Não foram encontrados posts 😕</p>
                    <Button className="pb-1 ">
                        <Link to="/posts/create">Crie seu post!</Link>
                    </Button>
                </div>
            ) : (
                <>
                    {posts &&
                        posts.map((post) => (
                            <div
                                key={post.id}
                                className="flex items-center justify-around gap-4 p-4 border-y min-w-[320px] w-full"
                            >
                                <p className="text-2xl font-bold">{post.title}</p>
                                <div className="flex gap-4 items-center ">
                                    <span className="flex items-center text-black border-2 border-black bg-blue-500 rounded-full h-12 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors duration-200">
                                        <Link
                                            to={`/posts/${post.id}`}
                                            className="p-2 bg-blue-500 rounded  text-center"
                                        >
                                            {" "}
                                            Ver{" "}
                                        </Link>
                                    </span>
                                    <span className="flex items-center text-black border-2 border-black bg-yellow-500 rounded-full h-12 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors duration-200">
                                        <Link to={`/posts/edit/${post.id}`}>
                                            {" "}
                                            Editar{" "}
                                        </Link>
                                    </span>
                                    <button
                                        onClick={() => deleteDocument(post.id)}
                                        className="flex items-center text-black border-2 border-black bg-red-500 rounded-full h-12 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors duration-200"
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};

export default Dashboard;
