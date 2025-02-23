import React, { useState } from 'react';
import '../Css/Contact.css'; // External CSS
import { message } from 'antd';
import { Input, Button, Checkbox, Form } from 'antd';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    message: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const isValidPhoneNumber = (phoneNumber) => /^\d{10}$/.test(phoneNumber);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Must be 10 digits';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form Submitted', formData);
      message.success("Form submitted successfully!");
      setFormData({
        firstName: '',
        email: '',
        phoneNumber: '',
        message: '',
        termsAccepted: false,
      });
      setErrors({});
    } else {
      message.error("Please fill out all required fields correctly.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="contact-container"  id="contact">
      {/* <div className="floating-icon">
        <img src={b2} alt="Document Icon" />
      </div> */}
      <div className="contact-box">
        <h2>Contact Us</h2>
        <Form className="contact-form" onFinish={handleSubmit}>
          <Form.Item validateStatus={errors.firstName ? "error" : ""} help={errors.firstName}>
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item validateStatus={errors.email ? "error" : ""} help={errors.email}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item validateStatus={errors.phoneNumber ? "error" : ""} help={errors.phoneNumber}>
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item validateStatus={errors.message ? "error" : ""} help={errors.message}>
            <Input.TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            >
              I accept terms & conditions
            </Checkbox>
            {errors.termsAccepted && <div className="error">{errors.termsAccepted}</div>}
          </Form.Item>
          <button className="btn" type="primary" htmlType="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;