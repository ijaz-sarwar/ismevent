import React, { useState } from 'react';
import { db } from '../../firebase_config';
import { collection, addDoc } from 'firebase/firestore';
import { Form, Input, Button } from 'antd';
//import emailjs from '@emailjs/browser';
import './registerForm.css';
//import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RegisterForm() {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    setData(values);
    creatUser();
    form.resetFields();
    notify();
  };
  const notify = () =>
    toast.success('Congratulation You have Registered Successfully  ');
  const userCollectionRef = collection(db, 'Users');
  const creatUser = async () => {
    await addDoc(userCollectionRef, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      ticktype: data.Ticket_type,
    });
  };
  console.log(data, 'data');

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       'service_aifrt3j',
  //       'template_fqudfuh',
  //       e.target,
  //       'W3265dGYRr5q6weSN'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text, 'jkghjhgjh');
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div className='col-lg-6 col-md-12 p-0'>
      <div className='registration-block bg-registration overlay-dark'>
        <div className='block'>
          <div className='title text-left'>
            <h3>
              Register to <span className='alternate'>ISM Event</span>
            </h3>
            <p>Stay connected with us</p>
          </div>
          <Form form={form} name='control-hooks' onFinish={onFinish}>
            <div className='row'>
              <Form.Item
                style={{ marginRight: '20px' }}
                name='name'
                label='Enter Name'
                rules={[{ required: true }]}>
                <Input placeholder='Name' />
              </Form.Item>
              <Form.Item
                name='email'
                label='Enter email'
                rules={[{ required: true }]}>
                <Input placeholder='Email' />
              </Form.Item>
            </div>
            <div className='row'>
              <Form.Item
                style={{ marginRight: '20px' }}
                name='phone'
                label='Enter phone'
                rules={[{ required: true }]}>
                <Input placeholder='Phone' />
              </Form.Item>
              <Form.Item
                name='Ticket_type'
                label='Enter Ticket Type'
                rules={[{ required: true }]}>
                <Input placeholder='Ticket Type' />
              </Form.Item>
            </div>

            <Form.Item style={{ margin: '10px' }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
              <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Form.Item>
          </Form>
          );
          {/* <form action='#' className='row'>
            <div >
              <input
                type='text'
                className='form-control main'
                placeholder='Your Name'
              />
            </div>
            <div >
              <input
                type='email'
                className='form-control main'
                placeholder='Email'
              />
            </div>
            <div >
              <input
                type='text'
                className='form-control main'
                placeholder='Phone'
              />
            </div>
            <div >
              <div className='form-group'>
                <select className='form-control main' id='select-ticket'>
                  <option>Ticket Type</option>
                  <option>Starter</option>
                  <option>Standard</option>
                  <option>Platinum</option>
                </select>
              </div>
            </div>
            <div className='col-12'>
              <button type='submit' className='btn btn-white-md'>
                Register Now
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
