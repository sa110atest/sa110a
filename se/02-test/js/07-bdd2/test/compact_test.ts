import { expect } from "../../../../lib/expect.ts";
import * as _ from "../src/ccclodash.ts";

Deno.test("compact", () => {
  expect(_.compact([0, 1, false, 2, '', 3])).to.equal([ 1, 2, 3])
})