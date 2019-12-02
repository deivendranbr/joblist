import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const inputString = `Chipotle, Lead Chef, Denver, CO
                    Equity, Stunt Double, Los Angeles, CA
                    IBM, Manager of Fun, Albany, NY
                    Tit 4 Tat, Associate Tattoo Artist, Brooklyn, NY
                    IBM, Assistant to the Regional Manager, Scranton, PA
                    Philharmonic, Lead Guitarist, Woodstock, NY
                    --JSON FORMAT BELOW--
                    {"name": "Spaceship Repairman", "location": {"city": "Olympus Mons", "state": "Mars"}, 
                    "organization": "Interplanetary Enterprises"}
                    {"name": "State Park Ranger", "location": {"city": "Ray Brook", "state": "NY"}, 
                    "organization": "Adirondack Park Agency"}
                    {"name": "Lead Cephalopod Caretaker", "location": {"city": "Atlantis", "state": "Oceania"}, 
                    "organization": "Deep Adventures"}`
ReactDOM.render(
    <App string={inputString} />,
    document.getElementById('root')
);
