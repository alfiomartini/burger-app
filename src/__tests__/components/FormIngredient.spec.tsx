import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { FormIngredient } from "../../components/formIngredient/FormIngredient";
import { Ingredient } from "../../interfaces";

describe("<FormIngredient />", () => {
  const mockEditIngredient = jest.fn();
  const mockAddIngredient = jest.fn();
  const mockSetCurrentIngredient = jest.fn();
  it("<FormIngredient /> rendering with defaults", () => {
    render(
      <FormIngredient
        editIngredient={mockEditIngredient}
        addIngredient={mockAddIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
        title="Form Title"
        currentIngredient={{} as Ingredient}
      />
    );
    const formTitle = screen.getByText(/form title/i);
    expect(formTitle).toBeInTheDocument();
    expect(screen.getByText(/name*/i)).toBeInTheDocument();
    expect(screen.getByText(/quantity*/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();

    const addIngredient = screen.getByRole("button", {
      name: /submit/,
    });
    expect(addIngredient).toBeInTheDocument();
    expect(addIngredient).toHaveTextContent(/add ingredient/i);

    const name = screen.getByRole("textbox", { name: /name/i });
    expect(name).toHaveValue("");

    const quantity = screen.getByRole("textbox", { name: /quantity/i });
    expect(quantity).toHaveValue("");

    const description = screen.getByRole("textbox", { name: /description/i });
    expect(description).toHaveValue("");
  });

  it("<FormIngredient /> rendering without defaults", () => {
    render(
      <FormIngredient
        editIngredient={mockEditIngredient}
        addIngredient={mockAddIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
        title="Form Title"
        currentIngredient={{} as Ingredient}
        name_="name"
        quantity_="100"
        description_="description"
      />
    );

    expect(screen.getByText(/name*/i)).toBeInTheDocument();
    expect(screen.getByText(/quantity*/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();

    const name = screen.getByRole("textbox", { name: /name/i });
    expect(name).toHaveValue("name");

    const quantity = screen.getByRole("textbox", { name: /quantity/i });
    expect(quantity).toHaveValue("100");

    const description = screen.getByRole("textbox", { name: /description/i });
    expect(description).toHaveValue("description");
  });

  it("<FormIngredient /> should render the 'update ingredient' button", () => {
    const ingredient: Ingredient = {
      id: "id",
      quantity: 100,
      description: "description",
      name: "name",
    };

    render(
      <FormIngredient
        editIngredient={mockEditIngredient}
        addIngredient={mockAddIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
        title="Form Title"
        currentIngredient={ingredient}
      />
    );

    const updateIngredient = screen.getByRole("button", {
      name: /submit/,
    });
    expect(updateIngredient).toBeInTheDocument();
    expect(updateIngredient).toHaveTextContent(/update ingredient/i);
  });

  it("should invoke 'add ingredient'", async () => {
    const user = userEvent.setup();

    render(
      <FormIngredient
        editIngredient={mockEditIngredient}
        addIngredient={mockAddIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
        title="Form Title"
        currentIngredient={{} as Ingredient}
      />
    );

    const name = screen.getByRole("textbox", { name: /name/i });
    await user.type(name, "name");

    const quantity = screen.getByRole("textbox", { name: /quantity/i });
    await user.type(quantity, "100");

    // this is optional
    const description = screen.getByRole("textbox", { name: /description/i });
    await user.type(description, "description");

    const addIngredient = screen.getByRole("button", {
      name: /submit/,
    });

    await user.click(addIngredient);
    expect(mockAddIngredient).toHaveBeenCalledTimes(1);
  });

  it("should invoke 'edit ingredient'", async () => {
    const user = userEvent.setup();
    const ingredient: Ingredient = {
      id: "id",
      quantity: 100,
      description: "description",
      name: "name",
    };

    render(
      <FormIngredient
        editIngredient={mockEditIngredient}
        addIngredient={mockAddIngredient}
        setCurrentIngredient={mockSetCurrentIngredient}
        title="Form Title"
        currentIngredient={ingredient}
      />
    );

    const name = screen.getByRole("textbox", { name: /name/i });
    await user.type(name, "name");

    const quantity = screen.getByRole("textbox", { name: /quantity/i });
    await user.type(quantity, "100");

    // this is optional
    const description = screen.getByRole("textbox", { name: /description/i });
    await user.type(description, "description");

    const updateIngredient = screen.getByRole("button", {
      name: /submit/,
    });

    await user.click(updateIngredient);
    expect(mockEditIngredient).toHaveBeenCalledTimes(1);
  });
});
