const miss = ("./adder");
describe("miss", () =>{
	it("should find missing numbers", () => {
		expect(miss('1', '4', '6')).toBe(2, 3, 5);
	});
});