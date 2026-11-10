import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">KMC Vision</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Shaping the future of healthcare through excellence in nursing and health sciences education. We are committed to producing competent, compassionate professionals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-accent transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
            <li>Spencer Eye Hospital, KMC, Siddiq Wahab Road, Lyari</li>
              <li>Karachi, Sindh, Pakistan</li>
              <li>Email: kmc.vconhs@gmail.com</li>
              <li>Phone: 0310 1152938</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} KMC Vision College of Nursing and Health Sciences. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}