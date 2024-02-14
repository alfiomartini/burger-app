import { render } from "@testing-library/react";
import { Badge } from "../../components/badge/Badge";

test("demo", () => {
  render(
    <Badge
      name="name"
      id="id"
      quantity={100}
      description="description"
      removeIngredient={jest.fn()}
      setCurrentIngredient={jest.fn()}
    />
  );
  expect(true).toBeTruthy();
});
