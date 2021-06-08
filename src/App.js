import React, { useState } from 'react';
import ShowData from './Components/showData.js';
import allQuestion from './Components/questions.js';
function App() {
  const [question, setQuestion] = useState(allQuestion);
  return (<main>
    <div className="container">
      <h3>Basic questions and answers about React js.</h3>
      <section className="info">
        {
          question.map((item) => {
            return <ShowData key={item.id} {...item} />
          })
        }
      </section>
    </div>
  </main>);
}
export default App;