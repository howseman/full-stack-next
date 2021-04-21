
const helloService = {
  async sayHi({ id, name }: { id: number, name: string }) {
    // TODO: Add some interesting logic here...
    return { id, name }
  }
}

export default helloService
