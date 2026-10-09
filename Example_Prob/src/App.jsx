import Card from './Components/Card.jsx'

const App = () => {
  // Passing date through props destructuring
  // Here App is in the top most hirarechy data flows in this sequence:
  // App() => Card() => Title() / Discription() / Address()
  return (
    <>
      <Card
        picUrl="/random_anime_pic.jpg"
        title="Mr. Anshu Dagur"
        description="I'm a student of Panskura Banamali College."
        address="Ghatal,Kushpata" />
      
      <Card
        picUrl="/panda.jpg"
        title="Mr. Sudip Das"
        description="Currently working at CA farme."
        address="Kolkata,Salt Late secter VI" />
      
      <Card
        picUrl="/cat.jpg"
        title="Miss Priya Chowdary"
        description="Working at deloate as Senior Developer."
        address="Bangalure" />
    </>
  )
}

export default App; 