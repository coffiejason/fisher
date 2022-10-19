import { Navbar } from "../components"
import { ChangeEvent, useState } from "react"

const Onboarding = () => {
  const [formData,setFormData] = useState({
    user_id: "",
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity: 'man',
    gender_interest: 'woman',
    email: '',
    url: '',
    about: '',
    matches: []
  })

  const arr = [1,2,4,5,6,7,8,0]

  const [counter,setCounter] = useState(0)
  const handleSubmit = () => { }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //console.log('e',e);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; 
    const name = e.target.name;
    //console.log('name: '+name,' value: '+value)

    setFormData((prev) => {
      return {...prev,[name]:value}
    })
  }

  console.log(formData)

  return (
    <>
      <Navbar minimal={true}
        setShowModal={() => { }}
        showModal={false}
      />

      <div className="onboarding">
        <hr />
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={(e)=>handleChange(e)}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={(e)=>handleChange(e)}
              />
              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={(e)=>handleChange(e)}
              />
              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={(e)=>handleChange(e)}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender_identity"
                value={"man"}
                onChange={(e)=>handleChange(e)}
                checked={formData.gender_identity === "man" }
              />
              <label htmlFor="man-gender-identity">Man</label>

              
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender_identity"
                value={"woman"}
                onChange={(e)=>handleChange(e)}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>

              
              <input
                id="more-gender-identity"
                type="radio"
                name="gender_identity"
                value={"more"}
                onChange={(e)=>handleChange(e)}
                checked={formData.gender_identity === "more"}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
                id="show-gender"
                type="checkbox"
                name="show_gender"
                onChange={(e)=>handleChange(e)}
                checked={formData.show_gender}
            />

            <label>Show Me</label>
            <div className="multiple-input-container">
              
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                value={"man"}
                onChange={(e)=>handleChange(e)}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>

              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                value={"woman"}
                onChange={(e)=>handleChange(e)}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>

              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value={"everyone"}
                onChange={(e)=>handleChange(e)}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About Me</label>
              <input
                id="about"
                type="text"
                name="about"
                placeholder="I like long walks ..."
                value={formData.about}
                onChange={(e)=>handleChange(e)}
              />

              <input type="submit" />
          </section>

          <section>
          <label htmlFor="url">Profile Photo</label>
          <input 
            type="url"
            name="url"
            id="url"
            onChange={handleChange}
            required={true}
          />
          <div className="photo-container">
            <img src={formData.url} alt={"profile pic preview"} />
          </div>
          </section>

        </form>

      </div>
    </>
  )
}

export default Onboarding