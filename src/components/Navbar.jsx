function Navbar() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <h1 className="text-5xl font-bold">
          Global Expense Analytics
        </h1>

        <p className="text-slate-400 mt-2">
          AI Powered Financial Dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#101935] px-5 py-3 rounded-2xl outline-none"
        />

        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="w-14 h-14 rounded-full border-2 border-cyan-400"
        />
      </div>
    </div>
  );
}

export default Navbar;