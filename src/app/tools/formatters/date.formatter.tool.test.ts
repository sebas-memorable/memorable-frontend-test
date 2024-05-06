import { dateFormatterTool } from "src/app/tools/formatters/date.formatter.tool";

const fn = dateFormatterTool;

describe("DateFormatterTool", () => {
  const dateString = "2019-01-21T00:00:00.000-03:00";

  it("should return formatted date according to locale", () => {
    expect(fn(new Date(dateString))).toBe("01/21/2019");
    expect(fn(new Date(dateString), "en-US")).toBe("01/21/2019");
    expect(fn(new Date(dateString), "es-AR")).toBe("21/01/2019");
    expect(fn(new Date(dateString), "en-GB")).toBe("21/01/2019");
  });
});
