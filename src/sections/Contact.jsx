// import emailjs from '@emailjs/browser';
// import { useRef, useState } from 'react';

// import useAlert from '../hooks/useAlert.js';
// import Alert from '../components/Alert.jsx';
// import toast from 'react-hot-toast';

// const Contact = () => {
//   const formRef = useRef();

//   const { alert, showAlert, hideAlert } = useAlert();
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: 'Anshuman Panda',
//           from_email: form.email,
//           to_email: 'anshumanpanda27@gmail.com',
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        
//       )
      
//       .then(
//         () => {
//           setLoading(false);
//           showAlert({
//             show: true,
//             text: 'Thank you for your message 😃',
//             type: 'success',
//           });
//           toast.success("Mail sent Succesfully")

//           setTimeout(() => {
//             hideAlert(false);
//             setForm({
//               name: '',
//               email: '',
//               message: '',
//             });
//           }, [3000]);
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           showAlert({
//             show: true,
//             text: "I didn't receive your message 😢",
//             type: 'danger',
//           });
//           toast.error("Failed to send Mail")
//         },
//       );
      

//   };

//   return (
//     <section className="c-space my-20 max-w-7xl mx-auto" id="contact">
//       {alert.show && <Alert {...alert} />}

//       <div className="relative min-h-screen flex items-center justify-center flex-col">
//         <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

//         <div className="contact-container">
//           <h3 className="head-text">Let's talk</h3>
//           <p className="text-lg text-white-600 mt-3">
//             Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
//             life, I’m here to help.
//           </p>

//           <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
//             <label className="space-y-3">
//               <span className="field-label">Full Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., John Doe"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Email address</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="field-input"
//                 placeholder="ex., johndoe@gmail.com"
//               />
//             </label>

//             <label className="space-y-3">
//               <span className="field-label">Your message</span>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="field-input"
//                 placeholder="Share your thoughts or inquiries..."
//               />
//             </label>

//             <button className="field-btn" type="submit" disabled={loading}>
//               {loading ? 'Sending...' : 'Send Message'}

//               <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// import { EarthCanvas } from "../components/canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//     emailjs
//           .send(
//             import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//             import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//             {
//               from_name: form.name,
//               to_name: 'Anshuman Panda',
//               from_email: form.email,
//               to_email: 'anshumanpanda27@gmail.com',
//               message: form.message,
//             },
//             import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            
//           )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");



import React, { useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { StarsCanvas } from "../components/canvas";

const ContactButton = ({ loading }) => {
  return (
    <button
      type="submit"
      className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-600 
                 text-white font-bold py-3 px-8 rounded-xl
                 transform transition-all duration-200 ease-in-out
                 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30
                 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed
                 flex items-center justify-center gap-2 min-w-[120px]"
      disabled={loading}
    >
      {loading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Sending...</span>
        </>
      ) : (
        <span className="flex items-center gap-2">
          Send 
          <svg 
            className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </span>
      )}
    </button>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
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
          to_name: 'Anshuman Panda',
          from_email: form.email,
          to_email: 'anshumanpanda27@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div className={` flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative`}>
        <StarsCanvas />
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75]  p-8 rounded-2xl '
        >
          <p className="text-white ">Get in touch</p>
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
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
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
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
              />
            </label>

            <ContactButton loading={loading} />
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");