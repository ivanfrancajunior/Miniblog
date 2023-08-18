import { Link } from "react-router-dom";
import { useAuthValue } from "../context/AuthContetxt";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useDeleteDocument } from "../hooks/useDeleteDocument";
const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p> carregando...</p>;
  }

  return (
    <div className="flex  flex-col container items-center justify-start gap-4  min-h-screen h-auto">
     <h2>Dashboard</h2>
      <p>Gerencie seus Posts</p>
      {posts && posts.length === 0 ?(
        <div > 
          <p>Não foram encontrados  posts</p>
          <Link to='/posts/create' className='btn' >Crie seu post!</Link>
        </div>) 
        :(<>
          <div > 
            <span>Título</span>
            <span>Ações</span>

          </div>
          {posts && posts.map((post)=>(<div key={post.id} >
            <p>{post.title}</p>
            <div>
              <Link to={`/posts/${post.id}`}className='btn btn-outline' > Ver </Link>
              <Link to={`/posts/edit/${post.id}`}className='btn btn-outline' > Editar </Link>
              <button onClick={()=>deleteDocument(post.id)} className='btn btn-outline btn-danger'>Excluir</button>
            </div>

          </div>))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
