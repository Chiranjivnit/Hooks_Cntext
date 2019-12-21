import React from 'react';
import './App.css';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import ComponentC from './component/ComponentC';



export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={'Chiranjiv'}  >
          <ChannelContext.Provider value={'Rout'} >
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>

      </header>
    </div>
  );
}

export default App;

// STEPS to USE Context in react.

//1: 1St create context then implementing the context method like line no:9 nd 10 .
//2: all the components wrap inside the UserContext and chanelContext like Line no. 17 to 23.
// 

//3 steps to Consume/available  the value in our whole application using context ( line no. 17 nd 18)
// just need to pass the value in our context Component.

// How to get those values in every component. 

// Which component we need values in that component 1st import useContext from react. like import React,{Usecontext} from 'react'.
// 2nd just import the context component (UserContext nd ChannelContext) which component we use those value  and then use that value.
// So heere we passing the value from App (parrent component ) and those value avalabel to every component, who r connected with App component.