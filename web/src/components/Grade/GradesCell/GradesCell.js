import { Link, routes } from '@redwoodjs/router'

import Grades from 'src/components/Grade/Grades'

export const QUERY = gql`
  query GRADES {
    grades {
      id
      grade
      studentId
      courseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No grades yet. '}
      <Link to={routes.newGrade()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ grades }) => {
  return <Grades grades={grades} />
}
