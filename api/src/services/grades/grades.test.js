import { grades, grade, createGrade, updateGrade, deleteGrade } from './grades'

describe('grades', () => {
  scenario('returns all grades', async (scenario) => {
    const result = await grades()

    expect(result.length).toEqual(Object.keys(scenario.grade).length)
  })

  scenario('returns a single grade', async (scenario) => {
    const result = await grade({ id: scenario.grade.one.id })

    expect(result).toEqual(scenario.grade.one)
  })

  scenario('creates a grade', async (scenario) => {
    const result = await createGrade({
      input: { grade: 'String', studentId: scenario.grade.two.studentId },
    })

    expect(result.grade).toEqual('String')
    expect(result.studentId).toEqual(scenario.grade.two.studentId)
  })

  scenario('updates a grade', async (scenario) => {
    const original = await grade({ id: scenario.grade.one.id })
    const result = await updateGrade({
      id: original.id,
      input: { grade: 'String2' },
    })

    expect(result.grade).toEqual('String2')
  })

  scenario('deletes a grade', async (scenario) => {
    const original = await deleteGrade({ id: scenario.grade.one.id })
    const result = await grade({ id: original.id })

    expect(result).toEqual(null)
  })
})
