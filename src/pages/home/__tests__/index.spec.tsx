import { render } from "@testing-library/react";

import Homepage from "..";

describe("Homepage", () => {
  it("should renders", () => {
    const { container } = render(<Homepage />);

    expect(container).toMatchSnapshot();
  });
});
