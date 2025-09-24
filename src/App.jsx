
import { useState } from 'react';
import './App.jsx';
import ChooseAction from './assets/components/ChooseAction.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rideexplore from './assets/components/Rideexplore.jsx';
import Rideabout from './assets/components/Rideabout';
import Ridesafety from './assets/components/Ridesafety.jsx';
import Ridecontactus from './assets/components/Ridecontactus.jsx';
import Ride from './assets/components/Ride.jsx';
import Ridelogin from './assets/components/Ridelogin.jsx';
import Ridesignup from './assets/components/Ridesignup.jsx';
import Ridebook from './assets/components/Ridebook.jsx';
// import ChooseAction from './assets/components/ChooseAction.jsx';
import RidePrePayment from './assets/components/RidePrePayment.jsx';
import Ridepayment from './assets/components/Ridepayment.jsx';
import Ridecard from './assets/components/Ridecard.jsx';
import RideTransactionSuccess from './assets/components/RideTransactionSuccess.jsx';
import Ridephonepay from './assets/components/Ridephonepay.jsx';
import RideForm from './assets/components/RideForm.jsx';
import UserComponent from './assets/components/UserComponent.jsx';
import RideDetailsCard from './assets/components/RideDetailsCard.jsx';
// import Signup from './assets/components/signup.jsx';
import Login from './assets/components/Login.jsx';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    
     <BrowserRouter>
<Routes>
        <Route path="/" element={<Rideexplore />} />
        {/* <Route path="/signup" element={<Ridesignup />} />
        <Route path="/login" element={<Ridelogin />} /> */}
           <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
                <Route path="/ride" element={<Ride />} />
        <Route path="/ridebook" element={<Ridebook />} />
        <Route path="/ChooseAction" element={<ChooseAction />} />
        <Route path="/rideform" element={<RideForm />} />
        <Route path="/usercomponent" element={<UserComponent />} />
         <Route path="/ridedetailscard" element={<RideDetailsCard />} />
<Route path="/rideprepayement" element={<RidePrePayment />} />
<Route path="/ridepayment" element={<Ridepayment />} />
<Route path="/ridecard" element={<Ridecard />} />
<Route path="/ridephonepay" element={<Ridephonepay />} />
      
<Route path="/ridetransactionsuccess" element={<RideTransactionSuccess />} />

        <Route path="/Rideabout" element={<Rideabout />} />
        <Route path="/Ridesafety" element={<Ridesafety />} />
        <Route path="/Ridecontact" element={<Ridecontactus />} />
        {/* <Route path="/Ridelogin" element={<Ridelogin />} />
            <Route path="/Ridesignup" element={<Ridesignup />} /> */}
 {/* <Route path="/Ride" element={<Ride />} /> */}



 
      </Routes>
</BrowserRouter>  

 

    </div>
  );
}

export default App;










// <div className="app-container">
//       {step === 'home' && <Rideexplore onExplore={() => setStep('options')} />}

//       {step === 'options' && (
//         <div className="options-container">
//           <h2>What would you like to do?</h2>
//           <button className="action-button" onClick={() => setStep('choice')}>
//             Offer a Ride
//           </button>
//         </div>
//       )}

//       {step === 'choice' && (
//         <div className="choice-container">
//           <h2>Select an action:</h2>
//           <button className="action-button" onClick={() => setStep('offer')}>
//             I want to offer a ride
//           </button>
//           <button className="action-button" onClick={() => setStep('accept')}>
//             I want to accept a ride
//           </button>
//         </div>
//       )}

//       {step === 'offer' && <RideForm onCreate={() => alert('Ride created!')} />}

//       {step === 'accept' && <UserComponent onSubmit={() => alert('Submitted route!')} />}
//     </div>