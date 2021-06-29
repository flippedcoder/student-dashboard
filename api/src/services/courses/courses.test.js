import {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} from './courses'

describe('courses', () => {
  scenario('returns all courses', async (scenario) => {
    const result = await courses()

    expect(result.length).toEqual(Object.keys(scenario.course).length)
  })

  scenario('returns a single course', async (scenario) => {
    const result = await course({ id: scenario.course.one.id })

    expect(result).toEqual(scenario.course.one)
  })

  scenario('creates a course', async () => {
    const result = await createCourse({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a course', async (scenario) => {
    const original = await course({ id: scenario.course.one.id })
    const result = await updateCourse({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a course', async (scenario) => {
    const original = await deleteCourse({ id: scenario.course.one.id })
    const result = await course({ id: original.id })

    expect(result).toEqual(null)
  })
})
