export default function BrandCard({ id, name, c_id, image }) {
  return (
      <div className="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
    <img src={image} alt={name} className="h-32 w-full object-contain mb-2" />
    <div className="text-center">
      <h3 className="font-medium text-base">{name}</h3>
        <p className="text-xs text-gray-500">Category: {c_id}</p>
    </div>
  </div>    
  )
}
