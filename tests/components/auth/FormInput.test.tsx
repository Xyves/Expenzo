import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import FormInput from "@/app/components/auth/FormInput";
import { userEvent } from "@testing-library/user-event/dist/cjs/setup/index.js";
describe("FormInput", () => {
  it("renders the label and input", () => {
    const { container } = render(
      <FormInput
        name="username"
        label="Username"
        value=""
        onValueChange={vi.fn()}
      />,
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /username/i }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Uses text as the default input type", () => {
    render(
      <FormInput
        name="username"
        label="Username"
        value=""
        onValueChange={vi.fn()}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Username" });
    expect(input).toHaveAttribute("type", "text");
  });

  it("Calls onValueChange with the updated value", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <FormInput
        name="username"
        label="Username"
        value=""
        onValueChange={onValueChange}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Username" });

    await user.type(input, "v");

    expect(onValueChange).toHaveBeenCalledWith("v");
  });

  it("Does not render the visibility button for non-password inputs", () => {
    render(
      <FormInput
        name="username"
        value=""
        label="Username"
        type="text"
        onValueChange={vi.fn()}
      />,
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it('Renders password inputs as type="password" initially', () => {
    render(
      <FormInput
        name="password"
        value=""
        label="Password"
        type="password"
        onValueChange={vi.fn()}
      />,
    );

    const input = screen.getByLabelText("Password");
    const showPasswordButton = screen.getByRole("button", {
      name: "Show password",
    });

    expect(input).toHaveAttribute("type", "password");
    expect(showPasswordButton).toBeInTheDocument();
  });

  it('Changes a password input to type="text" after clicking “Show password', async () => {
    const user = userEvent.setup();
    render(
      <FormInput
        name="password"
        value=""
        label="Password"
        type="password"
        onValueChange={vi.fn()}
      />,
    );
    const input = screen.getByLabelText("Password");

    await user.click(screen.getByRole("button", { name: "Show password" }));

    expect(input).toHaveAttribute("type", "text");

    expect(
      screen.queryByRole("button", { name: "Show password" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Hide password" }),
    ).toBeInTheDocument();
  });

  it('Changes it back to type="password" after clicking hide password', async () => {
    const user = userEvent.setup();
    render(
      <FormInput
        name="password"
        value=""
        label="Password"
        type="password"
        onValueChange={vi.fn()}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Show password" }));

    expect(
      screen.queryByRole("button", { name: "Hide password" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Hide password" }));

    expect(
      screen.getByRole("button", { name: "Show password" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Hide password" }),
    ).not.toBeInTheDocument();
  });

  it('Displays the provided error message with role="alert"', () => {
    render(
      <FormInput
        name="username"
        error={"Username must contain at least 4 characters"}
        value="a"
        label="Username"
        type="text"
        onValueChange={vi.fn()}
      />,
    );
    const error = screen.getByRole("alert");

    const input = screen.getByLabelText("Username");

    expect(error).toHaveTextContent(
      "Username must contain at least 4 characters",
    );
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", "username-error");
  });
});
