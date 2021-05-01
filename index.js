
const object = {
  firstKey: 'first value',
  secondKey: 'second value'
}
console.log(object.secondKey)

const first = Math.random()
console.log(first)

const second = Math.random()
console.log(second)

const speeches = {
	greeting: function () {
		console.log('hello')
	},
	farewell: () => console.log('goodbye')
}
speeches.greeting()
speeches.farewell()