import { Navbar } from "../components"

const Onboarding = () => {
  const handleSubmit = () =>{}
  return (
    <>
      <Navbar minimal={true}
              setShowModal={()=>{}} 
              showModal={false}
      />
      
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input 
              id="first_name"

            />
          </section>

        </form>

      </div>
    </>
  )
}

export default Onboarding