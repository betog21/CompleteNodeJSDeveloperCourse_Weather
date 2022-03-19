# CompleteNodeJSDeveloperCourse_Weather
Initial commit on dev branch.
---

## Notes:
### Example destructuring:
```js
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

const {label: productLabel, stack, rating=5} = product
console.log(productLabel,stock,rating)
```
