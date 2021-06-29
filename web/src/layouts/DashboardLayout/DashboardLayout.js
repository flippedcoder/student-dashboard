import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'

const DashboardLayout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Link to={routes.dashboard()}>Dashboard</Link>
        <Link to={routes.courses()}>Courses</Link>
        <Link to={routes.students()}>Students</Link>
        <Link to={routes.grades()}>Grades</Link>
      </Nav>
      <ComponentHolder>
        {children}
      </ComponentHolder>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`

const ComponentHolder = styled.div`
  padding: 24px;
  width: 75%
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #E35CF1;
  width: 20%;

  & > * {
    padding-bottom: 18px;
  }
`

export default DashboardLayout
