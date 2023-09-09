import emailjs from '@emailjs/browser';

export const sendEmail = (templateParams) => {
  emailjs
    .send(
      `${process.env.EMAIL_JS_SERVICE}`,
      `${process.env.EMAIL_JS_TEMPLATE}`,
      templateParams,
      `${process.env.EMAIL_JS_PUBLIC_KEY}`
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
};
