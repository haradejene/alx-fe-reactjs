import { useParams } from 'react-router-dom'

export default function Post() {
  const { postId } = useParams()
  return <h3>Reading Post #{postId}</h3>
}
