import Course from 'src/components/Course/Course'

export const QUERY = gql`
  query FindCourseById($id: Int!) {
    course: course(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Course not found</div>

export const Success = ({ course }) => {
  return <Course course={course} />
}
