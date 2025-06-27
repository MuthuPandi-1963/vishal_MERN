export default function CategoryCard ({ id, name, desc, image }){
    return(
  <div className="rounded-2xl shadow-md overflow-hidden bg-white hover:scale-105 transition-transform">
    <img src={image} alt={name} className="h-48 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
) }