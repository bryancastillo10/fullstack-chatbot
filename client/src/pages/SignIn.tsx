import AuthFiller from "../ui/AuthFiller";
import AuthNavbar from "../ui/AuthNavbar";


const SignIn = () => {
  const header = (
    <h1 className="p-2 text-2xl font-semibold text-center">Welcome Back to EnviroTech</h1>
  )
  const adStatements = (
    <div className="px-4">
      <p className="text-base mb-2">Your trusted partner in sustainable solutions</p>
      <p className="text-justify"><span className="font-semibold text-secondary">Log in</span> to continue your journey towards a greener, more sustainable future.</p>
    </div>
  )

  return (
    <section>
      {/* Nav Header */}
      <AuthNavbar/>
      {/* Sections */}
      <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center overflow-x-hidden">
      <AuthFiller
        header={header}
        firstImage="/images/signInImg1.png"
        secondImage="/images/signInImg2.png"
        contents={adStatements}
      />
      </main>
    </section>
  )
}

export default SignIn;
