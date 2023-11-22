import "@testing-library/jest-dom";
import { Mocked, vi } from "vitest";

import { render, screen, within, fireEvent, act } from "@/__tests__/test-utils";

import App from "@/pages/auth/register";
import axiosWithConfig from "@/utils/apis/axiosWithConfig";

vi.mock("@/utils/apis/axiosWithConfig");

const mockedAxios = axiosWithConfig as Mocked<typeof axiosWithConfig>;
const formInput = {
  "input-full-name": "Test",
  "input-email": "test@mail.com",
  "input-password": "abc5dasar",
  "input-repassword": "abc5dasar",
  "input-address": "test",
  "input-phone-number": "6822222222222",
};

describe("Register Page", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />);
    });
  });

  describe("Renders the page", () => {
    it("should render the page", () => {
      const form = screen.getByLabelText("form-register");
      expect(form).toBeTruthy();

      for (const input in formInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }

      expect(within(form).getByLabelText("btn-submit")).toBeTruthy();
    });

    it("should displays value inside input", () => {
      const form = screen.getByLabelText("form-register");

      let input: keyof typeof formInput;
      for (input in formInput) {
        const component = within(form).getByLabelText(input);
        fireEvent.change(component, {
          target: { value: formInput[input] },
        });
        expect(component).toHaveValue(formInput[input]);
      }
    });
  });

  describe("Action for Register", () => {
    it("should show error message when some of input is missing a value", async () => {
      await act(async () => {
        fireEvent.click(screen.getByLabelText("btn-submit"));
      });

      const form = screen.getByLabelText("form-register");

      expect(within(form).getByText("Full name is required")).toBeTruthy();
      expect(within(form).getByText("Email is required")).toBeTruthy();
      expect(within(form).getByText("Password is required")).toBeTruthy();
      expect(
        within(form).getByText("Retype password is required")
      ).toBeTruthy();
      expect(within(form).getByText("Address is required")).toBeTruthy();
      expect(
        within(form).getByText("Phone number minimum length is 7")
      ).toBeTruthy();
    });

    it("should show error message when password is not match", async () => {
      const form = screen.getByLabelText("form-register");
      const dupeFormInput = { ...formInput, "input-password": "abc5dasa" };

      let input: keyof typeof dupeFormInput;
      for (input in dupeFormInput) {
        const component = within(form).getByLabelText(input);
        fireEvent.change(component, {
          target: { value: dupeFormInput[input] },
        });
      }

      await act(async () => {
        fireEvent.click(screen.getByLabelText("btn-submit"));
      });

      expect(within(form).getByText("Password don't match")).toBeTruthy();
    });

    it("should display failed toast when email is already exist", async () => {
      const form = screen.getByLabelText("form-register");

      let input: keyof typeof formInput;
      for (input in formInput) {
        const component = within(form).getByLabelText(input);
        fireEvent.change(component, {
          target: { value: formInput[input] },
        });
      }

      mockedAxios.post.mockRejectedValueOnce({
        data: {
          message: "User already exist, please login.",
        },
      });

      await act(async () => {
        fireEvent.click(screen.getByLabelText("btn-submit"));
      });

      setTimeout(() => {
        expect(screen.getByText("User already exist, please login."));
      }, 2000);
    });

    it("should display successful toast when using unique email", async () => {
      const form = screen.getByLabelText("form-register");
      const dupeFormInput = { ...formInput, "input-email": "test3@mail.com" };

      let input: keyof typeof dupeFormInput;
      for (input in dupeFormInput) {
        const component = within(form).getByLabelText(input);
        fireEvent.change(component, {
          target: { value: dupeFormInput[input] },
        });
      }

      mockedAxios.post.mockResolvedValueOnce({
        data: {
          message: "User registered, please login.",
        },
      });

      await act(async () => {
        fireEvent.click(screen.getByLabelText("btn-submit"));
      });

      setTimeout(() => {
        expect(screen.getByText("User registered, please login."));
      }, 2000);
    });
  });
});
