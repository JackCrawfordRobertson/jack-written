import Image from "next/image";
import TreemapChart from "@/components/TreemapChart";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (


            
        <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground ">
            {/* Header - Top-left positioned */}
            <Navbar />
            <div className="p-6 sm:p-8">
            <header className="max-w-3xl">

                <h1 className="text-4xl font-bold flex items-center gap-2">
                    Written Work
                    <Image src="/logo.svg" alt="Logo" width={35} height={35} />
                </h1>
                <p className="mt-2 text-foreground text-lg">
                    Every block represents a real-world consequence, highlighting the scale of emissions behind each
                    story. Click through to read my writing on the topic, and let’s see where the data leads.
                </p>
            </header>

            {/* Main Content (Placeholder) */}
            <main className="mt-5">
                <TreemapChart />
            </main>
        </div>
        </div>
    );
}
