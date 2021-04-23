
const productsService = {
  async getAllInStock() {
    // Just a simple fake object to start with
    return [
      { id: 1, name: 'MacBook Pro', model: '13', year: 2018 },
      { id: 2, name: 'Mac Mini', model: 'M1', year: 2020 },
      { id: 3, name: 'Mac Pro', model: '', year: 2020 },
    ]
  }
}

export default productsService
