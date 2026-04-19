// import type { Metadata } from "next";
// import "./globals.css";
// import Link from "next/link"; // Use this instead of <a> for fast transitions

// export const metadata: Metadata = {
//   title: "Next Master",
//   description: "Scalable Next.js Template",
// };

// export default function RootLayout({ children, }: { children: React.ReactNode; }) {
//   return (
//     <html lang="en">
//       <body className="antialiased bg-gray-50 text-gray-900">
//         {/* --- Navigation Bar --- */}
//         <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
//           <div className="font-bold text-xl tracking-tight">
//             <Link href="/">NEXT_MASTER</Link>
//           </div>
//           <div className="space-x-6 font-medium">
//             <Link href="/" className="hover:text-blue-600 transition">Home</Link>
//             <Link href="/users" className="hover:text-blue-600 transition">Users</Link>
//             <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Log In</Link>
//           </div>
//         </nav>

//         {/* --- Page Content --- */}
//         <main className="max-w-6xl mx-auto p-6">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import { auth, signOut } from "@/auth";
import Link from "next/link";
import "./globals.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth(); // 1. Fetch the session on the server

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
          <div className="font-bold text-xl"><Link href="/">NEXT_MASTER</Link></div>
          <div className="flex items-center space-x-6 font-medium">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>

            {session ? (
              <>
                <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
                <Link href="/profile" className="hover:text-blue-600">Profile</Link>
                {/* 2. Logout using a Server Action */}
                <form action={async () => { "use server"; await signOut(); }}>
                  <button type="submit" className="text-red-600">Logout</button>
                </form>
              </>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Log In</Link>
            )}
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}