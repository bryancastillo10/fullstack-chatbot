

const Sidebar = () => {
  return (
    <section className={`fixed flex flex-col bg-black text-primary
    transition-all duration-500 overflow-hidden shadow-md h-full z-10`}>
        {/* Change to z-40 when adding state */}
        <div className="">Header</div>
        <div className="">
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>Appointments</li>
                <li>Consultants</li>
                <li>Settings</li>
            </ul>
        </div>
    </section>
  )
}

export default Sidebar;
