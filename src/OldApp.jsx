import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Counter';

function App() {
  const helloData =[
    {name: ' FARM BEST COWBOY',message: 'Welcome'},
    {name: 'best cowboy', message: 'Hello..'}
  ];

  return (
<div className='App'>
  <Counter />
  {helloData.map((data,index) =>(
    <Hello key={index} name ={data.name} message={data.message} />
  ))}

  <Contact email="Wisanu@gmail.com" phone="  0991234567"/>
</div>        
  );
}

export default App;