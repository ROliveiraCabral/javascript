const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`Bill value $: ${bill}`);
console.log(`Tip value $: ${tip}`);
console.log(`Total value $: ${bill + tip}`);
