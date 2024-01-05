import useDropdown from "./useToggle";

const items = [{ text: "Apple" }, { text: "Orange" }, { text: "Banana" }];

it("should handle dropdown open/close state", () => {
  const { result } = renderHook(() => useDropdown(items));

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggleDropdown();
  });

  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.toggleDropdown();
  });

  expect(result.current.isOpen).toBe(false);
});