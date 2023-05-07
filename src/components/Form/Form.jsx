import { useState } from 'react';
import styles from './form.module.css';
import { validation } from '../../validation';

export default function Form(props) {

    const {login} = props;
    const {divPrinc, input, submit, img, label} = styles;
    const [userdata, setUserdata] = useState({
        email:'',
        password:'',
    });  
    const [errors,setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userdata);
    };

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserdata({...userdata, [property]: value});
        setErrors(validation({...userdata, [property]: value,}));
    };

  return (
    <div className={divPrinc}>
        <form onSubmit={handleSubmit}>
        <img className={img} src="https://miro.medium.com/v2/resize:fit:1000/1*aZB4dwe_JRcp1uMHiGYf8g.jpeg" alt=""></img>
        <label className={label}>Correo Electrónico:</label>
        <input className={input} name="email" value={userdata.email} onChange={handleChange} type="text"/>
        {
            errors.e1 ? (<p>{errors.e1}</p>) 
            : errors.e2 ? (<p>{errors.e2}</p>) : 
            errors.e3? (<p>{errors.e3}</p>) : ''
        }
        <label className={label}>Password:</label>
        <input className={input} name="password" value={userdata.password} onChange={handleChange} type="text"/>
        {
            errors.p1 ? (<p>{errors.p1}</p>) 
            : errors.p2 ? (<p>{errors.p2}</p>) : ''
        }
        <p></p>
        <button className={submit} type="submit">Submit</button>
        </form>
    </div>
  );
}
