import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  // Gives us error object from contactAction
  const data = useActionData();
  
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      {/* This doesn't send a server request - just a way of handling front-end */}
      {/* Action is for when the form is submitted - find action associated with route in main routes App.js */}
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}

// request has all the input values
export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  // Error check
  if(submission.message.length < 10) {
    return {error: 'Message must be over 10 chars long'};
  }
  
  // Redirect the user on success
  return redirect('/');
} 