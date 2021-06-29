export const schema = gql`
  type Student {
    id: Int!
    email: String!
    firstName: String!
    lastName: String!
    role: String!
    course: Course!
    courseId: Int!
    Grade: [Grade]!
  }

  type Query {
    students: [Student!]!
    student(id: Int!): Student
  }

  input CreateStudentInput {
    email: String!
    firstName: String!
    lastName: String!
    role: String!
    courseId: Int!
  }

  input UpdateStudentInput {
    email: String
    firstName: String
    lastName: String
    role: String
    courseId: Int
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student!
    updateStudent(id: Int!, input: UpdateStudentInput!): Student!
    deleteStudent(id: Int!): Student!
  }
`
