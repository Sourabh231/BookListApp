import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          cpassword: formData.cpassword,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('User registered successfully');
        navigate('/');
      }
    }
    // catch (err) {
    //   console.log(err);
    // }

    // try{
    //     const {data} = await axios.post('http://localhost:5000/api/v1/user/register',
    //     {
    //       username : formData.username,
    //       password : formData.password,
    //       cpassword:formData.cpassword
    //     }
    //     );
    //     if(data.success){
    //       alert('User registered successfull');
    //       navigate('/');
    //     }
    // }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='register'>
      <div className='register-container'>
        <h1>REGISTER</h1>

        <form>
          <input type='text' placeholder='Enter your Username' name='username' onChange={handleChange} />
          <br />
          <input type='password' placeholder='Enter your password' onChange={handleChange} />
          <br />
          <input type='password' placeholder='Enter your confirm password' onChange={handleChange} />

          <br />
          <button onClick={handleSubmit}  className='registerbtn' type='submit'>
            Register
          </button>
          <br />
          <a href='/'>MEMBER LOGIN</a>
        </form>
      </div>
    </div>
  );
}

export default Register;
