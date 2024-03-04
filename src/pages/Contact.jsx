import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "../models/canvas";
import { slideIn } from "../utils/motion";
import useAlert from "../hooks/useAlert";
import { Alert, Footer } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abdurrahman Idris",
          from_email: form.email,
          to_email: "abdurrahmanidris235@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });
  
          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
  
          showAlert({
            show: true,
            text: `Failed to send your message: ${error.message}`,
            type: "danger",
          });
        }
      )
      .catch((error) => {
        // Catch any other errors that may occur during the email sending process
        setLoading(false);
        console.error(error);
  
        showAlert({
          show: true,
          text: `An error occurred`,
          type: "danger",
        });
      });
  };
  
  

  return (
    <div className='relative z-0 mt-20'>
       {alert.show && <Alert {...alert} />}
       <div
          className={`xl:mt-12 flex md:p-10 md:ml-4 xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
          >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className='text-black py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className='text-black py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className='text-black py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                disabled={loading}
                className='py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-secondary link-button'
                style={{ width: '150px' }}
              >

                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[400px] h-[350px]'
          >
            <EarthCanvas />
          </motion.div>
        </div>
        <div className="md:pl-14">
          <Footer/>
        </div>
        
        <StarsCanvas />
    </div>
    
  );
};

export default Contact;