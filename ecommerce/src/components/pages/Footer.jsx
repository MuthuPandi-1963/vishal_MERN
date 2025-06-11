export default function Footer(){
    return(
  <footer className="bg-gray-800 text-gray-200 mt-10 py-6 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-2">ShopEasy</h4>
        <p className="text-sm text-gray-400">Your one-stop shop for everything you need.</p>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Quick Links</h5>
        <ul className="space-y-1 text-sm">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Categories</a></li>
          <li><a href="#" className="hover:underline">Brands</a></li>
          <li><a href="#" className="hover:underline">Products</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-2">Contact Us</h5>
        <p className="text-sm">Email: support@shopeasy.com</p>
        <p className="text-sm">Phone: +91-9876543210</p>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 mt-6">
      &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
    </div>
  </footer>
)
}