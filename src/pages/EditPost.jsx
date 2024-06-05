import { useParams } from "react-router-dom"

const EditPost = () => {

    const {id} = useParams();

    return (
      <div>
          Edit post: {id}
      </div>
    )
}

export { EditPost }
