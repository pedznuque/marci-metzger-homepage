import React, { useRef, useState } from "react";
import { FaCircleCheck, FaLocationArrow, FaLocationDot, FaPaperPlane, FaPhone } from "react-icons/fa6";
import "./CallOrVisit.css";

function CallOrVisit() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  return (
    <section id="contact" className="call_or_visit_section" aria-labelledby="call-or-visit-title">
      <div className="call_or_visit_inner">
        <header className="call_or_visit_heading">
          <p>GET IN TOUCH</p>
          <h2 id="call-or-visit-title">Call or Visit</h2>
          <span>Questions about buying or selling? Marci is here to help.</span>
        </header>

        <div className="call_or_visit_content">
          <form
            className="contact_message_form"
            ref={formRef}
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <h3>{submitted ? "Message submitted" : "Send a message"}</h3>
            {!submitted && (
              <>
                <label className="contact_form_field">
                  <span>Name</span>
                  <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
                </label>
                <label className="contact_form_field">
                  <span>Email*</span>
                  <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </label>
                <label className="contact_form_field contact_message_textarea">
                  <span>Message</span>
                  <textarea name="message" rows="4" placeholder="How can we help?" required />
                </label>
                <button className="contact_form_submit" type="submit">
                  <FaPaperPlane aria-hidden="true" /> Send Message
                </button>
              </>
            )}
            {submitted && (
              <div className="contact_form_success" role="status" aria-live="polite">
                <p className="contact_form_confirmation">
                  <FaCircleCheck aria-hidden="true" /> Message submitted. This demo form does not send messages.
                </p>
                <button
                  className="contact_form_new_message"
                  type="button"
                  onClick={() => {
                    formRef.current?.reset();
                    setSubmitted(false);
                  }}
                >
                  Send another message
                </button>
              </div>
            )}
          </form>

          <div className="office_details">
            <h3>Marci Metzger - The Ridge Realty Group</h3>
            <a
              className="office_detail_link"
              href="https://maps.google.com/?q=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot aria-hidden="true" />
              <span>3190 HW-160, Suite F, Pahrump, Nevada 89048</span>
            </a>
            <a className="office_detail_link office_phone_link" href="tel:+12069196886">
              <FaPhone aria-hidden="true" />
              <span>(206) 919-6886</span>
            </a>

            <div className="office_hours">
              <h3>Office Hours</h3>
              <p className="office_hours_today">Open today <strong>08:00 am – 07:00 pm</strong></p>
              <p className="office_hours_daily"><span>Open daily</span><strong>8:00 am - 7:00 pm</strong></p>
              <p className="office_hours_note">Appointments outside office hours are available upon request. Just call!</p>
            </div>

            <div className="office_map">
              <iframe
                title="Map to Marci Metzger's office in Pahrump"
                src="https://maps.google.com/maps?q=3190+S+Hwy+160,+Suite+F,+Pahrump,+NV+89048&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="office_map_actions">
              <a
                className="office_directions_button"
                href="https://www.google.com/maps/dir/?api=1&destination=3190+S+Hwy+160,+Suite+F,+Pahrump,+NV+89048"
                target="_blank"
                rel="noreferrer"
              >
                <FaLocationArrow aria-hidden="true" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallOrVisit;
