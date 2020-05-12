import { routes } from "../_config/data"

test("Can get the correct data", function() {
  expect(routes[0].title).toEqual("Client List")
})
