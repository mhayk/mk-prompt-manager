import { prisma } from '@/lib/prisma';

export default function Home() {
  return (
    <section className="flex min-h-full">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Select one prompt</h1>
          <p className="text-gray-400">
            Choose one of the prompts from the beside list to view and edit it.
          </p>
        </div>
      </div>
    </section>
  );
}
