export const schema = gql`
  type Course {
    id: Int!
    name: String!
    Student: [Student]!
  }

  type Query {
    courses: [Course!]!
    course(id: Int!): Course
  }

  input CreateCourseInput {
    name: String!
  }

  input UpdateCourseInput {
    name: String
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course!
    updateCourse(id: Int!, input: UpdateCourseInput!): Course!
    deleteCourse(id: Int!): Course!
  }
`
