import React, {useState} from 'react';

function ContactForm(){
    const[formData, setFormData] = useState({
        name:' ',
        email:' ',
        message:' '
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

        const handleSubmit=(e)=>{

            e.preventDefault();
            
            alert(`Form submitted with data: ${JSON.stringify(formData)}`);
        };
        
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <lable>Name:</lable>
                    <input type='text' name="name" value={formData.name} onChange={handleChange}/>
                </div>

                <div>
                    <lable>Email:</lable>
                    <input type='email' name="email" value={formData.email} onChange={handleChange}/>
                </div>

                <div>
                    <lable>Message:</lable>
                    <input name="message" value={formData.name} onChange={handleChange}/>
                </div>

                <button type="submit">Submit</button>

            </form>
        );
}

export default ContactForm;