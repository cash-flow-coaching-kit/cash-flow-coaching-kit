import { PrivateRoutes, routeVarReplacement, PublicRoutes } from "../routes"
import { RouteProps } from "react-router-dom"
import checkIfPublic from "../checkIfPublic"

describe("Unit tests for the routes utilities", () => {
  test("Able to correctly replace route variables", function() {
    const r = PrivateRoutes.HealthCheckQuiz
    const q: [string, string][] = [[":id?", ""]]
    const q1: [string, string][] = [[":id?", "4"]]
    const q2: [string, string][] = []

    expect(routeVarReplacement(r, q)).toEqual("/health-check/quiz/")
    expect(routeVarReplacement(r, q1)).toEqual("/health-check/quiz/4")
    expect(routeVarReplacement(r, q2)).toEqual(r)
  })

  test("Test if the route is a public", function() {
    const l: RouteProps["location"] = {
      pathname: PublicRoutes.Home,
      search: "",
      hash: "",
      state: {}
    }

    expect(checkIfPublic(l)).toBeTruthy()

    l.pathname = PrivateRoutes.SessionFiles
    expect(checkIfPublic(l)).toBeFalsy()

    // This request would not be allowed within the app
    // used for coverage percentage
    expect(checkIfPublic(null)).toBeFalsy()
  })
})
