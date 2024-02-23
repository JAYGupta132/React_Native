import { render, screen } from "@testing-library/react"
import Intersection_Observer from "./components/IntersectionObserver"

test('Button testing',()=>{
  render(<Intersection_Observer />)
  const res = screen.getByRole('button')
  expect(res).toBeInTheDocument()
})