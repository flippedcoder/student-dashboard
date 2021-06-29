export const schema = gql`
  type Grade {
    id: Int!
    grade: String!
    student: Student!
    studentId: Int!
    course: Course!
    courseId: Int!
  }

  type Query {
    grades: [Grade!]!
    grade(id: Int!): Grade
  }

  input CreateGradeInput {
    grade: String!
    studentId: Int!
    courseId: Int!
  }

  input UpdateGradeInput {
    grade: String
    studentId: Int
    courseId: Int
  }

  type Mutation {
    createGrade(input: CreateGradeInput!): Grade!
    updateGrade(id: Int!, input: UpdateGradeInput!): Grade!
    deleteGrade(id: Int!): Grade!
  }
`
