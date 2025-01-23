import './style.css'

export function Form() {
    return (
        <div className="section">
            <h6 className="h6-title" id='contact'>Contact</h6>
            <div className="form-card1">
  <div className="form-card2">
    <form className="form">
      <p className="form-heading">Get In Touch</p>

      <div className="form-field">
        <input required="" placeholder="Name" className="input-field" type="text" />
      </div>

      <div className="form-field">
        <input
          required=""
          placeholder="Email"
          className="input-field"
          type="email"
        />
      </div>

      <div className="form-field">
        <input
          required=""
          placeholder="Subject"
          className="input-field"
          type="text"
        />
      </div>

      <div className="form-field">
        <textarea
          required=""
          placeholder="Message"
          cols="30"
          rows="3"
          className="input-field"
        ></textarea>
      </div>

      <button className="sendMessage-btn">Send Message</button>
    </form>
  </div>
</div>

        </div>
    )
}