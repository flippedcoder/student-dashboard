export const standard = defineScenario({
  grade: {
    one: {
      grade: 'String',
      student: {
        create: {
          email: 'String6332085',
          firstName: 'String',
          lastName: 'String',
          role: 'String',
          course: { create: { name: 'String' } },
        },
      },
    },

    two: {
      grade: 'String',
      student: {
        create: {
          email: 'String6109096',
          firstName: 'String',
          lastName: 'String',
          role: 'String',
          course: { create: { name: 'String' } },
        },
      },
    },
  },
})
