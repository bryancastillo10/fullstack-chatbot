

const MessageBox = () => {
  return (
    <div className="my-1 flex flex-col justify-evenly gap-y-4">
        <div className="flex gap-2.5 items-center hover:bg-cream hover:text-black p-1">
            <div className="bg-sky-500 size-10 rounded-full"/>
            <div className="text-sm">Name 1</div>
        </div>
        <div className="flex gap-2.5 items-center hover:bg-cream hover:text-black p-1">
            <div className="bg-amber-500 size-10 rounded-full"/>
            <div className="text-sm">Name 2</div>
        </div>
        <div className="flex gap-2.5 items-center hover:bg-cream hover:text-black p-1">
            <div className="bg-teal-500 size-10 rounded-full"/>
            <div className="text-sm">Name 3</div>
        </div>
    </div>
  )
}

export default MessageBox;
