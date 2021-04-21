export default function Files({ name, age }) {
  console.log('props:', { name, age })

  return <h1>Hey {name} are you {age}?</h1>
}

export async function getStaticProps() {
  // This function is executed from the server side
  // You could execute a HTTP request here if you need to pass data to UI

  return {
    props: {
      name: 'Max',
      age: 32,
    }
  }
}
