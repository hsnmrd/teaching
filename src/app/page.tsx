import { LikeButton } from "./components/LikeButton"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center gap-4">
        <LikeButton />
      </div>
    </main>
  )
}