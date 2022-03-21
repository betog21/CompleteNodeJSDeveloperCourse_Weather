# CompleteNodeJSDeveloperCourse_Weather
Initial commit on dev branch.

## Instructions:
1. Clone the repo.
2. Install dependencies:
```sh
npm install
```
3. Create a .env file and set this environment variables:
```sh
# For the weather app
ACCESSKEY='VALUE'

# For the map app
ACCESS_TOKEN='VALUE'
```
4. Run the command with the name of the place to search the weather for. If the name of te place has two or more words, use double commas.
```sh
# Example for Piladelphia
node app.js Philadelphia

# Example for New York
node app.js "New York"
```
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
