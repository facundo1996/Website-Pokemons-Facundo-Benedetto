import React, {} from 'react';

import './Form.css';

const Form = () => {
    return(
        <div className="inputdiv">
            <h3 className="h3contact">Contact us</h3>
            <form className="formbox" action="">
                <input type="text" placeholder=" Name" className="form"/>
                <input type="email" placeholder=" Email address" className="form" required/>
                <input type="text" placeholder=" Subject" className="form"/>
                <textarea name="massage" placeholder=" Message" id="massage" cols="30" rows="10" className="form"></textarea>
            <button class="send">Send</button>
            </form>
        </div>
    )
};

export default Form;