import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCovidStatusOfCountries = async () => {
      try {
        const response = await fetch(`https://f8381755-db4c-4bd8-a55b-a635eece1729-dev.e1-us-east-azure.choreoapis.dev/covid-status-of-countries/covid-backend/covid-status-328/v1.0/countries`, { 
          method: 'get', 
          headers: new Headers({
            'Accept': 'application/json',
            'API-Key': 'eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJiNzA5ZTgzNS02ZGJlLTQ4OTktODM5MC1jOWYxYWM0MTdhNWRAY2FyYm9uLnN1cGVyIiwiYXVkIjoiY2hvcmVvOmRlcGxveW1lbnQ6c2FuZGJveCIsImlzcyI6Imh0dHBzOlwvXC9zdHMuY2hvcmVvLmRldjo0NDNcL2FwaVwvYW1cL3B1Ymxpc2hlclwvdjJcL2FwaXNcL2ludGVybmFsLWtleSIsImtleXR5cGUiOiJTQU5EQk9YIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJDb3ZpZCBiYWNrZW5kIC0gQ292aWQgU3RhdHVzIiwiY29udGV4dCI6IlwvZjgzODE3NTUtZGI0Yy00YmQ4LWE1NWItYTYzNWVlY2UxNzI5XC9jb3ZpZC1zdGF0dXMtb2YtY291bnRyaWVzXC9jb3ZpZC1iYWNrZW5kXC9jb3ZpZC1zdGF0dXMtMzI4XC92MS4wIiwicHVibGlzaGVyIjoiY2hvcmVvX3Byb2RfYXBpbV9hZG1pbiIsInZlcnNpb24iOiJ2MS4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE3MTI4OTc3MjQsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTcxMjg5NzEyNCwianRpIjoiNzFiYzlhZjktYTdkZi00M2UxLWJjYjAtYTMwM2RhYjJlMmZlIn0.Z-opehTrlTYtN7m0te6La9J0lpEqooTJYNjmNR52Xmzz8YHJELfR_lrvlHFYxY6CwFZSTGK18orPulY5ZQP7ce7zoBv9TGHvzO0Epc-sUrnhTbjhiU82xUanwfR7DbXt5bQiZz7X6XFK-VkT6JDPQi9Fa4JnXKOE-86BxXQjnnaUu3GSFvmGrjmgpu2vzo4Q2qZnFs656BqaO65-vwwtcX20UYX_RaliFBeczmq1aVNr5Em2Kk7Ai4ipOPbF__IvLuR5O5Za8HL1CFWJOHDsMqxQolPru-tmpPe4sGYWyAQImruI7zsere3Xa3ufNzT5ZRNNwXUuose7yZPvVocag8-1BfNe-dKWXKRksYQs4F9RZUlKw6_ghhvKNAZbcGL1eUqarvzeGsFo7DIa0xyRCtajBi5qV0S4UY-2gUSh1z04p625aKon_X5FJlZgng0vYxcAdiFm2-9M_eYayS9isGSu84YaoU5TdugD3Rwr3iBLfcwBvCYxrnVXkf3ViO0gUY8EVt7FqukExlpe3o4bpqHegrowYgPpjrcGYvyNrFmTGqzIHC-dpQJp84uz4h1ZaAwgwotZp3gdDM4Z3rBbR4yG2FazrKuieN8rWnOa-H34Vxp08NA-qYPjEUotGQG2wHwZfvYjJfeJ_llEY_Qo0xRuSlg8AYwWCOloJqSS5_E' 
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        setData(await response.json());
      } catch (err) {
        setData([]);
      }
    }
    getCovidStatusOfCountries();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid status:</h1>
        {data.map((covidStatus) => (<div><p><strong>{covidStatus.country}</strong></p><br/><p>Cases: {covidStatus.cases}</p><br/><p>Deaths: {covidStatus.deaths}</p><br/><p>Recovered: {covidStatus.recovered}</p><br/><p>Active: {covidStatus.active}</p><br/></div>))}
      </header>
    </div>
  );
}

export default App;
