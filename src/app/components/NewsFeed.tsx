{news.map((item) => (
  <div key={item.id} className="group p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
    <div className="flex justify-between items-start mb-4">
      <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest">
        {item.category}
      </span>
      <span className="text-slate-400 text-xs">
        {new Date(item.created_at).toLocaleDateString()}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
      {item.title}
    </h3>
    <p className="text-slate-500 mt-4 leading-relaxed line-clamp-3">
      {item.content}
    </p>
  </div>
))}