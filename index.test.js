console.log(import.meta.resolve("file:///C:/non-exists.js"))

if (typeof test === "function") {
	test("", () => {}); // Make Jest pass.
}
