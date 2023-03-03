import React from 'react';


function contactForm(){
    return <>
    
<div className="mb-3">
<label for="yourName" className="form-label">Your Name</label>
  <input type="text" className="form-control" id="yourName" placeholder="John Smith"/>
  <label for="yourEmail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="yourEmail" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </>
}


export default contactForm;